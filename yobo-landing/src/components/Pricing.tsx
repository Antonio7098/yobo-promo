import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { content } from "../data/content";
import { Check, ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import type { Plan } from "../data/content";

// Shared mini card component
const MiniPricingCard = ({ plan, theme, isDark, onClick }: { plan: Plan; theme: any; isDark: boolean; onClick?: () => void }) => (
  <motion.div whileHover={{ y: -5 }} onClick={onClick}
    style={{ background: isDark ? "rgba(255,255,255,0.05)" : "#fff", borderRadius: "16px", padding: "24px", border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb", cursor: onClick ? "pointer" : "default" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
      <div>
        <span style={{ fontSize: "12px", color: theme.textMuted }}>{plan.code}</span>
        <h3 style={{ fontSize: "18px", fontWeight: 700, color: theme.text }}>{plan.title}</h3>
      </div>
      <span style={{ fontSize: "24px", fontWeight: 800, color: "#22c55e" }}>{plan.price}</span>
    </div>
    <p style={{ fontSize: "13px", color: theme.textMuted, marginBottom: "16px" }}>{plan.subtitle}</p>
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {plan.features.slice(0, 3).map((f, i) => (
        <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: theme.text, marginBottom: "8px" }}>
          <Check size={14} color={theme.primary} /> {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

// Layout 1: Minimal - Simple list layout
function PricingMinimal() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, color: theme.text, marginBottom: "16px", textAlign: "center" }}>Nos forfaits</h2>
        <p style={{ fontSize: "16px", color: theme.textMuted, textAlign: "center", marginBottom: "60px" }}>Des solutions simples, sans engagement mensuel.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {content.pricing.plans.slice(0, 5).map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px", background: "#fafafa", borderRadius: "12px", border: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: theme.primary, width: "40px" }}>{plan.code}</span>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: theme.text }}>{plan.title}</h3>
                  <p style={{ fontSize: "14px", color: theme.textMuted }}>{plan.subtitle}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <span style={{ fontSize: "22px", fontWeight: 700, color: "#22c55e" }}>{plan.price}</span>
                <button onClick={scrollToContact} style={{ padding: "10px 20px", background: theme.primary, color: "#fff", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Choisir</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 2: Soft - Bento grid layout
function PricingSoft() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const plans = content.pricing.plans;

  return (
    <section id="pricing" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #ede9fe 0%, #f5f3ff 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", padding: "8px 16px", background: "#fff", borderRadius: "100px", fontSize: "14px", fontWeight: 600, color: theme.primary, marginBottom: "16px" }}>Tarification</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: theme.text }}>{content.pricing.sectionTitle}</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px" }}>
          {/* Featured large card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ gridColumn: "span 8", background: "#fff", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 40px rgba(99, 102, 241, 0.1)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, padding: "12px 24px", background: theme.primary, borderRadius: "0 24px 0 24px" }}>
              <Star size={16} fill="#fff" color="#fff" style={{ marginRight: "6px" }} />
              <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>Populaire</span>
            </div>
            <span style={{ fontSize: "14px", color: theme.textMuted }}>{plans[0].code}</span>
            <h3 style={{ fontSize: "32px", fontWeight: 800, color: theme.text, marginBottom: "8px" }}>{plans[0].title}</h3>
            <p style={{ fontSize: "15px", color: theme.textMuted, marginBottom: "24px" }}>{plans[0].subtitle}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "24px" }}>
              <span style={{ fontSize: "48px", fontWeight: 800, color: "#22c55e" }}>{plans[0].price}</span>
              <span style={{ color: "#22c55e", fontWeight: 500 }}>{plans[0].priceNote}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
              {plans[0].features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Check size={18} color={theme.primary} />
                  <span style={{ fontSize: "14px", color: theme.text }}>{f}</span>
                </div>
              ))}
            </div>
            <button onClick={scrollToContact} style={{ padding: "16px 32px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, color: "#fff", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: 600, cursor: "pointer", width: "100%" }}>
              Commencer maintenant
            </button>
          </motion.div>

          {/* Side cards */}
          <div style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", gap: "20px" }}>
            {plans.slice(1, 3).map((plan, i) => (
              <motion.div key={plan.id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ flex: 1, background: "#fff", borderRadius: "20px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div>
                    <span style={{ fontSize: "12px", color: theme.textMuted }}>{plan.code}</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, color: theme.text }}>{plan.title}</h4>
                  </div>
                  <span style={{ fontSize: "24px", fontWeight: 800, color: "#22c55e" }}>{plan.price}</span>
                </div>
                <p style={{ fontSize: "13px", color: theme.textMuted, marginBottom: "16px" }}>{plan.subtitle}</p>
                <button onClick={scrollToContact} style={{ padding: "12px", background: theme.secondary, color: theme.primary, border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer", width: "100%" }}>En savoir plus</button>
              </motion.div>
            ))}
          </div>

          {/* Bottom row */}
          {plans.slice(3, 6).map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ gridColumn: "span 4", background: "#fff", borderRadius: "20px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <MiniPricingCard plan={plan} theme={theme} isDark={false} onClick={scrollToContact} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 3: Bold - Horizontal scroll with large cards
function PricingBold() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "48px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: theme.text, marginBottom: "12px" }}>Nos offres</h2>
            <p style={{ fontSize: "17px", color: theme.textMuted, maxWidth: "400px" }}>Des forfaits adaptés à tous les budgets, sans mensualité.</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ width: "48px", height: "48px", borderRadius: "50%", border: `2px solid ${theme.primary}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronLeft size={24} color={theme.primary} />
            </button>
            <button style={{ width: "48px", height: "48px", borderRadius: "50%", border: "none", background: theme.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronRight size={24} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      <div style={{ overflowX: "auto", paddingBottom: "20px", scrollbarWidth: "none" }}>
        <div style={{ display: "flex", gap: "24px", padding: "0 24px", width: "max-content" }}>
          {content.pricing.plans.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              style={{ width: "340px", background: i === 0 ? theme.backgroundAlt : "#fff", borderRadius: "24px", padding: "32px", border: i === 0 ? "none" : "1px solid #e5e7eb", flexShrink: 0 }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: i === 0 ? "rgba(255,255,255,0.6)" : theme.textMuted }}>{plan.code}</span>
              <h3 style={{ fontSize: "26px", fontWeight: 800, color: i === 0 ? "#fff" : theme.text, marginBottom: "8px" }}>{plan.title}</h3>
              <p style={{ fontSize: "14px", color: i === 0 ? "rgba(255,255,255,0.7)" : theme.textMuted, marginBottom: "24px" }}>{plan.subtitle}</p>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "40px", fontWeight: 800, color: i === 0 ? theme.secondary : "#22c55e" }}>{plan.price}</span>
                <span style={{ fontSize: "14px", color: i === 0 ? "rgba(255,255,255,0.6)" : theme.textMuted, marginLeft: "8px" }}>{plan.priceNote}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", fontSize: "14px", color: i === 0 ? "#fff" : theme.text }}>
                    <Check size={18} color={i === 0 ? theme.secondary : theme.primary} style={{ marginTop: "2px", flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact}
                style={{ width: "100%", padding: "16px", background: i === 0 ? theme.secondary : theme.primary, color: i === 0 ? theme.backgroundAlt : "#fff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 4: Gradient - Stacked cards with glow effects
function PricingGradient() {
  const { theme } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState(0);
  const plans = content.pricing.plans;
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" style={{ padding: "120px 24px", background: theme.background, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "400px", height: "400px", background: `radial-gradient(circle, ${theme.gradientEnd}33 0%, transparent 70%)`, filter: "blur(60px)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: theme.text, marginBottom: "16px" }}>{content.pricing.sectionTitle}</h2>
          <p style={{ fontSize: "18px", color: theme.textMuted }}>Investissez dans votre croissance</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "40px", alignItems: "start" }}>
          {/* Plan selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {plans.slice(0, 5).map((plan, i) => (
              <motion.button key={plan.id} onClick={() => setSelectedPlan(i)} whileHover={{ x: 5 }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: selectedPlan === i ? `linear-gradient(90deg, ${theme.gradientStart}44, ${theme.gradientEnd}22)` : "rgba(255,255,255,0.05)", border: selectedPlan === i ? `1px solid ${theme.primary}` : "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", cursor: "pointer", textAlign: "left" }}>
                <div>
                  <span style={{ fontSize: "12px", color: theme.textMuted }}>{plan.code}</span>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: theme.text }}>{plan.title}</p>
                </div>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "#22c55e" }}>{plan.price}</span>
              </motion.button>
            ))}
          </div>

          {/* Selected plan details */}
          <AnimatePresence mode="wait">
            <motion.div key={selectedPlan} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              style={{ background: `linear-gradient(135deg, ${theme.gradientStart}33, ${theme.gradientEnd}22)`, backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "32px", padding: "48px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-50%", right: "-20%", width: "300px", height: "300px", background: `radial-gradient(circle, ${theme.gradientEnd}44 0%, transparent 70%)`, filter: "blur(40px)" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "32px" }}>
                  <div>
                    <span style={{ fontSize: "14px", color: theme.textMuted }}>{plans[selectedPlan].code}</span>
                    <h3 style={{ fontSize: "36px", fontWeight: 800, color: theme.text }}>{plans[selectedPlan].title}</h3>
                    <p style={{ fontSize: "16px", color: theme.textMuted }}>{plans[selectedPlan].subtitle}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "48px", fontWeight: 900, background: `linear-gradient(90deg, #22c55e, ${theme.gradientEnd})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{plans[selectedPlan].price}</span>
                    <p style={{ fontSize: "14px", color: "#22c55e" }}>{plans[selectedPlan].priceNote}</p>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
                  {plans[selectedPlan].features.map((f, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                      style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", background: "rgba(255,255,255,0.05)", borderRadius: "10px" }}>
                      <Check size={18} color={theme.primaryLight} />
                      <span style={{ fontSize: "14px", color: theme.text }}>{f}</span>
                    </motion.div>
                  ))}
                </div>

                <button onClick={scrollToContact}
                  style={{ padding: "18px 40px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, color: "#fff", border: "none", borderRadius: "14px", fontSize: "16px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                  Commencer maintenant <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Layout 5: Glass - Overlapping floating cards
function PricingGlass() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const plans = content.pricing.plans;

  return (
    <section id="pricing" style={{ padding: "120px 24px", background: theme.background, position: "relative", overflow: "hidden" }}>
      {[{ size: 500, top: "0%", right: "5%" }, { size: 400, bottom: "10%", left: "0%" }].map((orb, i) => (
        <motion.div key={i} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}
          style={{ position: "absolute", ...orb, width: orb.size, height: orb.size, borderRadius: "50%", background: `radial-gradient(circle, ${i === 0 ? theme.gradientStart : theme.gradientEnd}33 0%, transparent 70%)`, filter: "blur(80px)" }} />
      ))}

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 900, color: theme.text, marginBottom: "16px" }}>Tarifs transparents</h2>
          <p style={{ fontSize: "18px", color: theme.textMuted, maxWidth: "500px", margin: "0 auto" }}>Choisissez le forfait qui correspond à vos ambitions</p>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center", gap: "-20px", perspective: "1000px" }}>
          {plans.slice(0, 3).map((plan, i) => (
            <motion.div key={plan.id}
              initial={{ opacity: 0, y: 50, rotateY: i === 0 ? 15 : i === 2 ? -15 : 0 }}
              whileInView={{ opacity: 1, y: i === 1 ? -20 : 0, rotateY: 0 }}
              whileHover={{ y: i === 1 ? -30 : -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                width: "340px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: i === 1 ? `2px solid ${theme.primaryLight}` : "1px solid rgba(255,255,255,0.15)",
                borderRadius: "28px",
                padding: i === 1 ? "40px 32px" : "32px 28px",
                marginLeft: i > 0 ? "-20px" : 0,
                zIndex: i === 1 ? 10 : 1,
                boxShadow: i === 1 ? `0 30px 60px ${theme.primary}33` : "0 10px 40px rgba(0,0,0,0.2)"
              }}>
              {i === 1 && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", padding: "6px 20px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, borderRadius: "100px", fontSize: "12px", fontWeight: 700, color: "#fff" }}>
                  RECOMMANDÉ
                </div>
              )}
              <span style={{ fontSize: "13px", color: theme.textMuted }}>{plan.code}</span>
              <h3 style={{ fontSize: i === 1 ? "28px" : "24px", fontWeight: 800, color: theme.text, marginBottom: "8px" }}>{plan.title}</h3>
              <p style={{ fontSize: "14px", color: theme.textMuted, marginBottom: "20px" }}>{plan.subtitle}</p>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: i === 1 ? "44px" : "36px", fontWeight: 900, color: "#22c55e" }}>{plan.price}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                {plan.features.slice(0, 4).map((f, fi) => (
                  <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px", fontSize: "13px", color: theme.text }}>
                    <Check size={16} color={theme.primaryLight} style={{ marginTop: "2px", flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact}
                style={{ width: "100%", padding: i === 1 ? "16px" : "14px", background: i === 1 ? `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})` : "rgba(255,255,255,0.1)", color: "#fff", border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "60px" }}>
          {plans.slice(3, 7).map((plan) => (
            <div key={plan.id} onClick={scrollToContact}
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "20px", cursor: "pointer", transition: "all 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "12px", color: theme.textMuted }}>{plan.code}</span>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "#22c55e" }}>{plan.price}</span>
              </div>
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: theme.text }}>{plan.title}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Layout 6: Premium - Luxury comparison table
function PricingPremium() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const plans = content.pricing.plans.slice(0, 4);

  return (
    <section id="pricing" style={{ padding: "120px 24px", background: theme.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "60px", height: "2px", background: theme.secondary }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: theme.secondary, letterSpacing: "3px", textTransform: "uppercase" }}>Investissement</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: theme.text, maxWidth: "600px" }}>
            Des forfaits <span style={{ color: theme.secondary }}>premium</span> pour des résultats exceptionnels
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {plans.map((plan, i) => (
            <motion.div key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ background: theme.cardBg, border: `1px solid ${i === 0 ? theme.secondary + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "20px", padding: "32px", position: "relative", overflow: "hidden" }}>
              {i === 0 && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${theme.secondary}, ${theme.primaryLight})` }} />
              )}
              <span style={{ fontSize: "12px", fontWeight: 600, color: theme.textMuted, letterSpacing: "1px" }}>{plan.code}</span>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: theme.text, marginTop: "8px", marginBottom: "4px" }}>{plan.title}</h3>
              <p style={{ fontSize: "13px", color: theme.textMuted, marginBottom: "24px" }}>{plan.subtitle}</p>

              <div style={{ padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "24px" }}>
                <span style={{ fontSize: "36px", fontWeight: 900, color: i === 0 ? theme.secondary : theme.text }}>{plan.price}</span>
                <p style={{ fontSize: "13px", color: "#22c55e", fontWeight: 500 }}>{plan.priceNote}</p>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", fontSize: "13px", color: theme.text }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: i === 0 ? `${theme.secondary}22` : "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={12} color={i === 0 ? theme.secondary : theme.primaryLight} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button onClick={scrollToContact}
                style={{ width: "100%", padding: "14px", background: i === 0 ? `linear-gradient(90deg, ${theme.secondary}, ${theme.primaryLight})` : "transparent", color: i === 0 ? theme.background : theme.text, border: i === 0 ? "none" : `1px solid rgba(255,255,255,0.15)`, borderRadius: "10px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "48px", flexWrap: "wrap" }}>
          {content.pricing.plans.slice(4).map((plan) => (
            <button key={plan.id} onClick={scrollToContact}
              style={{ padding: "12px 24px", background: "transparent", border: `1px solid rgba(255,255,255,0.1)`, borderRadius: "100px", color: theme.textMuted, fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              {plan.title} <span style={{ color: "#22c55e", fontWeight: 600 }}>{plan.price}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Original Layout - Simple grid
function PricingOriginal() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" style={{ padding: "100px 24px", background: theme.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, color: theme.text, textAlign: "center", marginBottom: "16px" }}>{content.pricing.sectionTitle}</h2>
        <p style={{ fontSize: "16px", color: theme.textMuted, textAlign: "center", marginBottom: "60px" }}>Des solutions simples et transparentes.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {content.pricing.plans.map((plan) => (
            <div key={plan.id} style={{ background: theme.cardBg, border: `1px solid ${theme.primary}22`, borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: theme.textMuted, marginBottom: "8px" }}>{plan.code}</span>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: theme.text, marginBottom: "4px" }}>{plan.title}</h3>
              <p style={{ fontSize: "14px", color: theme.textMuted, marginBottom: "24px" }}>{plan.subtitle}</p>
              <div style={{ marginBottom: "24px", display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "36px", fontWeight: 800, color: "#22c55e" }}>{plan.price}</span>
                <span style={{ fontSize: "13px", color: "#22c55e" }}>{plan.priceNote}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                {plan.features.slice(0, 4).map((f, fi) => (
                  <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "10px", fontSize: "13px", color: theme.text }}>
                    <span style={{ color: theme.primary }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} style={{ width: "100%", padding: "12px", background: theme.primary, color: "#fff", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const { variation } = useTheme();

  switch (variation) {
    case 0: return <PricingOriginal />;
    case 1: return <PricingMinimal />;
    case 2: return <PricingSoft />;
    case 3: return <PricingBold />;
    case 4: return <PricingGradient />;
    case 5: return <PricingGlass />;
    case 6: return <PricingPremium />;
    default: return <PricingOriginal />;
  }
}
