import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Logo } from "./Logo";
import { content } from "../data/content";

export function Footer() {
  const { theme, variation } = useTheme();
  const isAnimated = variation >= 3;
  const isDark = variation >= 4;

  return (
    <footer
      style={{
        padding: "60px 0 40px",
        background: isDark ? "#0a0a0f" : theme.primary,
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
          whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <Logo size="lg" variant="light" />

          <nav
            style={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {content.footer.links.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={isAnimated ? { opacity: 0, y: 10 } : undefined}
                whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
              >
                {link}
              </motion.a>
            ))}
          </nav>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.1)",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                margin: 0,
              }}
            >
              {content.footer.copyright}
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
