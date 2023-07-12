import logo from "./logo.svg";
import "../styles/App.scss";
import MyComponent from "./examples/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyComponent />
    </div>
  );
}

export default App;
