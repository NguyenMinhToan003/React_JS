import React from "react";
// import { toast } from "react-toastify";
class ProShowTodo extends React.Component {
  state = {
    edit: "",
  };
  addDelete = (el, event) => {
    const content = event.target.textContent;
    const li = event.target.parentNode;
    li.classList.toggle("active");
    if (content === "delete") event.target.textContent = "undelete";
    else event.target.textContent = "delete";
    this.props.addDataDelete(el);
  };
  editContent = (id, content, event) => {
    this.setState({
      edit: content,
    });
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
                      this.editContent(item.id, item.content, event)
                    }>
                    {item.content}
                  </span>
                  <span className="icon">edit</span>
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
