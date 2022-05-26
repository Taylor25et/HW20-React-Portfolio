import Header from "./components/header";
import Main from "./components/MainContent";
import { useState } from "react";

function App() {
  const [page, setPage]= useState('about');

  return (
    <div >
      <Header setPage={setPage}/>
      <Main page={page}/>
    </div>
  );
}

export default App;
