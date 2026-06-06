import { useForm } from "react-hook-form";
import "../App.css";

function Dashboard() {
  const { register, watch } = useForm();

  const data = watch();

  const handleSave = () => {
    localStorage.setItem(
      "portfolio",
      JSON.stringify(data)
    );

    alert("Portfolio Saved Successfully!");
  };

  return (
    <div className="container">
      {/* Form Section */}

      <div className="form-section">
        <h1>Portfolio Builder</h1>

        <input
          placeholder="Name"
          {...register("name")}
        />

        <textarea
          placeholder="Bio"
          {...register("bio")}
        />

        <input
          placeholder="Skills (comma separated)"
          {...register("skills")}
        />

        <input
          placeholder="GitHub Link"
          {...register("github")}
        />

        <input
          placeholder="LinkedIn Link"
          {...register("linkedin")}
        />

        <input
          placeholder="Resume Link"
          {...register("resume")}
        />

        <input
          placeholder="Project 1"
          {...register("project1")}
        />

        <input
          placeholder="Project 2"
          {...register("project2")}
        />

        <input
          placeholder="Project 3"
          {...register("project3")}
        />

        <select {...register("template")}>
          <option value="Cyberpunk">
            Cyberpunk
          </option>

          <option value="Minimal">
            Minimal
          </option>
        </select>

        <button onClick={handleSave}>
          Save Portfolio
        </button>
      </div>

      {/* Preview Section */}

      <div className="preview-section">
        <h1>{data.name || "Your Name"}</h1>

        <p>{data.bio || "Your Bio"}</p>

        <h2>Skills</h2>

        <div>
          {data.skills
            ?.split(",")
            .map((skill, index) => (
              <span
                key={index}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              >
                {skill}
              </span>
            ))}
        </div>

        <h2>Projects</h2>

        <ul>
          <li>{data.project1}</li>
          <li>{data.project2}</li>
          <li>{data.project3}</li>
        </ul>

        <h2>Template</h2>

        <p>{data.template}</p>

        <div style={{ marginTop: "20px" }}>
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          )}

          {"  "}

          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <button>LinkedIn</button>
            </a>
          )}

          {"  "}

          {data.resume && (
            <a
              href={data.resume}
              target="_blank"
              rel="noreferrer"
            >
              <button>Resume</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;