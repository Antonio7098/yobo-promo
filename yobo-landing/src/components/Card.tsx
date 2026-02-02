import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "glass" | "gradient";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}

export function Card({
  children,
  variant = "default",
  hover = true,
  padding = "md",
  style,
}: CardProps) {
  const { theme, variation } = useTheme();

  const paddingSizes = {
    sm: "16px",
    md: "24px",
    lg: "32px",
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "elevated":
        return {
          background: theme.cardBg,
          boxShadow:
            variation >= 4
              ? "0 8px 32px rgba(0,0,0,0.3)"
              : "0 4px 20px rgba(0,0,0,0.08)",
          border:
            variation >= 4 ? "1px solid rgba(255,255,255,0.1)" : "none",
        };
      case "glass":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        };
      case "gradient":
        return {
          background: `linear-gradient(135deg, ${theme.gradientStart}22, ${theme.gradientEnd}22)`,
          border: `1px solid ${theme.primary}33`,
        };
      default:
        return {
          background: theme.cardBg,
          border:
            variation >= 4
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid #e5e7eb",
        };
    }
  };

  const isAnimated = variation >= 3;

  return (
    <motion.div
      initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      whileHover={
        hover && isAnimated
          ? {
              y: -8,
              boxShadow:
                variation >= 4
                  ? "0 20px 40px rgba(41, 29, 137, 0.3)"
                  : "0 12px 30px rgba(0,0,0,0.12)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      style={{
        padding: paddingSizes[padding],
        borderRadius: theme.borderRadius,
        overflow: "hidden",
        transition: "all 0.3s ease",
        ...getVariantStyles(),
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
