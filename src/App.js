// import Header from "./components/Header/header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [page, setPage]= useState('about');
  // const images = [
  //   "https://github.com/Taylor25et/Final-Project-Dating-Sim/raw/main/client/public/assets/images/SignUpScreenshot.png",
  //   "https://github.com/Taylor25et/HW14-Tech-Blog/raw/main/public/assets/images/home.png",
  //   "https://github.com/Taylor25et/Project-2-Travel-App/raw/main/assets/home-page.png",
  //   "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
  // ];
  return (
    <div >
      <Navigation setPage={setPage}/>
      <Home page={page}/>
      {/* <Header images={images} setPage={setPage}/> */}
      <Footer sx={{ mt: 5 }} />
    </div>
  );
}

export default App;