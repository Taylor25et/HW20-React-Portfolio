
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

export default function Main({ page }) {
  const currentpage = () => {
    if (page === "Contact") {
      return <Contact />;
    } else if (page === "Portfolio") { 
      return <Portfolio />;
    } else{
       return <About />;
    }
  };
  return <>{currentpage()}</>;
}