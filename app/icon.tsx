import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0e1a",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Glow halo */}
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(251,191,36,0) 70%)",
          }}
        />
        {/* Diamond shape via SVG */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          style={{ position: "absolute" }}
        >
          {/* Outer diamond */}
          <polygon
            points="9,1 17,9 9,17 1,9"
            fill="#f59e0b"
            stroke="#fcd34d"
            stroke-width="0.5"
          />
          {/* Top-left facet */}
          <polygon points="9,1 1,9 9,9" fill="#fbbf24" opacity="0.7" />
          {/* Top-right facet */}
          <polygon points="9,1 17,9 9,9" fill="#d97706" opacity="0.9" />
          {/* Bottom facet */}
          <polygon points="1,9 17,9 9,17" fill="#92400e" opacity="0.8" />
          {/* Center highlight */}
          <polygon points="9,3 15,9 9,9 3,9" fill="#fef3c7" opacity="0.25" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
