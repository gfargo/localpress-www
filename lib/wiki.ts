/**
 * Fetches pages from the localpress GitHub Wiki.
 * 
 * In development: reads from local `.wiki/` directory
 * In production: fetches from GitHub API
 */

interface WikiPage {
  slug: string;
  title: string;
  description?: string;
  url: string;
  content?: string;
}

const WIKI_REPO = "gfargo/localpress";

function getFallbackPages(): WikiPage[] {
  return [
    {
      slug: "Home",
      title: "localpress Documentation",
      description: "Local-compute WordPress media optimization CLI",
      url: `https://github.com/${WIKI_REPO}/wiki`,
      content: "# localpress Documentation\n\n> \"Your laptop, your library.\"\n\nWelcome to the localpress documentation. This wiki serves as the main source of truth for using, configuring, and extending localpress.",
    },
    {
      slug: "Getting-Started",
      title: "Getting Started",
      description: "Installation and first steps with localpress",
      url: `https://github.com/${WIKI_REPO}/wiki/Getting-Started`,
      content: "# Getting Started\n\nThis guide will help you install localpress and connect your first WordPress site.",
    },
    {
      slug: "Commands-Reference",
      title: "Commands Reference",
      description: "Complete CLI command documentation",
      url: `https://github.com/${WIKI_REPO}/wiki/Commands-Reference`,
      content: "# Commands Reference\n\nlocalpress has 15 commands organized into 5 categories.",
    },
    {
      slug: "AI-Agent-Integration",
      title: "AI Agent Integration",
      description: "Using localpress with Claude Desktop, Cursor, and other MCP clients",
      url: `https://github.com/${WIKI_REPO}/wiki/AI-Agent-Integration`,
      content: "# AI Agent Integration\n\nlocalpress ships with a companion skill that teaches AI agents how to drive the CLI.",
    },
    {
      slug: "Configuration",
      title: "Configuration",
      description: "Config files, profiles, and site management",
      url: `https://github.com/${WIKI_REPO}/wiki/Configuration`,
      content: "# Configuration\n\nlocalpress stores configuration in `~/.config/localpress/`.",
    },
  ];
}

export async function getWikiPages(): Promise<WikiPage[]> {
  // In development, read from local .wiki directory
  if (process.env.NODE_ENV === "development") {
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      
      const wikiDir = path.join(process.cwd(), "..", ".wiki");
      const files = await fs.readdir(wikiDir);
      
      const markdownFiles = files.filter(file => file.endsWith(".md"));
      
      const pages = await Promise.all(
        markdownFiles.map(async (file) => {
          const slug = file.replace(".md", "");
          const filePath = path.join(wikiDir, file);
          const content = await fs.readFile(filePath, "utf-8");
          
          // Extract title from frontmatter or use slug
          let title = slug;
          let description = "";
          
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title:\s*(.+)/);
            if (titleMatch) {
              title = titleMatch[1].trim();
            }
            const descriptionMatch = frontmatter.match(/description:\s*(.+)/);
            if (descriptionMatch) {
              description = descriptionMatch[1].trim();
            }
          }
          
          // If no frontmatter title, use filename
          if (title === slug && slug !== "Home") {
            title = slug.replace(/-/g, " ");
          }

          return {
            slug,
            title,
            description,
            url: `https://github.com/${WIKI_REPO}/wiki/${slug}`,
            content,
          };
        })
      );
      
      return pages;
    } catch (error) {
      console.error("Error reading local wiki:", error);
      // Fall back to GitHub API
    }
  }

  // Production: fetch from GitHub API
  try {
    // Fetch the list of wiki pages
    const response = await fetch(`https://api.github.com/repos/${WIKI_REPO}/wiki`, {
      headers: {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Failed to fetch wiki pages:", response.statusText);
      // Return fallback pages if wiki doesn't exist yet
      return getFallbackPages();
    }

    const data = await response.json();
    
    // The GitHub Wiki API returns a list of pages with their slugs
    // We need to fetch each page individually to get the content
    const pages = await Promise.all(
      (data as Array<{ slug: string }>).map(async (page) => {
        const contentResponse = await fetch(
          `https://raw.githubusercontent.com/wiki/${WIKI_REPO}/${page.slug}.md`,
          { next: { revalidate: 3600 } }
        );
        
        let content = "";
        if (contentResponse.ok) {
          content = await contentResponse.text();
        }

        // Extract title from frontmatter or use slug
        let title = page.slug;
        let description = "";
        
        if (content) {
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title:\s*(.+)/);
            if (titleMatch) {
              title = titleMatch[1].trim();
            }
            const descriptionMatch = frontmatter.match(/description:\s*(.+)/);
            if (descriptionMatch) {
              description = descriptionMatch[1].trim();
            }
          }
        }

        return {
          slug: page.slug,
          title,
          description,
          url: `https://github.com/${WIKI_REPO}/wiki/${page.slug}`,
          content,
        };
      })
    );

    return pages;
  } catch (error) {
    console.error("Error fetching wiki pages:", error);
    return [];
  }
}
