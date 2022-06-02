import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";




export default function App() {
  const [page, setPage]= useState('Home');

  return (
    <div >
      <Header setPage={setPage}/>
      <Main page={page}/>
    </div>
  );
}


// export default function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <div className="container">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/Home" element={<Home />} />
//               <Route path="/Game" element={<Game />} />
//               <Route path="/Signup" element={<Signup />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }