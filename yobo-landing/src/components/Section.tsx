import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface SectionProps {
  children: ReactNode;
  variant?: "default" | "alt" | "gradient" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
  style?: React.CSSProperties;
}

export function Section({
  children,
  variant = "default",
  padding = "lg",
  id,
  style,
}: SectionProps) {
  const { theme, variation } = useTheme();

  const paddingSizes = {
    sm: "40px 0",
    md: "60px 0",
    lg: "80px 0",
    xl: "120px 0",
  };

  const getBackground = (): string => {
    switch (variant) {
      case "alt":
        if (variation >= 4) {
          return theme.backgroundAlt;
        }
        return theme.backgroundAlt;
      case "gradient":
        return `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`;
      case "dark":
        return variation >= 4 ? "#0a0a0f" : theme.primary;
      default:
        return theme.background;
    }
  };

  const isAnimated = variation >= 3;

  return (
    <section
      id={id}
      style={{
        padding: paddingSizes[padding],
        background: getBackground(),
        ...style,
      }}
    >
      <motion.div
        initial={isAnimated ? { opacity: 0 } : undefined}
        whileInView={isAnimated ? { opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const { theme, variation } = useTheme();
  const isAnimated = variation >= 3;
  const isDark = variation >= 4;

  return (
    <motion.div
      initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: align,
        marginBottom: "48px",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 700,
          color: light ? "#ffffff" : isDark ? theme.text : theme.primary,
          marginBottom: subtitle ? "16px" : "0",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "18px",
            color: light
              ? "rgba(255,255,255,0.8)"
              : theme.textMuted,
            maxWidth: "600px",
            margin: align === "center" ? "0 auto" : "0",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
