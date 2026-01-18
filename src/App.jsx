export default function App() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>🥛 Badamé</h1>
        <p style={styles.tagline}>Rich • Nutty • Creamy</p>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>
          Immerse yourself in a <span style={styles.highlight}>rich, nutty</span> experience
        </h2>

        <div style={styles.badges}>
          <span style={styles.hot}>🔥 Hot Available</span>
          <span style={styles.cold}>❄️ Cold Available</span>
        </div>

        <p style={styles.heroText}>
          Crafted with fresh milk and premium almonds for a royal taste in every sip.
        </p>
      </section>

      {/* Features */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>🥛 Fresh Milk</h3>
          <p>Pure, hygienic & sourced daily</p>
        </div>
        <div style={styles.card}>
          <h3>🌰 Premium Badam</h3>
          <p>Real almond taste with rich texture</p>
        </div>
        <div style={styles.card}>
          <h3>🔥❄️ Hot & Cold</h3>
          <p>Perfect for every season</p>
        </div>
      </section>

      {/* Pricing */}
      <section style={styles.pricing}>
        <h2>Our Pricing</h2>
        <div style={styles.priceCards}>
          <div style={styles.priceCard}>
            <h3>200 ml</h3>
            <p style={styles.price}>₹30</p>
          </div>
          <div style={styles.priceCard}>
            <h3>500 ml</h3>
            <p style={styles.price}>₹70</p>
          </div>
        </div>
      </section>

        whatsapp: {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "#fff",
    fontSize: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Badamé</p>
        <p>A Rich, Nutty Experience</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#FFF8ED",
    color: "#3A1F0F",
    minHeight: "100vh",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#F6C33D",
    padding: "20px",
  },
  logo: {
    margin: 0,
    fontSize: "2.5rem",
  },
  tagline: {
    margin: "5px 0 0",
    fontWeight: "500",
  },
  hero: {
    padding: "40px 20px",
  },
  heroTitle: {
    fontSize: "1.8rem",
    marginBottom: "15px",
  },
  highlight: {
    color: "#C4161C",
  },
  badges: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  hot: {
    background: "#FFE2E2",
    color: "#C4161C",
    padding: "6px 14px",
    borderRadius: "20px",
    fontWeight: "600",
  },
  cold: {
    background: "#E6F0FF",
    color: "#1D4ED8",
    padding: "6px 14px",
    borderRadius: "20px",
    fontWeight: "600",
  },
  heroText: {
    maxWidth: "500px",
    margin: "0 auto",
    fontSize: "1rem",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "30px 20px",
  },
  card: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  pricing: {
    padding: "30px 20px",
    backgroundColor: "#F6C33D",
  },
  priceCards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  priceCard: {
    background: "#FFFFFF",
    padding: "20px 30px",
    borderRadius: "18px",
    minWidth: "150px",
  },
  price: {
    fontSize: "1.6rem",
    color: "#C4161C",
    fontWeight: "700",
  },
  footer: {
    background: "#3A1F0F",
    color: "#FFFFFF",
    padding: "20px",
    marginTop: "20px",
  },
};
