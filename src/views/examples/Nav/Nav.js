import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/todolist">todolist</NavLink>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/protodolist">ProTodoList</NavLink>
          <NavLink to="/image">Import Image</NavLink>
          <NavLink to="./users">ListUser</NavLink>
        </div>
      </>
    );
  }
}
export default Navigation;
