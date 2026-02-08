import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header() {
  const { theme, variation } = useTheme();
  const isAnimated = variation >= 3;
  const isDark = variation >= 4;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={isAnimated ? { y: -20, opacity: 0 } : undefined}
      animate={isAnimated ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.5 }}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isDark
          ? "rgba(10, 10, 15, 0.9)"
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid #e5e7eb",
        padding: "16px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo size="md" />

        <nav
          className="hide-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <a
            href="#services"
            style={{
              color: theme.textMuted,
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = theme.textMuted)
            }
          >
            Services
          </a>
          <a
            href="#pricing"
            style={{
              color: theme.textMuted,
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = theme.textMuted)
            }
          >
            Tarifs
          </a>
          <a
            href="#faq"
            style={{
              color: theme.textMuted,
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = theme.textMuted)
            }
          >
            FAQ
          </a>
        </nav>

        <Button onClick={scrollToContact} variant="primary" size="sm">
          Prendre Rendez-Vous
        </Button>
      </div>
    </motion.header>
  );
}
