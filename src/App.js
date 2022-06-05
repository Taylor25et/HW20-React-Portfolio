// import React, { useState } from "react";


// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// // import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";


// export default function App(props) {
//   const [page, setPage]= useState('Home');
//   return (
//     <div >
//       {/* <Header setpage={setPage}/> */}
//       {/* <Navigation setpage={setPage}/> */}
//       <Portfolio page={page}/>
//       <About page={page}/>
//       <Home page={page}/>
//       <Footer setpage={setPage}/>
//     </div>
    
//   );
// }

import Header from "./components/Header/header";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [page, setPage]= useState('about');

  return (
    <div >
      <Header setPage={setPage}/>
      <Home page={page}/>
    </div>
  );
}

export default App;