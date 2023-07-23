import React from "react";

class ViewTodo extends React.Component {
  state = {
    currentStatus: "",
    dataDelete: [],
    dataEdit: {
      id: "",
      content: "",
    },
  };
  handlerDelete = (el) => {
    // handler view
    let tag = document.getElementById(el);
    tag.classList.toggle("close");
    tag.classList.toggle("checked");
    // handler data
    if (this.state.dataDelete.includes(el)) {
      this.setState({
        dataDelete: this.state.dataDelete.filter((item) => item !== el),
      });
    } else
      this.setState({
        dataDelete: [...this.state.dataDelete, el],
      });
  };
  handlerAdd = () => {
    if (!this.state.add) return;
  };
  handlerEdit = (el) => {
    if (el !== this.state.dataEdit.id) {
      let tag;
      if (this.state.dataEdit.id) {
        tag = document.getElementById(this.state.dataEdit.id);
        tag.removeChild(
          document.getElementById(`input${this.state.dataEdit.id}`)
        );
      }
      tag = document.getElementById(el);
      tag.classList.toggle("close");
      let form = document.createElement("form");
      form.setAttribute("id", `input${el}`);
      form.innerHTML = `
      <input type="text" style="border-radius: 1000rem" name="inputName"/>
      <button type="submit" style="display:none">Submit form</button>`;
      tag.appendChild(form);
      this.setState({
        dataEdit: {
          id: el,
        },
      });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        this.setState({
          dataEdit: {
            id: el,
            content: event.target.elements.inputName.value,
          },
        });
      });
    }
  };

  handlerClick = (item) => {
    let { status } = this.props.state;
    if (status === 1) this.handlerDelete(item);
    else if (status === 2) this.handlerEdit(item);
    else if (status === 3) return;
  };
  handlerSubmit = () => {
    let { status } = this.props.state;
    if (status === 1) this.props.deleteContent(this.state.dataDelete);
    else if (status === 2) {
      if (!this.state.dataEdit.id) return;
      this.props.editContent(this.state.dataEdit);
      let tag = document.getElementById(this.state.dataEdit.id);
      tag.removeChild(
        document.getElementById(`input${this.state.dataEdit.id}`)
      );
    }
    this.setState({
      dataDelete: [],
      dataEdit: {
        id: "",
        content: "",
      },
    });
  };
  render() {
    let { todoList } = this.props.state;
    return (
      <>
        <button onClick={() => this.handlerSubmit()}>SUBMIT</button>
        <ul id="myUL">
          {todoList.map((item) => {
            return (
              <li
                key={item.id}
                id={item.id}
                onClick={() => this.handlerClick(item.id)}>
                <span>{item.content}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default ViewTodo;
