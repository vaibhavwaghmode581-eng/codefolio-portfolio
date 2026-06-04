function CyberpunkLayout({ data }) {
  return (
    <div
      style={{
        background: "#050a30",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>{data.name}</h1>

      <h3>{data.bio}</h3>

      <p>
        <strong>College:</strong> {data.college}
      </p>

      <h2>Skills</h2>
      <p>{data.skills}</p>

      <h2>Projects</h2>

      {data.projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #00ff99",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.tech}
          </p>
        </div>
      ))}

      <h2>Links</h2>

      <a
        href={data.github}
        target="_blank"
        rel="noreferrer"
      >
        <button>GitHub</button>
      </a>

      <a
        href={data.linkedin}
        target="_blank"
        rel="noreferrer"
        style={{ marginLeft: "10px" }}
      >
        <button>LinkedIn</button>
      </a>

      <a
        href={data.resume}
        target="_blank"
        rel="noreferrer"
        style={{ marginLeft: "10px" }}
      >
        <button>Resume</button>
      </a>
    </div>
  );
}

export default CyberpunkLayout;