import "./App.css";
import Content from "./components/Content";
import Background from "./components/Parallax";
import Header from "./components/Tutorial";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Background></Background>
      <Content></Content>
    </div>
  );
}

export default App;
