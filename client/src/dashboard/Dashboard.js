import { useForm } from "react-hook-form";

function Dashboard() {
  const { register, watch } = useForm();

  const data = watch();

  const handleSave = () => {
    alert("Portfolio Saved Successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Left Form */}

      <div
        style={{
          width: "50%",
          padding: "20px",
        }}
      >
        <h1>Portfolio Builder</h1>

        <input
          placeholder="Name"
          {...register("name")}
        />

        <br /><br />

        <textarea
          placeholder="Bio"
          {...register("bio")}
        />

        <br /><br />

        <input
          placeholder="Skills"
          {...register("skills")}
        />

        <br /><br />

        <input
          placeholder="GitHub Link"
          {...register("github")}
        />

        <br /><br />

        <input
          placeholder="LinkedIn Link"
          {...register("linkedin")}
        />

        <br /><br />

        <input
          placeholder="Project 1"
          {...register("project1")}
        />

        <br /><br />

        <input
          placeholder="Project 2"
          {...register("project2")}
        />

        <br /><br />

        <input
          placeholder="Project 3"
          {...register("project3")}
        />

        <br /><br />

        <select {...register("template")}>
          <option value="Cyberpunk">Cyberpunk</option>
          <option value="Minimal">Minimal</option>
        </select>

        <br /><br />

        <button onClick={handleSave}>
          Save Portfolio
        </button>
      </div>

      {/* Right Preview */}

      <div
        style={{
          width: "50%",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h1>{data.name}</h1>

        <p>{data.bio}</p>

        <h3>{data.skills}</h3>

        <h2>Projects</h2>

        <ul>
          <li>{data.project1}</li>
          <li>{data.project2}</li>
          <li>{data.project3}</li>
        </ul>

        <h2>Template</h2>

        <p>{data.template}</p>

        <br />

        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        )}

        <br /><br />

        {data.linkedin && (
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Dashboard;