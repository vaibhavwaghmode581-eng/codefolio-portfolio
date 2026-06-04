import { useParams } from "react-router-dom";

import MinimalLayout from "../layouts/MinimalLayout";
import CyberpunkLayout from "../layouts/CyberpunkLayout";
import CorporateLayout from "../layouts/CorporateLayout";

function PortfolioPage() {
  const { username } = useParams();

  const users = {
    demo1: {
      templateId: "cyberpunk",
      name: "Vaibhav Waghmode",
      college: "PVPIT Sangli",
      bio: "Full Stack Developer",
      skills: "DSA, Web Development, Embedded Systems",
      github:
        "https://github.com/vaibhavwaghmode581-eng/codefolio-portfolio",
      linkedin:
        "https://www.linkedin.com/in/vaibhav-waghmode-a32580333",
      resume:
        "https://drive.google.com/",
      projects: [
        {
          title: "Smart Pothole Detection",
          description:
            "Rasberry pi based system to detect potholes and alert drivers in real time.",
          tech: "Python, OpenCV, Raspberry Pi, IoT",
        },
        {
          title: "PVC Bird Repeller",
          description:
            "Embedded system project used to repeller birds from agricultural fields.",
          tech: "Embedded C, Sensors, Relay",
        },
        {
          title: "Portfolio Website",
          description:
            "Personal portfolio website with modern UI and deployment support.",
          tech: "React.js, CSS, Vercel",
        },
      ],
    },
  };

  const user = users[username];

  if (!user) {
    return <h1>User Not Found</h1>;
  }

  if (user.templateId === "minimal") {
    return <MinimalLayout data={user} />;
  }

  if (user.templateId === "corporate") {
    return <CorporateLayout data={user} />;
  }

  return <CyberpunkLayout data={user} />;
}

export default PortfolioPage;