import React from "react";
import { connect } from "react-redux";
import Logo from "../assets/images/jade.jpg";
class Home extends React.Component {
  handerDeleteUser = (user) => {
    console.log(user);
    this.props.deleteUserRedux(user);
  };
  render() {
    const listUser = this.props.dataRedux;

    return (
      <>
        <img className="img" src={Logo}></img>
        <div>Wecome to app React JS</div>

        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr>
                  <th>{item.id}</th>
                  <th>{item.name}</th>
                  <th>
                    <button onClick={() => this.handerDeleteUser(item)}>
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
        </table>
      </>
    );
  }
}
const mapStateProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: `DELETE_USER`, payload: userDelete }),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(Home);
