import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E2736",
          borderRadius: 24,
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 237 237"
          fill="none"
          style={{ margin: "auto" }}
        >
          <rect
            x="19.1"
            y="15.1"
            width="198"
            height="198"
            rx="27"
            fill="#1E2736"
          />
          <path
            d="M67 174.1V55.1001H121.4C132.28 55.1001 141.63 56.8568 149.45 60.3701C157.383 63.8834 163.503 68.9834 167.81 75.6701C172.117 82.2434 174.27 90.0634 174.27 99.1301C174.27 108.083 172.117 115.847 167.81 122.42C163.503 128.993 157.383 134.093 149.45 137.72C141.63 141.233 132.28 142.99 121.4 142.99H85.7L100.66 128.37V174.1H67ZM100.66 131.94L85.7 116.47H119.36C126.387 116.47 131.6 114.94 135 111.88C138.513 108.82 140.27 104.57 140.27 99.1301C140.27 93.5768 138.513 89.2701 135 86.2101C131.6 83.1501 126.387 81.6201 119.36 81.6201H85.7L100.66 66.1501V131.94Z"
            fill="#89C8FF"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
