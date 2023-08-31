import React from "react";
import "../styles/proTodoApp.scss";
import ProShowTodo from "./examples/ProShowTodo";
import ProPendingTodo from "./examples/ProPendingTodo";
import ProInputTodo from "./examples/ProInputTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Color from "./examples/HOC/color";
class ProTodoApp extends React.Component {
  state = {
    status: 1,
    dataDelete: [],
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 2, content: "Meet George" },
      { id: 3, content: "Buy eggs" },
      { id: 4, content: "Organize office" },
    ],
  };
  changeStatus = (status) => {
    //! 1 delete, 2 edit
    this.setState({
      status: status,
    });
  };
  addContent = (content) => {
    this.setState({
      todoList: [...this.state.todoList, content],
    });
  };
  addDataDelete = (data) => {
    if (this.state.dataDelete.includes(data))
      this.setState({
        dataDelete: this.state.dataDelete.filter((item) => item !== data),
      });
    else
      this.setState({
        dataDelete: [...this.state.dataDelete, data],
      });
  };
  removeDataDelete = () => {
    this.setState({
      todoList: [...this.state.todoList].filter(
        (item) => !this.state.dataDelete.includes(item.id)
      ),
      dataDelete: [],
    });
  };
  HandlerEdit = (el) => {
    console.log(el);
    let index = this.state.todoList.findIndex((item) => item.id === el.id);
    let newTodo = this.state.todoList;
    newTodo[index] = el;
    this.setState({
      todoList: newTodo,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <header>Todo App</header>
        <ProInputTodo addContent={this.addContent} />
        <ul className="todoList">
          {/* data are comes from local storage */}
          <ProShowTodo
            status={this.state.status}
            todoList={this.state.todoList}
            itemDelete={this.itemDelete}
            addDataDelete={this.addDataDelete}
            HandlerEdit={this.HandlerEdit}
          />
        </ul>
        <ProPendingTodo
          status={this.state.status}
          dataDelete={this.state.dataDelete}
          changeStatus={this.changeStatus}
          removeDataDelete={this.removeDataDelete}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}
export default Color(ProTodoApp);
