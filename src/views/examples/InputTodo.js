import React from "react";

class InputTodo extends React.Component {
  state = {
    content: "",
  };
  handerContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  handerSubmit = (event) => {
    if (this.state.content === "") return alert("Missing commit");
    event.preventDefault();
    this.props.addContent({
      id: Math.floor(Math.random() * 10000),
      content: this.state.content,
    });
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <>
        <form id="myDIV" className="header">
          <h2>My To Do List</h2>
          <input
            type="text"
            id="myInput"
            placeholder="Title..."
            value={this.state.content}
            onChange={(event) => this.handerContent(event)}
          />
          <button
            type="submit"
            className="addBtn"
            onClick={(event) => this.handerSubmit(event)}>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default InputTodo;
