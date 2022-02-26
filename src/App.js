import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Parallax";
import Header from "./components/Tutorial";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Background></Background>
    </div>
  );
}

export default App;
