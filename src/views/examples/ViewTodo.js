import React from "react";

class ViewTodo extends React.Component {
  state = {
    delete: false,
    edit: false,
    add: false,
    dataDelete: [],
  };
  handerDelete = (el) => {
    if (this.state.delete) {
      let tag = document.getElementById(el);
      tag.classList.toggle("checked");
      if (this.state.dataDelete.includes(el)) {
        this.setState({
          dataDelete: this.state.dataDelete.filter((item) => item !== el),
        });
      } else
        this.setState({
          dataDelete: [...this.state.dataDelete, el],
        });
    }
  };
  handerEdit = (el) => {
    this.props.editContent(el);
  };
  handerCheckBox = (index) => {
    // 1: delete , 2: edit

    // hander
    if (index === 1) {
      if (this.state.delete) return;
      if (this.state.edit || this.state.add)
        this.setState({
          edit: false,
          add: false,
        });
      this.setState({
        delete: !this.state.delete,
      });
    } else if (index === 2) {
      if (this.state.edit) return;
      if (this.state.delete || this.state.add)
        this.setState({
          delete: false,
          add: false,
        });
      this.setState({
        edit: !this.state.edit,
      });
    } else if (index === 3) {
      if (this.state.add) return;
      if (this.state.delete || this.state.edit)
        this.setState({
          delete: false,
          edit: false,
        });
      this.setState({
        add: !this.state.edit,
      });
    }
  };
  handerChange = (el) => {
    this.handerDelete(el);
    this.handerEdit(el);
  };
  handerSubmit = () => {
    this.props.deleteContent([...this.state.dataDelete]);
  };
  render() {
    let todoList = this.props.todoList;
    return (
      <>
        <fieldset>
          <legend>Select a maintenance drone:</legend>
          <ul>
            <li className="choose">
              <input
                type="radio"
                name="drone"
                id="delete"
                className="choose"
                onClick={() => this.handerCheckBox(1)}
              />
              <label htmlFor="delete">delete</label>
            </li>
            <li>
              <input
                type="radio"
                name="drone"
                id="edit"
                className="choose"
                onClick={() => this.handerCheckBox(2)}
              />
              <label htmlFor="edit">edit</label>
            </li>
            <li>
              <input
                type="radio"
                name="drone"
                id="add"
                className="choose"
                onClick={() => this.handerCheckBox(3)}
              />
              <label htmlFor="add">add</label>
            </li>
            <button onClick={() => this.handerSubmit()}>SUBMIT</button>
          </ul>
        </fieldset>

        <ul id="myUL">
          {todoList.map((item) => {
            return (
              <li
                key={item.id}
                id={item.id}
                onClick={() => this.handerChange(item.id)}>
                {item.content}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default ViewTodo;
