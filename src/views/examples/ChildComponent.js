import React, { Component } from "react";

class ChildComponent extends Component {
  state = {
    showListUser: true,
  };
  handerShow = () => {
    this.setState({
      showListUser: !this.state.showListUser,
    });
  };
  handerDeleteUser = (item) => {
    this.props.handerDeleteUser(item);
  };
  render() {
    console.log(this.props);
    let { listUser } = this.props;

    return (
      <div>
        {this.state.showListUser === false ? (
          <button onClick={() => this.handerShow()}>show</button>
        ) : (
          <>
            <ul className="list">
              {listUser.map((item, index) => {
                return (
                  <>
                    <li key={item.id}>
                      Id: {item.id} , Email: {item.email} , Password:{" "}
                      {item.password}
                      <button
                        className="btn-edit"
                        onClick={() => this.handerDeleteUser(item)}>
                        delete
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
            <button className="signupbtn" onClick={() => this.handerShow()}>
              hiden
            </button>
          </>
        )}
      </div>
    );
  }
}
export default ChildComponent;
