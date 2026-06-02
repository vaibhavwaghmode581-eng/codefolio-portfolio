import { useParams } from "react-router-dom";

import MinimalLayout from "./layouts/MinimalLayout";
import CyberpunkLayout from "./layouts/CyberpunkLayout";
import CorporateLayout from "./layouts/CorporateLayout";

function PortfolioPage() {
  const { username } = useParams();

  const users = {
    demo1: {
      templateId: "cyberpunk",
      name: "Vaibhav Waghmode",
      bio: "Full Stack Developer",
    },

    demo2: {
      templateId: "minimal",
      name: "Rohit Sharma",
      bio: "Frontend Developer",
    },

    demo3: {
      templateId: "corporate",
      name: "Anjali Patil",
      bio: "Backend Engineer",
    },
  };

  const user = users[username];

  if (!user) {
    return <h1>User Not Found</h1>;
  }

  const templateMap = {
    minimal: MinimalLayout,
    cyberpunk: CyberpunkLayout,
    corporate: CorporateLayout,
  };

  const PortfolioLayout =
    templateMap[user.templateId] || MinimalLayout;

  return <PortfolioLayout data={user} />;
}

export default PortfolioPage;