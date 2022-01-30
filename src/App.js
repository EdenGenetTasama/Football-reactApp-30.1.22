import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import ContextProviderCompo from "./components/ContextFiles/GameContext";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <ContextProviderCompo>
          <Game />
        </ContextProviderCompo>
      </header>
    </div>
  );
}

export default App;
