import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  style,
  ...props
}: ButtonProps) {
  const { theme, variation } = useTheme();

  const sizes = {
    sm: { padding: "8px 16px", fontSize: "14px" },
    md: { padding: "12px 24px", fontSize: "16px" },
    lg: { padding: "16px 32px", fontSize: "18px" },
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        if (variation >= 4) {
          return {
            background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
            color: "#ffffff",
            border: "none",
            boxShadow: "0 4px 20px rgba(41, 29, 137, 0.4)",
          };
        }
        return {
          background: theme.primary,
          color: "#ffffff",
          border: "none",
          boxShadow: "0 4px 15px rgba(41, 29, 137, 0.3)",
        };
      case "secondary":
        return {
          background:
            variation >= 4
              ? "rgba(255,255,255,0.1)"
              : theme.secondary,
          color: variation >= 4 ? "#ffffff" : theme.primary,
          border: "none",
        };
      case "outline":
        return {
          background: "transparent",
          color: variation >= 4 ? "#ffffff" : theme.primary,
          border: `2px solid ${variation >= 4 ? "rgba(255,255,255,0.3)" : theme.primary}`,
        };
      case "ghost":
        return {
          background: "transparent",
          color: variation >= 4 ? "#ffffff" : theme.text,
          border: "none",
        };
      default:
        return {};
    }
  };

  const isAnimated = variation >= 3;

  return (
    <motion.button
      whileHover={isAnimated ? { scale: 1.03, y: -2 } : undefined}
      whileTap={isAnimated ? { scale: 0.98 } : undefined}
      style={{
        ...sizes[size],
        borderRadius: theme.borderRadius,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
        width: fullWidth ? "100%" : "auto",
        fontFamily: theme.fontFamily,
        ...getVariantStyles(),
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
