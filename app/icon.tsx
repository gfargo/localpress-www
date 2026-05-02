import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        {/* Simple terminal prompt icon */}
        <div
          style={{
            width: "16px",
            height: "16px",
            background: "linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)",
            borderRadius: "4px",
            position: "relative",
          }}
        >
          {/* Terminal dots */}
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "2px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#ef4444",
              }}
            />
            <div
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#f59e0b",
              }}
            />
            <div
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}