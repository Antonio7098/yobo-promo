import { useTheme, variationNames } from "../context/ThemeContext";
import type { VariationType } from "../context/ThemeContext";
import { motion } from "framer-motion";

export function VariationTabs() {
  const { variation, setVariation, theme } = useTheme();

  const tabs: VariationType[] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(10, 10, 15, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "12px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span
          className="hide-mobile"
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            marginRight: "12px",
            fontWeight: 500,
          }}
        >
          Variations:
        </span>
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setVariation(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.2s",
              background:
                variation === tab
                  ? `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`
                  : "rgba(255,255,255,0.1)",
              color: variation === tab ? "#fff" : "#9ca3af",
              boxShadow:
                variation === tab
                  ? "0 4px 15px rgba(41, 29, 137, 0.4)"
                  : "none",
            }}
          >
            {tab}. {variationNames[tab]}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
