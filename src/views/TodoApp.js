import React from "react";
import "../styles/todoApp.scss";
import InputTodo from "./examples/InputTodo";
import ViewTodo from "./examples/ViewTodo";
import OptionTodo from "./examples/OptionTodo";

class TodoApp extends React.Component {
  state = {
    // 1: delete , 2: edit , 3: add
    status: 3,
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 2, content: "Meet George" },
      { id: 3, content: "Buy eggs" },
      { id: 4, content: "Organize office" },
    ],
  };
  changeStatus = (status) => {
    this.setState({
      status: status,
    });
  };
  addContent = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item],
    });
  };

  deleteContent = (el) => {
    this.setState({
      todoList: [...this.state.todoList].filter(
        (item) => !el.includes(item.id)
      ),
    });
  };
  editContent = (el) => {
    let index = this.state.todoList.findIndex((item) => item.id === el.id);
    let newTodo = this.state.todoList;
    newTodo[index] = el;
    this.setState({
      todoList: newTodo,
    });
  };
  render() {
    return (
      <div className="todoApp">
        <InputTodo addContent={this.addContent} />;
        <OptionTodo
          changeStatus={this.changeStatus}
          status={this.state.status}
        />
        <ViewTodo
          state={this.state}
          changeStatus={this.changeStatus}
          editContent={this.editContent}
          deleteContent={this.deleteContent}
        />
      </div>
    );
  }
}
export default TodoApp;
