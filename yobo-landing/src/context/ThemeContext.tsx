import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type VariationType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface ThemeConfig {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  text: string;
  textMuted: string;
  cardBg: string;
  borderRadius: string;
  fontFamily: string;
  gradientStart: string;
  gradientEnd: string;
}

export const themes: Record<VariationType, ThemeConfig> = {
  0: {
    // Original - Clean white with subtle purple
    primary: "#291d89",
    primaryLight: "#4a3cb8",
    primaryDark: "#1a1259",
    secondary: "#f0f0f7",
    accent: "#291d89",
    background: "#ffffff",
    backgroundAlt: "#fafaff",
    text: "#1a1a2e",
    textMuted: "#6b7280",
    cardBg: "#ffffff",
    borderRadius: "8px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#291d89",
    gradientEnd: "#4a3cb8",
  },
  1: {
    // Minimal - Clean white with subtle purple
    primary: "#291d89",
    primaryLight: "#4a3cb8",
    primaryDark: "#1a1259",
    secondary: "#f0f0f7",
    accent: "#291d89",
    background: "#ffffff",
    backgroundAlt: "#fafaff",
    text: "#1a1a2e",
    textMuted: "#6b7280",
    cardBg: "#ffffff",
    borderRadius: "8px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#291d89",
    gradientEnd: "#4a3cb8",
  },
  2: {
    // Soft Purple - Light purple tones
    primary: "#291d89",
    primaryLight: "#6366f1",
    primaryDark: "#1e1b4b",
    secondary: "#e0e7ff",
    accent: "#291d89",
    background: "#f5f3ff",
    backgroundAlt: "#ede9fe",
    text: "#1e1b4b",
    textMuted: "#6366f1",
    cardBg: "#ffffff",
    borderRadius: "12px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#291d89",
    gradientEnd: "#7c3aed",
  },
  3: {
    // Bold Contrast - Dark headers, light sections
    primary: "#291d89",
    primaryLight: "#818cf8",
    primaryDark: "#1e1b4b",
    secondary: "#fbbf24",
    accent: "#291d89",
    background: "#ffffff",
    backgroundAlt: "#1e1b4b",
    text: "#111827",
    textMuted: "#4b5563",
    cardBg: "#ffffff",
    borderRadius: "16px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#1e1b4b",
    gradientEnd: "#291d89",
  },
  4: {
    // Gradient Rich - Purple gradients everywhere
    primary: "#291d89",
    primaryLight: "#a78bfa",
    primaryDark: "#1e1b4b",
    secondary: "#f0abfc",
    accent: "#291d89",
    background: "#0f0a1f",
    backgroundAlt: "#1a1333",
    text: "#f8fafc",
    textMuted: "#a5b4fc",
    cardBg: "rgba(41, 29, 137, 0.3)",
    borderRadius: "20px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#291d89",
    gradientEnd: "#db2777",
  },
  5: {
    // Modern Glass - Glassmorphism
    primary: "#291d89",
    primaryLight: "#c4b5fd",
    primaryDark: "#1e1b4b",
    secondary: "#06b6d4",
    accent: "#291d89",
    background: "linear-gradient(135deg, #1e1b4b 0%, #291d89 50%, #3730a3 100%)",
    backgroundAlt: "rgba(255, 255, 255, 0.1)",
    text: "#ffffff",
    textMuted: "#c4b5fd",
    cardBg: "rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#291d89",
    gradientEnd: "#06b6d4",
  },
  6: {
    // Premium Dark - Rich dark with gold accents
    primary: "#291d89",
    primaryLight: "#a78bfa",
    primaryDark: "#0f0a1f",
    secondary: "#fbbf24",
    accent: "#291d89",
    background: "#0a0a0f",
    backgroundAlt: "#12121a",
    text: "#f8fafc",
    textMuted: "#9ca3af",
    cardBg: "#18181f",
    borderRadius: "16px",
    fontFamily: "'Inter', sans-serif",
    gradientStart: "#291d89",
    gradientEnd: "#fbbf24",
  },
};

export const variationNames: Record<VariationType, string> = {
  0: "Original",
  1: "Minimal",
  2: "Soft",
  3: "Bold",
  4: "Gradient",
  5: "Glass",
  6: "Premium",
};

interface ThemeContextType {
  variation: VariationType;
  setVariation: (v: VariationType) => void;
  theme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [variation, setVariation] = useState<VariationType>(6);

  return (
    <ThemeContext.Provider
      value={{ variation, setVariation, theme: themes[variation] }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
