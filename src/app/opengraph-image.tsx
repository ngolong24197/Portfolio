import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#09110F",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.28) 0%, rgba(9, 17, 15, 0) 70%)",
          color: "#ECFDF5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              border: "2px solid #10B981",
              backgroundColor: "#101F1B",
              color: "#10B981",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            {profile.initial}
          </div>
          <div style={{ fontSize: 30, color: "#6EE7B7" }}>{profile.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            Turning ideas into useful software.
          </div>
          <div style={{ fontSize: 32, color: "#94A3B8" }}>{profile.role}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #1A352C",
            paddingTop: 28,
            fontSize: 26,
            color: "#34D399",
          }}
        >
          <div>Spring Boot · React · Android</div>
          <div style={{ color: "#94A3B8" }}>{profile.location}</div>
        </div>
      </div>
    ),
    size,
  );
}
