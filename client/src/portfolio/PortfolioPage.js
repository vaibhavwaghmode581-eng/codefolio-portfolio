import { useParams } from "react-router-dom";

function PortfolioPage() {
  const { username } = useParams();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        {username}
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Full Stack Developer
      </h2>

      <p style={{ maxWidth: "600px", marginTop: "20px" }}>
        I create modern web applications using React,
        Node.js, Express and MongoDB.
      </p>

      <br />

      <h2>Skills</h2>

      <ul>
        <li>React JS</li>
        <li>Node JS</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
      </ul>

      <br />

      <h2>Projects</h2>

      <div
        style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <h3>Smart Energy Meter</h3>

        <p>
          IoT based smart energy monitoring system using
          Raspberry Pi.
        </p>
      </div>

      <br />

      <button
        style={{
          padding: "10px 20px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Contact Me
      </button>
    </div>
  );
}

export default PortfolioPage;