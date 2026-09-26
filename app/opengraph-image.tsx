import { ImageResponse } from "next/og";
import { company } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0e3b27",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#c75b2c",
            opacity: 0.35,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#a6e22e",
            textTransform: "uppercase",
          }}
        >
          {company.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#f7f1e1",
            maxWidth: 900,
          }}
        >
          {company.slogan}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "rgba(247,241,225,0.7)",
          }}
        >
          Ouagadougou · Bobo-Dioulasso · Burkina Faso
        </div>
      </div>
    ),
    { ...size }
  );
}
