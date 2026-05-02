import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060606",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <span style={{ color: "#00e599", fontSize: 18, fontWeight: 700 }}>
            $
          </span>
          <span
            style={{
              width: 8,
              height: 14,
              background: "#00e599",
              borderRadius: 1,
              opacity: 0.85,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
