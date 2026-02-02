import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { content } from "../data/content";
import { Plus, Minus, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

// Layout 1: Minimal - Simple accordion
function FAQMinimal() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, color: theme.text, textAlign: "center", marginBottom: "16px" }}>{content.faq.title}</h2>
        <p style={{ fontSize: "16px", color: theme.textMuted, textAlign: "center", marginBottom: "48px" }}>{content.faq.subtitle}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {content.faq.items.map((item, i) => (
            <div key={i} style={{ background: "#fafafa", borderRadius: "8px", overflow: "hidden" }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: "16px", fontWeight: 500, color: theme.text }}>{item.question}</span>
                <ChevronDown size={20} color={theme.textMuted} style={{ transform: openIndex === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 24px 20px", fontSize: "15px", color: theme.textMuted, lineHeight: 1.7 }}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 2: Soft - Cards with hover effect
function FAQSoft() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", padding: "8px 16px", background: theme.secondary, borderRadius: "100px", fontSize: "14px", fontWeight: 600, color: theme.primary, marginBottom: "16px" }}>FAQ</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: theme.text }}>{content.faq.title}</h2>
        </div>

        <div style={{ display: "grid", gap: "16px" }}>
          {content.faq.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              style={{ background: "#fff", borderRadius: "16px", boxShadow: openIndex === i ? "0 10px 40px rgba(99, 102, 241, 0.15)" : "0 2px 10px rgba(0,0,0,0.05)", border: openIndex === i ? `2px solid ${theme.primary}22` : "2px solid transparent", transition: "all 0.3s" }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: "17px", fontWeight: 600, color: theme.text }}>{item.question}</span>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: openIndex === i ? theme.primary : theme.secondary, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                  {openIndex === i ? <Minus size={18} color="#fff" /> : <Plus size={18} color={theme.primary} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 24px 24px", fontSize: "15px", color: theme.textMuted, lineHeight: 1.8 }}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 3: Bold - Two column with large numbers
function FAQBold() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "sticky", top: "150px" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: theme.text, marginBottom: "16px" }}>Questions<br />fréquentes</h2>
            <p style={{ fontSize: "17px", color: theme.textMuted, lineHeight: 1.7, marginBottom: "32px" }}>Tout ce que vous devez savoir sur nos services.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: theme.primary }}>
              <HelpCircle size={24} />
              <span style={{ fontSize: "15px", fontWeight: 600 }}>Une autre question? Contactez-nous</span>
            </div>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {content.faq.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                style={{ borderBottom: "1px solid #e5e7eb" }}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: "100%", padding: "28px 0", display: "flex", alignItems: "flex-start", gap: "24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "48px", fontWeight: 900, color: openIndex === i ? theme.primary : "#e5e7eb", lineHeight: 1, transition: "color 0.2s" }}>0{i + 1}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: theme.text }}>{item.question}</span>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.p initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: "auto", opacity: 1, marginTop: 16 }} exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          style={{ fontSize: "15px", color: theme.textMuted, lineHeight: 1.8, overflow: "hidden" }}>{item.answer}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Layout 4: Gradient - Glowing cards
function FAQGradient() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "120px 24px", background: theme.background, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: `radial-gradient(circle, ${theme.gradientEnd}22 0%, transparent 70%)`, filter: "blur(80px)" }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: theme.text, marginBottom: "16px" }}>{content.faq.title}</h2>
          <p style={{ fontSize: "18px", color: theme.textMuted }}>{content.faq.subtitle}</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {content.faq.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              style={{ background: openIndex === i ? `linear-gradient(135deg, ${theme.gradientStart}22, ${theme.gradientEnd}11)` : "rgba(255,255,255,0.03)", border: openIndex === i ? `1px solid ${theme.primary}44` : "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden", transition: "all 0.3s" }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: "16px", fontWeight: 600, color: theme.text }}>{item.question}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} style={{ width: "28px", height: "28px", borderRadius: "8px", background: openIndex === i ? `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})` : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ChevronDown size={16} color="#fff" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 24px 24px", fontSize: "15px", color: theme.textMuted, lineHeight: 1.8 }}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 5: Glass - Floating panels
function FAQGlass() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "120px 24px", background: theme.background, position: "relative", overflow: "hidden" }}>
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}
        style={{ position: "absolute", top: "20%", right: "10%", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.gradientStart}33 0%, transparent 70%)`, filter: "blur(60px)" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "sticky", top: "150px" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "32px" }}>
              <MessageSquare size={40} color={theme.primaryLight} style={{ marginBottom: "20px" }} />
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: theme.text, marginBottom: "16px" }}>{content.faq.title}</h2>
              <p style={{ fontSize: "16px", color: theme.textMuted, lineHeight: 1.7 }}>{content.faq.subtitle}</p>
            </div>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {content.faq.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: openIndex === i ? `1px solid ${theme.primaryLight}44` : "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", overflow: "hidden" }}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: theme.text }}>{item.question}</span>
                  {openIndex === i ? <Minus size={18} color={theme.primaryLight} /> : <Plus size={18} color={theme.textMuted} />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                      <p style={{ padding: "0 24px 20px", fontSize: "14px", color: theme.textMuted, lineHeight: 1.8 }}>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Layout 6: Premium - Elegant with gold accents
function FAQPremium() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "120px 24px", background: theme.background }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", justifyContent: "center" }}>
            <div style={{ width: "40px", height: "2px", background: theme.secondary }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: theme.secondary, letterSpacing: "3px", textTransform: "uppercase" }}>FAQ</span>
            <div style={{ width: "40px", height: "2px", background: theme.secondary }} />
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 800, color: theme.text, textAlign: "center" }}>{content.faq.title}</h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {content.faq.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ borderBottom: `1px solid ${i === content.faq.items.length - 1 ? "transparent" : "rgba(255,255,255,0.08)"}` }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: openIndex === i ? theme.secondary : theme.textMuted, width: "30px" }}>0{i + 1}</span>
                  <span style={{ fontSize: "17px", fontWeight: 600, color: theme.text }}>{item.question}</span>
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: `1px solid ${openIndex === i ? theme.secondary : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                  {openIndex === i ? <Minus size={16} color={theme.secondary} /> : <Plus size={16} color={theme.textMuted} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 0 28px 50px", fontSize: "15px", color: theme.textMuted, lineHeight: 1.8, maxWidth: "600px" }}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Original Layout - Simple accordion
function FAQOriginal() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 24px", background: theme.background }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, color: theme.text, textAlign: "center", marginBottom: "16px" }}>{content.faq.title}</h2>
        <p style={{ fontSize: "16px", color: theme.textMuted, textAlign: "center", marginBottom: "48px" }}>{content.faq.subtitle}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {content.faq.items.map((item, i) => (
            <div key={i} style={{ background: theme.cardBg, borderRadius: "8px", overflow: "hidden", border: `1px solid ${theme.primary}22` }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: "16px", fontWeight: 500, color: theme.text }}>{item.question}</span>
                <ChevronDown size={20} color={theme.textMuted} style={{ transform: openIndex === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 24px 20px", fontSize: "15px", color: theme.textMuted, lineHeight: 1.7 }}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const { variation } = useTheme();

  switch (variation) {
    case 0: return <FAQOriginal />;
    case 1: return <FAQMinimal />;
    case 2: return <FAQSoft />;
    case 3: return <FAQBold />;
    case 4: return <FAQGradient />;
    case 5: return <FAQGlass />;
    case 6: return <FAQPremium />;
    default: return <FAQOriginal />;
  }
}
