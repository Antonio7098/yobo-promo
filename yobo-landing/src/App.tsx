import { ThemeProvider, useTheme } from "./context/ThemeContext";
import {
  Header,
  Hero,
  Presence,
  Pricing,
  ContactForm,
  FAQ,
  Footer,
} from "./components";

function LandingPage() {
  const { theme, variation } = useTheme();

  const getBodyBackground = () => {
    switch (variation) {
      case 1:
        return "#ffffff";
      case 2:
        return "#f5f3ff";
      case 3:
        return "#ffffff";
      case 4:
        return theme.background;
      case 5:
        return theme.background;
      case 6:
        return theme.background;
      default:
        return "#ffffff";
    }
  };

  return (
    <div
      style={{
        fontFamily: theme.fontFamily,
        background: getBodyBackground(),
        minHeight: "100vh",
      }}
    >
      {/* <VariationTabs /> */}
      <Header />
      <main>
        <Hero />
        <Presence />
        <Pricing />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
