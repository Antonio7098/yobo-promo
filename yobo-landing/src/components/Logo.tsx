import { useTheme } from "../context/ThemeContext";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "auto";
}

export function Logo({ size = "md", variant = "auto" }: LogoProps) {
  const { theme, variation } = useTheme();

  const sizes = {
    sm: { height: 32, fontSize: 18 },
    md: { height: 40, fontSize: 22 },
    lg: { height: 56, fontSize: 32 },
  };

  const isDark = variation >= 4;
  const color =
    variant === "light"
      ? "#ffffff"
      : variant === "dark"
        ? theme.primary
        : isDark
          ? "#ffffff"
          : theme.primary;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: sizes[size].height,
      }}
    >
      <svg
        width={sizes[size].height}
        height={sizes[size].height}
        viewBox="0 0 60 60"
        fill="none"
      >
        <rect
          x="2"
          y="2"
          width="56"
          height="56"
          rx="4"
          stroke={color}
          strokeWidth="3"
          strokeDasharray="4 4"
        />
        <text
          x="10"
          y="27"
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
        >
          Y
        </text>
        <text
          x="28"
          y="27"
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
        >
          8
        </text>
        <text
          x="10"
          y="48"
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
        >
          B
        </text>
        <text
          x="28"
          y="48"
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
        >
          O
        </text>
      </svg>
      <span
        style={{
          fontWeight: 800,
          fontSize: sizes[size].fontSize,
          color: color,
          letterSpacing: "-0.5px",
        }}
      >
        <span style={{ textDecoration: "underline" }}>YOBO</span>Promo.
      </span>
    </div>
  );
}
