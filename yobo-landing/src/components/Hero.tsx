import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./Button";
import { content } from "../data/content";
import { Send, Instagram, Youtube, Facebook, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

const PlatformIcon = ({ platform }: { platform: string }) => {
  const iconProps = { size: 28, strokeWidth: 1.5 };
  switch (platform.toLowerCase()) {
    case "telegram": return <Send {...iconProps} color="#0088cc" />;
    case "google": return (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    );
    case "instagram": return <Instagram {...iconProps} color="#E4405F" />;
    case "youtube": return <Youtube {...iconProps} color="#FF0000" />;
    case "facebook": return <Facebook {...iconProps} color="#1877F2" />;
    case "meta": return (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path fill="#0082FB" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    );
    default: return null;
  }
};

// Layout 1: Minimal - Centered, simple, lots of whitespace
function HeroMinimal() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", background: "#fff", padding: "60px 24px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "14px", fontWeight: 600, color: theme.primary, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
          Marketing Digital
        </p>
        <h1 style={{ fontSize: "clamp(40px, 8vw, 64px)", fontWeight: 700, color: theme.text, lineHeight: 1.1, marginBottom: "24px" }}>
          {content.hero.headline}
        </h1>
        <p style={{ fontSize: "18px", color: theme.textMuted, marginBottom: "40px", lineHeight: 1.7 }}>
          Atteignez votre audience cible avec des campagnes publicitaires optimisées sur toutes les plateformes.
        </p>
        <Button onClick={scrollToContact} variant="primary" size="lg">{content.hero.cta}</Button>
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "60px", opacity: 0.6 }}>
          {content.platforms.slice(0, 4).map((p) => <PlatformIcon key={p} platform={p} />)}
        </div>
      </div>
    </section>
  );
}

// Layout 2: Soft - Asymmetric with floating cards
function HeroSoft() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "90vh", background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(99, 102, 241, 0.1)", filter: "blur(60px)" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", background: "#fff", borderRadius: "100px", marginBottom: "24px", boxShadow: "0 2px 10px rgba(99, 102, 241, 0.15)" }}>
            <Sparkles size={16} color={theme.primary} />
            <span style={{ fontSize: "14px", fontWeight: 600, color: theme.primary }}>{content.brand.tagline}</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: theme.text, lineHeight: 1.15, marginBottom: "20px" }}>{content.hero.headline}</h1>
          <p style={{ fontSize: "17px", color: theme.textMuted, marginBottom: "32px", lineHeight: 1.7 }}>
            Nous créons des campagnes publicitaires qui convertissent. Profitez de notre expertise sur Meta, Google et plus encore.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button onClick={scrollToContact} variant="primary" size="lg">{content.hero.cta}</Button>
            <Button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} variant="outline" size="lg">Voir les tarifs</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ position: "relative" }}>
          {[{ top: "0", left: "20px", delay: 0 }, { top: "60px", right: "0", delay: 0.1 }, { bottom: "40px", left: "40px", delay: 0.2 }].map((pos, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: pos.delay + 0.3 }}
              style={{ position: i === 0 ? "relative" : "absolute", ...pos, background: "#fff", borderRadius: "20px", padding: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", width: i === 0 ? "100%" : "200px" }}>
              {i === 0 ? (
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  {content.platforms.map((p) => <div key={p} style={{ opacity: 0.8 }}><PlatformIcon platform={p} /></div>)}
                </div>
              ) : i === 1 ? (
                <div><p style={{ fontSize: "32px", fontWeight: 800, color: theme.primary }}>500+</p><p style={{ fontSize: "14px", color: theme.textMuted }}>Clients satisfaits</p></div>
              ) : (
                <div><p style={{ fontSize: "32px", fontWeight: 800, color: "#22c55e" }}>24/7</p><p style={{ fontSize: "14px", color: theme.textMuted }}>Support disponible</p></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Layout 3: Bold - Full-width dark hero with diagonal cut
function HeroBold() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ background: theme.backgroundAlt, padding: "100px 24px 180px", clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ maxWidth: "700px" }}>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: "24px" }}>
              Démarrez des<br /><span style={{ color: theme.secondary }}>campagnes</span><br />performantes.
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", maxWidth: "500px" }}>
              Augmentez votre visibilité en ligne avec nos stratégies de marketing digital éprouvées.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Button onClick={scrollToContact} variant="primary" size="lg" style={{ background: theme.secondary, color: theme.backgroundAlt }}>{content.hero.cta}</Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div style={{ background: "#fff", padding: "0 24px 60px", marginTop: "-100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", background: "#fff", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
            {[{ icon: <Zap size={32} />, label: "Rapide", desc: "Résultats en quelques jours" }, { icon: <TrendingUp size={32} />, label: "Efficace", desc: "ROI optimisé" }, { icon: <Sparkles size={32} />, label: "Créatif", desc: "Contenu qui convertit" }].map((item, i) => (
              <div key={i} style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ color: theme.primary, marginBottom: "12px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: theme.text, marginBottom: "8px" }}>{item.label}</h3>
                <p style={{ fontSize: "14px", color: theme.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layout 4: Gradient - Immersive full-screen with animated background
function HeroGradient() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "100vh", background: theme.background, position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", top: "-50%", left: "-25%", width: "150%", height: "150%", background: `conic-gradient(from 0deg, ${theme.gradientStart}22, ${theme.gradientEnd}22, transparent, ${theme.gradientStart}22)`, opacity: 0.5 }} />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 50%, ${theme.gradientEnd}33 0%, transparent 50%)` }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
              style={{ display: "inline-block", padding: "12px 24px", background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.gradientEnd})`, borderRadius: "100px", marginBottom: "32px" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Agence Marketing #1 au Québec</span>
            </motion.div>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 900, color: theme.text, lineHeight: 1.05, marginBottom: "24px" }}>
              {content.hero.headline}
            </h1>
            <p style={{ fontSize: "18px", color: theme.textMuted, marginBottom: "40px", lineHeight: 1.7 }}>
              Transformez votre présence digitale avec des campagnes publicitaires qui génèrent des résultats mesurables.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} style={{ display: "inline-block" }}>
              <Button onClick={scrollToContact} variant="primary" size="lg" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {content.hero.cta} <ArrowRight size={20} />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[{ value: "500+", label: "Clients" }, { value: "10M+", label: "Impressions" }, { value: "98%", label: "Satisfaction" }, { value: "24/7", label: "Support" }].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "24px", textAlign: "center" }}>
                <p style={{ fontSize: "36px", fontWeight: 800, background: `linear-gradient(90deg, ${theme.primaryLight}, ${theme.gradientEnd})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</p>
                <p style={{ fontSize: "14px", color: theme.textMuted }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layout 5: Glass - Floating panels with depth
function HeroGlass() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "100vh", background: theme.background, position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {[{ size: 400, top: "10%", left: "5%", color: theme.gradientStart }, { size: 300, bottom: "10%", right: "10%", color: theme.gradientEnd }, { size: 200, top: "40%", right: "30%", color: theme.accent }].map((orb, i) => (
        <motion.div key={i} animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", ...orb, width: orb.size, height: orb.size, borderRadius: "50%", background: `radial-gradient(circle, ${orb.color}44 0%, transparent 70%)`, filter: "blur(40px)" }} />
      ))}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
            {content.platforms.map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                style={{ width: "56px", height: "56px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PlatformIcon platform={p} />
              </motion.div>
            ))}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontSize: "clamp(44px, 8vw, 80px)", fontWeight: 900, color: theme.text, lineHeight: 1.05, marginBottom: "24px", maxWidth: "900px" }}>
            {content.hero.headline}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ fontSize: "18px", color: theme.textMuted, marginBottom: "48px", maxWidth: "600px", lineHeight: 1.7 }}>
            Propulsez votre entreprise vers de nouveaux sommets avec notre expertise en marketing digital.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ display: "flex", gap: "16px" }}>
            <Button onClick={scrollToContact} variant="primary" size="lg" style={{ backdropFilter: "blur(20px)" }}>{content.hero.cta}</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ display: "flex", gap: "48px", marginTop: "80px", padding: "32px 48px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px" }}>
            {[{ value: "0$", label: "Frais cachés" }, { value: "100%", label: "Transparent" }, { value: "∞", label: "Possibilités" }].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "32px", fontWeight: 800, color: theme.text }}>{stat.value}</p>
                <p style={{ fontSize: "13px", color: theme.textMuted }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Layout 6: Premium - Sophisticated with video placeholder and luxury feel
function HeroPremium() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "100vh", background: theme.background, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${theme.secondary}, transparent)` }} />
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center", minHeight: "100vh" }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <div style={{ width: "40px", height: "2px", background: theme.secondary }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: theme.secondary, letterSpacing: "3px", textTransform: "uppercase" }}>Excellence Marketing</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, color: theme.text, lineHeight: 1.1, marginBottom: "28px" }}>
            Démarrez des campagnes <span style={{ background: `linear-gradient(90deg, ${theme.secondary}, ${theme.primaryLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>performantes.</span>
          </h1>
          <p style={{ fontSize: "17px", color: theme.textMuted, marginBottom: "40px", lineHeight: 1.8 }}>
            Nous combinons créativité et données pour créer des campagnes publicitaires qui dépassent vos attentes. Chaque stratégie est personnalisée pour votre succès.
          </p>
          <div style={{ display: "flex", gap: "16px", marginBottom: "48px" }}>
            <Button onClick={scrollToContact} variant="primary" size="lg" style={{ background: `linear-gradient(90deg, ${theme.gradientStart}, ${theme.secondary})` }}>{content.hero.cta}</Button>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            {[{ value: "500+", label: "Projets réussis" }, { value: "98%", label: "Satisfaction client" }].map((stat, i) => (
              <div key={i}>
                <p style={{ fontSize: "28px", fontWeight: 800, color: theme.secondary }}>{stat.value}</p>
                <p style={{ fontSize: "13px", color: theme.textMuted }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "16/10", background: `linear-gradient(135deg, ${theme.backgroundAlt}, ${theme.cardBg})`, border: `1px solid ${theme.secondary}22` }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ width: "80px", height: "80px", borderRadius: "50%", background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.secondary})`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 0 40px ${theme.secondary}44` }}>
                <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #fff", marginLeft: "4px" }} />
              </motion.div>
              <p style={{ marginTop: "20px", fontSize: "14px", color: theme.textMuted }}>Voir notre showreel</p>
            </div>
            <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", display: "flex", gap: "16px" }}>
              {content.platforms.slice(0, 4).map((p, i) => (
                <motion.div key={p} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <PlatformIcon platform={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Original Layout - Simple centered hero
function HeroOriginal() {
  const { theme } = useTheme();
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", background: theme.background, padding: "60px 24px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "14px", fontWeight: 600, color: theme.primary, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
          Marketing Digital
        </p>
        <h1 style={{ fontSize: "clamp(40px, 8vw, 64px)", fontWeight: 700, color: theme.text, lineHeight: 1.1, marginBottom: "24px" }}>
          {content.hero.headline}
        </h1>
        <p style={{ fontSize: "18px", color: theme.textMuted, marginBottom: "40px", lineHeight: 1.7 }}>
          Atteignez votre audience cible avec des campagnes publicitaires optimisées sur toutes les plateformes.
        </p>
        <button onClick={scrollToContact} style={{ padding: "14px 32px", background: theme.primary, color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}>
          {content.hero.cta}
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "60px", opacity: 0.6 }}>
          {content.platforms.slice(0, 4).map((p) => <PlatformIcon key={p} platform={p} />)}
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  const { variation } = useTheme();

  switch (variation) {
    case 0: return <HeroOriginal />;
    case 1: return <HeroMinimal />;
    case 2: return <HeroSoft />;
    case 3: return <HeroBold />;
    case 4: return <HeroGradient />;
    case 5: return <HeroGlass />;
    case 6: return <HeroPremium />;
    default: return <HeroOriginal />;
  }
}
