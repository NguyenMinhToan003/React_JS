import React from "react";
import { toast } from "react-toastify";
class ProShowTodo extends React.Component {
  state = {
    statusEdit: 0,
    content: "",
    id: "",
  };
  addDelete = (el, event) => {
    const content = event.target.textContent;
    const li = event.target.parentNode;
    li.classList.toggle("active");
    if (content === "delete") event.target.textContent = "undelete";
    else event.target.textContent = "delete";
    this.props.addDataDelete(el);
  };
  HandlerEdit = (id, content, event) => {
    if (this.state.statusEdit === 0)
      this.setState({
        statusEdit: 1,
      });
    else if (this.state.statusEdit === 1)
      this.setState({
        statusEdit: 2,
      });
    else
      this.setState({
        statusEdit: 0,
      });
    this.setState({
      id: id,
      content: content,
    });
  };
  inputContent = (event) => {
    let content = event.target.value;
    this.setState({
      content: content,
    });
  };
  commitEditItem = () => {
    this.props.HandlerEdit(this.state);
    toast.success("Complete Edit");
  };
  render() {
    let { todoList, status } = this.props;

    return (
      <>
        {todoList &&
          todoList.map((item, index) => {
            if (status === 2)
              return (
                <li key={item.id}>
                  <span
                    onClick={(event) =>
                      this.HandlerEdit(item.id, item.content, event)
                    }>
                    {this.state.statusEdit && this.state.id === item.id ? (
                      <input
                        value={this.state.content}
                        onChange={(event) => this.inputContent(event)}></input>
                    ) : (
                      item.content
                    )}
                  </span>
                  <span className="icon" onClick={() => this.commitEditItem()}>
                    edit
                  </span>
                </li>
              );
            else
              return (
                <li key={item.id}>
                  <span>{item.content}</span>
                  <span
                    className="icon"
                    onClick={(event) => this.addDelete(item.id, event)}>
                    delete
                  </span>
                </li>
              );
          })}
      </>
    );
  }
}
export default ProShowTodo;
