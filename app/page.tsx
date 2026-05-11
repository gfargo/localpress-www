import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { Features } from "@/components/Features";
import { Commands } from "@/components/Commands";
import { Audit } from "@/components/Audit";
import { Comparison } from "@/components/Comparison";
import { Mcp } from "@/components/Mcp";
import { Skill } from "@/components/Skill";
import { Install } from "@/components/Install";
import { getLatestVersion } from "@/lib/github";

export default async function HomePage() {
  const version = await getLatestVersion();

  return (
    <>
      <Hero version={version} />
      <Showcase />
      <Features />
      <Commands />
      <Audit />
      <Comparison />
      <Mcp />
      <Skill />
      <Install />
    </>
  );
}
