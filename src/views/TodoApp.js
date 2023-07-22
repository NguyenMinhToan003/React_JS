import React from "react";
import "../styles/todoApp.scss";
import InputTodo from "./examples/InputTodo";
import ViewTodo from "./examples/ViewTodo";

class TodoApp extends React.Component {
  state = {
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 2, content: "Meet George" },
      { id: 3, content: "Buy eggs" },
      { id: 4, content: "Organize office" },
    ],
  };
  addContent = (item) => {
    this.setState({
      todoList: [...this.state.todoList, item],
    });
  };
  editContent = (el) => {};
  deleteContent = (el) => {
    this.setState({
      todoList: [...this.state.todoList].filter(
        (item) => !el.includes(item.id)
      ),
    });
    console.log(this.state.todoList);
  };
  render() {
    return (
      <div className="todoApp">
        <InputTodo addContent={this.addContent} />;
        <ViewTodo
          todoList={this.state.todoList}
          editContent={this.editContent}
          deleteContent={this.deleteContent}
        />
      </div>
    );
  }
}
export default TodoApp;
