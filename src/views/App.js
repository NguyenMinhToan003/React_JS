import React from "react";
import logo from "./logo.svg";
import "../styles/App.scss";
import MyComponent from "./examples/MyComponent";
import ChildComponent from "./examples/ChildComponent";
class App extends React.Component {
  state = {
    listUser: [{ id: "1", email: "nguyentoan@gmail.com", password: "774900" }],
  };
  handerSubmit = (item) => {
    this.setState({
      listUser: [...this.state.listUser, item],
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="#formSignup">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </header>
        <div className="main">
          <MyComponent handerSubmit={this.handerSubmit} />
          <ChildComponent listUser={this.state.listUser} />
        </div>
      </div>
    );
  }
}

export default App;
