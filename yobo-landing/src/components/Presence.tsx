import { motion } from "framer-motion";
import { Section } from "./Section";
import { content } from "../data/content";
import { useTheme } from "../context/ThemeContext";
import { Smartphone } from "lucide-react";

export function Presence() {
  const { theme, variation } = useTheme();
  const isAnimated = variation >= 3;
  const isDark = variation >= 4;

  return (
    <Section id="services" variant="default" padding="xl">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Text side */}
        <motion.div
          initial={isAnimated ? { opacity: 0, x: -30 } : undefined}
          whileInView={isAnimated ? { opacity: 1, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: theme.text,
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            {content.presence.title}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            {content.presence.platforms.map((platform, index) => (
              <motion.span
                key={platform}
                initial={isAnimated ? { opacity: 0, x: -20 } : undefined}
                whileInView={isAnimated ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                style={{
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 900,
                  color: variation >= 4 ? theme.primaryLight : theme.text,
                  letterSpacing: "-2px",
                }}
              >
                {platform}
              </motion.span>
            ))}
            <motion.span
              initial={isAnimated ? { opacity: 0, scale: 0.8 } : undefined}
              whileInView={isAnimated ? { opacity: 1, scale: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 900,
                color: "#22c55e",
                letterSpacing: "-2px",
              }}
            >
              {content.presence.availability}
            </motion.span>
          </div>
        </motion.div>

        {/* Phone mockup side */}
        <motion.div
          initial={isAnimated ? { opacity: 0, x: 30 } : undefined}
          whileInView={isAnimated ? { opacity: 1, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "500px",
            }}
          >
            {/* Phone shadow/platform */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "40px",
                background: isDark
                  ? "radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%)"
                  : "radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            {/* Phone */}
            <motion.div
              animate={
                isAnimated
                  ? {
                      y: [0, -10, 0],
                    }
                  : undefined
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "100%",
                height: "100%",
                background: isDark
                  ? "linear-gradient(135deg, #2d2d3a 0%, #1a1a24 100%)"
                  : "linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%)",
                borderRadius: "40px",
                border: isDark
                  ? "3px solid #3d3d4a"
                  : "3px solid #d1d5db",
                boxShadow: isDark
                  ? "0 30px 60px rgba(0,0,0,0.4), inset 0 0 0 2px rgba(255,255,255,0.05)"
                  : "0 30px 60px rgba(0,0,0,0.15)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "28px",
                  background: isDark ? "#1a1a24" : "#000",
                  borderRadius: "20px",
                  zIndex: 10,
                }}
              />

              {/* Screen content */}
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "10px",
                  right: "10px",
                  bottom: "10px",
                  background: isDark
                    ? "linear-gradient(135deg, #291d89 0%, #1e1b4b 100%)"
                    : "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Smartphone
                  size={48}
                  color={isDark ? "#a5b4fc" : theme.primary}
                  style={{ marginBottom: "16px" }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: isDark ? "#ffffff" : theme.primary,
                    textAlign: "center",
                  }}
                >
                  Votre publicité
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: isDark ? "#a5b4fc" : theme.textMuted,
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  visible partout
                </span>

                {/* Fake notification */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: "60px",
                    left: "20px",
                    right: "20px",
                    background: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "#ffffff",
                    borderRadius: "12px",
                    padding: "12px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: theme.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "12px" }}>
                        YP
                      </span>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: theme.text,
                          margin: 0,
                        }}
                      >
                        Nouvelle conversion!
                      </p>
                      <p
                        style={{
                          fontSize: "10px",
                          color: theme.textMuted,
                          margin: 0,
                        }}
                      >
                        +1 client potentiel
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
