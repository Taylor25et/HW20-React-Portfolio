import About from "./Pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Navigation from "../components/Navigation";

export default function Main({ page }) {
  const currentpage = () => {
    if (page === "about") {
      return <About />;
    } else if (page === "contact") {
    } else if (page === "services") { 
    } else { }
  };
  return <>{currentpage()}</>;
}
