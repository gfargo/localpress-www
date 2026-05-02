import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "localpress — Local-compute WordPress media optimization";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Use system fonts to avoid external dependencies
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          color: "white",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Terminal-style header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#ef4444",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#f59e0b",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#10b981",
            }}
          />
          <div
            style={{
              marginLeft: "auto",
              fontSize: "18px",
              color: "#a1a1aa",
              fontFamily: "Fira Code",
            }}
          >
            localpress:~$
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #ffffff 0%, #a1a1aa 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
            }}
          >
            Your laptop,
          </h1>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "40px",
              background: "linear-gradient(90deg, #10b981 0%, #0ea5e9 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
            }}
          >
            your library.
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "#a1a1aa",
              maxWidth: "800px",
              marginBottom: "40px",
              lineHeight: 1.4,
            }}
          >
            Local-compute WordPress media optimization. Compress images, remove backgrounds, convert formats, and round-trip with desktop editors.
          </p>

          {/* Terminal command */}
          <div
            style={{
              background: "#1f2937",
              borderRadius: "12px",
              padding: "20px 30px",
              border: "1px solid #374151",
              fontFamily: "Fira Code",
              fontSize: "24px",
              color: "#d1d5db",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ color: "#6b7280" }}>$</span>
            <span>brew install gfargo/localpress/localpress</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid #374151",
            color: "#6b7280",
            fontSize: "18px",
          }}
        >
          <span>localpress.griffen.codes</span>
          <span>No cloud SaaS • No recurring credits • No plugin required</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Fira Code",
          data: firaCodeRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}