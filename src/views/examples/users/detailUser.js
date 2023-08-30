import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  backListUser = () => {
    this.props.history.push("/users");
  };
  render() {
    let user = this.state.user;
    return (
      <ul>
        <li>
          <span style={{ color: "red" }}>id:</span> {user.id}
        </li>
        <li>
          <span style={{ color: "red" }}>email</span> {user.email}
        </li>
        <li>
          <span style={{ color: "red" }}>first Name:</span> {user.first_name}
        </li>
        <li>
          <span style={{ color: "red" }}>last Name:</span> {user.last_name}
        </li>
        <li>
          <img src={user.avatar}></img>
        </li>
        <li>
          <button onClick={() => this.backListUser()}>Back</button>
        </li>
      </ul>
    );
  }
}

export default withRouter(DetailUser);
