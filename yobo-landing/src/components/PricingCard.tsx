import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Check } from "lucide-react";
import type { Plan } from "../data/content";

interface PricingCardProps {
  plan: Plan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  const { theme, variation } = useTheme();
  const isAnimated = variation >= 3;
  const isDark = variation >= 4;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const getCardStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      borderRadius: theme.borderRadius,
      overflow: "hidden",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    };

    switch (variation) {
      case 1:
        return {
          ...base,
          background: "#ffffff",
          border: "1px solid #e5e7eb",
        };
      case 2:
        return {
          ...base,
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.08)",
          border: "1px solid #e0e7ff",
        };
      case 3:
        return {
          ...base,
          background: "#ffffff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        };
      case 4:
        return {
          ...base,
          background: `linear-gradient(135deg, rgba(41, 29, 137, 0.2) 0%, rgba(41, 29, 137, 0.05) 100%)`,
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        };
      case 5:
        return {
          ...base,
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        };
      case 6:
        return {
          ...base,
          background: theme.cardBg,
          border: "1px solid rgba(255,255,255,0.08)",
        };
      default:
        return base;
    }
  };

  const getButtonGradient = () => {
    if (variation >= 4) {
      return `linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #a8ff78 100%)`;
    }
    return `linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)`;
  };

  return (
    <motion.div
      initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={
        isAnimated
          ? {
              y: -10,
              boxShadow: isDark
                ? "0 20px 40px rgba(41, 29, 137, 0.3)"
                : "0 20px 40px rgba(0,0,0,0.12)",
            }
          : undefined
      }
      style={getCardStyle()}
    >
      {/* Header */}
      <div style={{ padding: "24px 24px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "16px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: theme.textMuted,
              }}
            >
              {plan.code}
            </span>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: theme.text,
                lineHeight: 1.2,
                marginTop: "4px",
              }}
            >
              {plan.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: theme.textMuted,
                marginTop: "4px",
              }}
            >
              {plan.subtitle}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#22c55e",
              }}
            >
              {plan.price}
            </span>
            <p
              style={{
                fontSize: "13px",
                color: "#22c55e",
                fontWeight: 500,
              }}
            >
              {plan.priceNote}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToContact}
          whileHover={isAnimated ? { scale: 1.02 } : undefined}
          whileTap={isAnimated ? { scale: 0.98 } : undefined}
          style={{
            width: "100%",
            padding: "14px 24px",
            borderRadius: "100px",
            border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
            background: getButtonGradient(),
            color: "#1a1a2e",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(150, 230, 161, 0.3)",
            transition: "all 0.2s",
          }}
        >
          {plan.cta}
        </motion.button>
      </div>

      {/* Features */}
      <div
        style={{
          padding: "20px 24px 24px",
          borderTop: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid #f3f4f6",
          flex: 1,
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: theme.textMuted,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          INCLUS
        </span>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "16px 0 0",
          }}
        >
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={isAnimated ? { opacity: 0, x: -10 } : undefined}
              whileInView={isAnimated ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "12px",
                fontSize: "14px",
                color: theme.text,
              }}
            >
              <Check
                size={18}
                color={theme.primary}
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <span>{feature}</span>
            </motion.li>
          ))}
          {plan.strikethrough && (
            <li
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                fontSize: "14px",
                color: theme.textMuted,
                textDecoration: "line-through",
              }}
            >
              <Check
                size={18}
                color={theme.textMuted}
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <span>{plan.strikethrough}</span>
            </li>
          )}
        </ul>

        {/* Discount badge */}
        {plan.discount && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              padding: "8px 12px",
              background: isDark
                ? "rgba(99, 102, 241, 0.2)"
                : theme.secondary,
              borderRadius: "8px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: theme.primary,
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: theme.primary,
              }}
            >
              {plan.discount}
            </span>
          </div>
        )}

        {/* Expiry */}
        {plan.expiry && (
          <p
            style={{
              marginTop: "12px",
              fontSize: "13px",
              color: theme.textMuted,
            }}
          >
            {plan.expiry}
          </p>
        )}
      </div>
    </motion.div>
  );
}
