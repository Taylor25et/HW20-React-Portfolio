import About from "./Pages/About";

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
