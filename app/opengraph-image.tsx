import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "localpress — Local-compute WordPress media optimization"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060606",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          fontFamily: "monospace",
        }}
      >
        {/* Dot grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "radial-gradient(circle, #252525 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            marginLeft: -300,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,229,153,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Window chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 48,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3a3a3a",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3a3a3a",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3a3a3a",
            }}
          />
          <div
            style={{
              marginLeft: "auto",
              fontSize: 16,
              color: "#5a5a5a",
              letterSpacing: "0.1em",
            }}
          >
            bash
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#5a5a5a",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            localpress
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                fontSize: 90,
                fontWeight: 700,
                color: "#f0ece3",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Your laptop,
            </div>
            <div
              style={{
                fontSize: 90,
                fontWeight: 700,
                color: "#00e599",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              your library.
            </div>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 26,
              color: "#8a8580",
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            Local-compute WordPress media optimization. No cloud SaaS. No
            recurring credits. No plugin required.
          </div>
        </div>

        {/* Install command */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "20px 28px",
            background: "#181818",
            border: "1px solid #252525",
            borderRadius: 8,
            marginTop: 40,
            position: "relative",
          }}
        >
          <span style={{ color: "#00e599", fontSize: 18, fontWeight: 500 }}>
            $
          </span>
          <span style={{ color: "#c8c4bb", fontSize: 20 }}>
            brew install gfargo/localpress/localpress
          </span>
          <div
            style={{
              marginLeft: "auto",
              fontSize: 16,
              color: "#5a5a5a",
            }}
          >
            localpress.griffen.codes
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
