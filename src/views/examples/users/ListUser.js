import React from "react";
import Axios from "axios";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  componentDidMount() {
    Axios.get("https://reqres.in/api/users?page=2").then((res) => {
      this.setState({
        ListUser: res && res.data && res.data.data ? res.data.data : [],
      });
    });
  }
  detailUser = (item) => {
    this.props.history.push(`/users/${item.id}`);
  };
  render() {
    let ListUser = this.state.ListUser;
    return (
      <>
        <div>
          <div>Fetch all list user</div>
          <table id="customers">
            <tbody>
              <tr>
                <th>id</th>
                <th>first Name</th>
                <th>last Name</th>
              </tr>
              {ListUser &&
                ListUser.length > 0 &&
                ListUser.map((item, index) => {
                  return (
                    <tr onClick={() => this.detailUser(item)}>
                      <th>{item.id}</th>
                      <th>{item.first_name}</th>
                      <th>{item.last_name}</th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default withRouter(ListUser);
