import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { content } from "../data/content";
import { Mail, Phone, Send, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

const FormInput = ({ label, name, type = "text", placeholder, required, value, onChange, isDark, theme }: any) => (
  <div style={{ marginBottom: "16px" }}>
    {label && <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: 500, color: theme.text }}>{label}{required && <span style={{ color: "#ef4444" }}>*</span>}</label>}
    <input type={type} name={name} placeholder={placeholder} required={required} value={value} onChange={onChange}
      style={{ width: "100%", padding: "14px 16px", fontSize: "16px", borderRadius: "10px", border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e5e7eb", background: isDark ? "rgba(255,255,255,0.05)" : "#fff", color: theme.text, outline: "none", boxSizing: "border-box" }} />
  </div>
);

const FormTextArea = ({ label, name, placeholder, required, value, onChange, isDark, theme }: any) => (
  <div style={{ marginBottom: "16px" }}>
    {label && <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: 500, color: theme.text }}>{label}</label>}
    <textarea name={name} placeholder={placeholder} required={required} value={value} onChange={onChange}
      style={{ width: "100%", padding: "14px 16px", fontSize: "16px", borderRadius: "10px", border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e5e7eb", background: isDark ? "rgba(255,255,255,0.05)" : "#fff", color: theme.text, outline: "none", minHeight: "120px", resize: "vertical", boxSizing: "border-box" }} />
  </div>
);

// Layout 1: Minimal - Simple centered form
function ContactMinimal() {
  const { theme } = useTheme();

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#fafafa" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, color: theme.text, marginBottom: "12px" }}>Contactez-nous</h2>
        <p style={{ fontSize: "16px", color: theme.textMuted, marginBottom: "40px" }}>Nous répondons sous 24h</p>

        <form name="contact-minimal" data-netlify="true" data-netlify-honeypot="bot-field" style={{ background: "#fff", padding: "32px", borderRadius: "12px", textAlign: "left" }}>
          <p style={{ display: "none" }}>
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <FormInput label="Nom" name="name" placeholder="Votre nom" required isDark={false} theme={theme} />
          <FormInput label="Email" name="email" type="email" placeholder="votre@email.com" required isDark={false} theme={theme} />
          <FormInput label="Téléphone" name="phone" type="tel" placeholder="(514) 000-0000" isDark={false} theme={theme} />
          <FormTextArea label="Message" name="message" placeholder="Votre message..." isDark={false} theme={theme} />
          <button type="submit" style={{ width: "100%", padding: "16px", background: theme.primary, color: "#fff", border: "none", borderRadius: "10px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}>Envoyer</button>
        </form>
      </div>
    </section>
  );
}

// Layout 2: Soft - Side by side with info cards
function ContactSoft() {
  const { theme } = useTheme();

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #f5f3ff 0%, #ede9fe 100%)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", padding: "8px 16px", background: "#fff", borderRadius: "100px", fontSize: "14px", fontWeight: 600, color: theme.primary, marginBottom: "16px" }}>Contact</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, color: theme.text }}>{content.contact.title}</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { icon: <Mail size={24} />, title: "Email", value: "contact@yobopromo.com", desc: "Réponse sous 24h" },
              { icon: <Phone size={24} />, title: "Téléphone", value: "(514) 123-4567", desc: "Lun-Ven 9h-18h" },
              { icon: <MapPin size={24} />, title: "Adresse", value: "Montréal, QC", desc: "Sur rendez-vous" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: "#fff", borderRadius: "16px", padding: "24px", display: "flex", gap: "16px", boxShadow: "0 4px 20px rgba(99, 102, 241, 0.08)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: theme.secondary, display: "flex", alignItems: "center", justifyContent: "center", color: theme.primary }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 600, color: theme.text }}>{item.title}</h4>
                  <p style={{ fontSize: "15px", color: theme.primary, fontWeight: 500 }}>{item.value}</p>
                  <p style={{ fontSize: "13px", color: theme.textMuted }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: "#fff", borderRadius: "24px", padding: "40px", boxShadow: "0 10px 40px rgba(99, 102, 241, 0.1)" }}>
            <form name="contact-soft" data-netlify="true" data-netlify-honeypot="bot-field">
              <p style={{ display: "none" }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <FormInput name="name" placeholder="Votre nom" required isDark={false} theme={theme} />
                <FormInput name="email" type="email" placeholder="Votre email" required isDark={false} theme={theme} />
              </div>
              <FormInput name="phone" type="tel" placeholder="Téléphone (optionnel)" isDark={false} theme={theme} />
              <FormTextArea name="message" placeholder="Comment pouvons-nous vous aider?" isDark={false} theme={theme} />
              <button type="submit" style={{ width: "100%", padding: "16px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, color: "#fff", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <Send size={18} /> Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layout 3: Bold - Full width with dark section
function ContactBold() {
  const { theme } = useTheme();

  return (
    <section id="contact">
      <div style={{ background: theme.backgroundAlt, padding: "80px 24px", color: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>Prêt à démarrer?</h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", lineHeight: 1.7 }}>
              Réservez une consultation gratuite et découvrez comment nous pouvons transformer votre marketing digital.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {[{ icon: <Clock size={20} />, text: "Réponse rapide" }, { icon: <MessageCircle size={20} />, text: "Support 24/7" }].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.8)" }}>
                  {item.icon}
                  <span style={{ fontSize: "14px" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "#fff", borderRadius: "24px", padding: "40px" }}>
            <form name="contact-bold" data-netlify="true" data-netlify-honeypot="bot-field">
              <p style={{ display: "none" }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <FormInput name="name" placeholder="Nom complet" required isDark={false} theme={theme} />
              <FormInput name="email" type="email" placeholder="Email professionnel" required isDark={false} theme={theme} />
              <FormInput name="phone" type="tel" placeholder="Numéro de téléphone" isDark={false} theme={theme} />
              <button type="submit" style={{ width: "100%", padding: "18px", background: theme.backgroundAlt, color: "#fff", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
                Réserver ma consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layout 4: Gradient - Floating card with orbs
function ContactGradient() {
  const { theme } = useTheme();

  return (
    <section id="contact" style={{ padding: "120px 24px", background: theme.background, position: "relative", overflow: "hidden" }}>
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }}
        style={{ position: "absolute", top: "10%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.gradientEnd}33 0%, transparent 70%)`, filter: "blur(60px)" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: theme.text, marginBottom: "16px" }}>Parlons de votre projet</h2>
          <p style={{ fontSize: "18px", color: theme.textMuted }}>Nous sommes à votre écoute</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: `linear-gradient(135deg, ${theme.gradientStart}22, ${theme.gradientEnd}11)`, backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "32px", padding: "48px", maxWidth: "600px", margin: "0 auto" }}>
          <form name="contact-gradient" data-netlify="true" data-netlify-honeypot="bot-field">
            <p style={{ display: "none" }}>
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <FormInput name="name" placeholder="Votre nom" required isDark={true} theme={theme} />
            <FormInput name="email" type="email" placeholder="Votre email" required isDark={true} theme={theme} />
            <FormInput name="phone" type="tel" placeholder="Téléphone" isDark={true} theme={theme} />
            <FormTextArea name="message" placeholder="Décrivez votre projet..." isDark={true} theme={theme} />
            <button type="submit" style={{ width: "100%", padding: "18px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, color: "#fff", border: "none", borderRadius: "14px", fontSize: "16px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              Envoyer <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "48px" }}>
          {[{ icon: <Mail size={20} />, text: "contact@yobopromo.com" }, { icon: <Phone size={20} />, text: "(514) 123-4567" }].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", color: theme.textMuted }}>
              {item.icon}
              <span style={{ fontSize: "15px" }}>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 5: Glass - Multi-step feel with glass panels
function ContactGlass() {
  const { theme } = useTheme();

  return (
    <section id="contact" style={{ padding: "120px 24px", background: theme.background, position: "relative", overflow: "hidden" }}>
      {[{ top: "20%", left: "5%" }, { bottom: "10%", right: "10%" }].map((pos, i) => (
        <motion.div key={i} animate={{ y: [0, -30, 0] }} transition={{ duration: 6 + i * 2, repeat: Infinity }}
          style={{ position: "absolute", ...pos, width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${i === 0 ? theme.gradientStart : theme.accent}33 0%, transparent 70%)`, filter: "blur(60px)" }} />
      ))}

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, color: theme.text, marginBottom: "20px" }}>
              Commençons<br />ensemble
            </h2>
            <p style={{ fontSize: "17px", color: theme.textMuted, marginBottom: "40px", lineHeight: 1.7 }}>
              Partagez vos objectifs et nous créerons une stratégie sur mesure pour votre succès.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[{ value: "500+", label: "Clients" }, { value: "24h", label: "Réponse" }, { value: "100%", label: "Satisfaction" }, { value: "0$", label: "Consultation" }].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "20px", textAlign: "center" }}>
                  <p style={{ fontSize: "28px", fontWeight: 800, color: theme.text }}>{stat.value}</p>
                  <p style={{ fontSize: "13px", color: theme.textMuted }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "28px", padding: "40px" }}>
            <form name="contact-glass" data-netlify="true" data-netlify-honeypot="bot-field">
              <p style={{ display: "none" }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <FormInput name="name" placeholder="Nom complet" required isDark={true} theme={theme} />
              <FormInput name="email" type="email" placeholder="Email" required isDark={true} theme={theme} />
              <FormInput name="phone" type="tel" placeholder="Téléphone" isDark={true} theme={theme} />
              <FormTextArea name="message" placeholder="Parlez-nous de votre projet..." isDark={true} theme={theme} />
              <button type="submit" style={{ width: "100%", padding: "18px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, color: "#fff", border: "none", borderRadius: "14px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layout 6: Premium - Sophisticated split layout
function ContactPremium() {
  const { theme } = useTheme();

  return (
    <section id="contact" style={{ padding: "120px 24px", background: theme.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "40px", height: "2px", background: theme.secondary }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: theme.secondary, letterSpacing: "3px", textTransform: "uppercase" }}>Contact</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, color: theme.text, marginBottom: "20px", lineHeight: 1.2 }}>
              Discutons de votre <span style={{ color: theme.secondary }}>vision</span>
            </h2>
            <p style={{ fontSize: "16px", color: theme.textMuted, marginBottom: "48px", lineHeight: 1.7 }}>
              Chaque projet est unique. Prenons le temps de comprendre vos besoins pour créer une stratégie personnalisée.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: <Mail size={20} />, title: "Email", value: "contact@yobopromo.com" },
                { icon: <Phone size={20} />, title: "Téléphone", value: "(514) 123-4567" },
                { icon: <Clock size={20} />, title: "Horaires", value: "Lun-Ven, 9h-18h" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${theme.secondary}22`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.secondary }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: "13px", color: theme.textMuted }}>{item.title}</p>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: theme.text }}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: theme.cardBg, border: `1px solid ${theme.secondary}22`, borderRadius: "24px", padding: "48px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "48px", right: "48px", height: "3px", background: `linear-gradient(90deg, ${theme.secondary}, ${theme.primaryLight})`, borderRadius: "0 0 4px 4px" }} />

            <form name="contact-premium" data-netlify="true" data-netlify-honeypot="bot-field">
              <p style={{ display: "none" }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <FormInput label="Nom" name="name" placeholder="Votre nom" required isDark={true} theme={theme} />
                <FormInput label="Email" name="email" type="email" placeholder="votre@email.com" required isDark={true} theme={theme} />
              </div>
              <FormInput label="Téléphone" name="phone" type="tel" placeholder="(514) 000-0000" isDark={true} theme={theme} />
              <FormTextArea label="Message" name="message" placeholder="Décrivez votre projet et vos objectifs..." isDark={true} theme={theme} />
              <button type="submit" style={{ width: "100%", padding: "18px", background: `linear-gradient(90deg, ${theme.secondary}, ${theme.primaryLight})`, color: theme.background, border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Original Layout - Simple centered
function ContactOriginal() {
  const { theme } = useTheme();

  return (
    <section id="contact" style={{ padding: "100px 24px", background: theme.background }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, color: theme.text, marginBottom: "12px" }}>Contactez-nous</h2>
        <p style={{ fontSize: "16px", color: theme.textMuted, marginBottom: "40px" }}>Nous répondons sous 24h</p>

        <form name="contact-original" data-netlify="true" data-netlify-honeypot="bot-field" style={{ background: theme.cardBg, padding: "32px", borderRadius: "12px", textAlign: "left" }}>
          <p style={{ display: "none" }}>
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <FormInput label="Nom" name="name" placeholder="Votre nom" required isDark={false} theme={theme} />
          <FormInput label="Email" name="email" type="email" placeholder="votre@email.com" required isDark={false} theme={theme} />
          <FormInput label="Téléphone" name="phone" type="tel" placeholder="(514) 000-0000" isDark={false} theme={theme} />
          <FormTextArea label="Message" name="message" placeholder="Votre message..." isDark={false} theme={theme} />
          <button type="submit" style={{ width: "100%", padding: "16px", background: theme.primary, color: "#fff", border: "none", borderRadius: "10px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}>Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export function ContactForm() {
  const { variation } = useTheme();

  switch (variation) {
    case 0: return <ContactOriginal />;
    case 1: return <ContactMinimal />;
    case 2: return <ContactSoft />;
    case 3: return <ContactBold />;
    case 4: return <ContactGradient />;
    case 5: return <ContactGlass />;
    case 6: return <ContactPremium />;
    default: return <ContactOriginal />;
  }
}
