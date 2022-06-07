import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function Main({ page }) {
  const currentpage = () => {
    if (page === "Contact") {
      return <Contact />;
    } else if (page === "Portfolio") {
      return <Portfolio />;
    } else if (page === "Resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  };
  return <>{currentpage()}</>;
}
