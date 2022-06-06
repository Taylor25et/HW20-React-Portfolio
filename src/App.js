import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [page, setPage]= useState('about');

  return (
    <div >
      <Header setPage={setPage}/>
      <Navigation setPage={setPage}/>
      <Home page={page}/>
      {/* <About page={page}/>
      <Portfolio page={page}/>
      <Contact page={page}/> */}
      <Footer sx={{ mt: 5 }} />
    </div>
  );
}

export default App;