import React from "react";

class MyComponent extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handerEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handerPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handerSubmit = (event) => {
    event.preventDefault();
    alert(`email: ${this.state.email}, password: ${this.state.password}`);
  };
  render() {
    return (
      <form style={{ border: "1px solid #ccc" }}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={(event) => this.handerEmail(event)}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => this.handerPassword(event)}
          />
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          ``
          <input
            type="password"
            placeholder="Repeat Password"
            value={this.state.password}
            onChange={(event) => this.handerPassword(event)}
          />
          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button
              type="submit"
              className="signupbtn"
              onClick={(event) => this.handerSubmit(event)}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MyComponent;
