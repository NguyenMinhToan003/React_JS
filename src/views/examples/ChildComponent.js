import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    console.log(">>>>props", this.props);
    let { listUser } = this.props;
    return (
      <ul className="list">
        {listUser.map((item, index) => {
          if (!item.email || !item.password) {
            {
              alert("missing commit");
            }
          } else {
            return (
              <li key={item.id}>
                Email: {item.email} , Password: {item.password}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}
export default ChildComponent;
