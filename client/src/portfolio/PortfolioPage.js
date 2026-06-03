import { useParams } from "react-router-dom";

function PortfolioPage() {
  const { username } = useParams();

  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "#0f172a",
        }}
      >
        <h2>{username}</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Hero Section */}

      <div style={{ padding: "80px 40px" }}>
        <h1 style={{ fontSize: "60px" }}>
          Hi, I'm {username}
        </h1>

        <h2 style={{ color: "#38bdf8" }}>
          Full Stack Developer
        </h2>

        <p
          style={{
            maxWidth: "600px",
            marginTop: "20px",
            lineHeight: "30px",
          }}
        >
          I create modern and responsive web applications
          using React, Node.js.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#38bdf8",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Hire Me
        </button>
      </div>

      {/* Skills */}

      <div style={{ padding: "40px" }}>
        <h1>Skills</h1>

        <ul>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      {/* Projects */}

      <div style={{ padding: "40px" }}>
        <h1>Projects</h1>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h2>PVC Bird Repeller</h2>

          <p>
            PVC Bird Repeller using
            Ardiuno.
          </p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h2>Smart Pothole Detection</h2>

          <p>
            Raspberry Pi based pothole detection and alert system.
          </p>
        </div>
      </div>

      {/* Footer */}

      <div
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#0f172a",
        }}
      >
        © 2026 Vaibhav Waghmode
      </div>
    </div>
  );
}

export default PortfolioPage;
const users = {
demo1: {
templateId: "cyberpunk",

```
name: "Vaibhav Waghmode",

role: "Full Stack Developer",

college: "PVPIT Sangli",

skills: [
  "Data Structures & Algorithms",
  "Web Development",
  "Embedded Systems",
  "React JS",
  "Node JS",
  "MongoDB",
  "JavaScript",
],

projects: [
  {
    title: "Smart Pothole Detection",

    description:
      "An AI and IoT based smart road safety system that detects potholes in real-time and sends alerts to drivers and authorities for safer transportation.",

    techStack:
      "Python, OpenCV, IoT Sensors, Raspberry Pi, Machine Learning",
  },

  {
    title: "PVC Bird Repeller",

    description:
      "An embedded system project designed to protect agricultural fields using automated bird repelling techniques based on motion and sound detection.",

    techStack:
      "Embedded C, Arduino, Sensors, PVC Hardware Design",
  },

  {
    title: "Portfolio Website",

    description:
      "A responsive personal portfolio website to showcase projects, technical skills, and developer profile with modern UI and live deployment.",

    techStack:
      "React JS, CSS, JavaScript, Vercel",
  },
],

email: "vaibhavwaghmode@123gmail.com",

github:
  "https://github.com/vaibhavwaghmode581-eng/codefolio-portfolio/projects?query=is%3Aopen",

linkedin:
  "https://www.linkedin.com/in/vaibhav-waghmode-a32580333",
```

},
};
