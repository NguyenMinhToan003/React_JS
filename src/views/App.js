import React from "react";
import logo from "./logo.svg";
import "../styles/App.scss";
import MyComponent from "./examples/MyComponent";
import ChildComponent from "./examples/ChildComponent";
import ChooseFile from "./examples/ChooseFile";

class App extends React.Component {
  state = {
    listUser: [{ id: "1", email: "nguyentoan@gmail.com", password: "774900" }],
  };
  handerSubmit = (item) => {
    this.setState({
      listUser: [...this.state.listUser, item],
    });
  };
  handerDeleteUser = (el) => {
    let currentListUser = this.state.listUser;
    currentListUser = currentListUser.filter((item) => item.id !== el.id);
    this.setState({
      listUser: currentListUser,
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
          <ChildComponent
            listUser={this.state.listUser}
            handerDeleteUser={this.handerDeleteUser}
          />
          <ChooseFile />
        </div>
      </div>
    );
  }
}

export default App;
