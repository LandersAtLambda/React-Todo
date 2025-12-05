import logo from "../logo.png";

function AppBar() {
  return (
    <div
      style={{
        width: "100%",
        padding: "16px 24px",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <a
        href="https://www.landers.dev"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#1f2937",
          transition: "opacity 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "40px", marginRight: "12px", borderRadius: "8px" }}
        />
        <p style={{ fontSize: "1rem", fontWeight: "600", margin: 0 }}>
          Return to Landers.dev
        </p>
      </a>
    </div>
  );
}

export default AppBar;
