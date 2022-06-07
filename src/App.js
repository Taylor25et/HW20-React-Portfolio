import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [page, setPage]= useState('about');

  return (
    <div >
      <Navigation setPage={setPage}/>
      <Home page={page}/>
      <Footer sx={{ mt: 5 }} />
    </div>
  );
}

export default App;