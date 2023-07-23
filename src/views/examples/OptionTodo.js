import React from "react";

class OptionTodo extends React.Component {
  handlerCheckBox = (index) => {
    // 1: delete , 2: edit , 3: add
    let { status, changeStatus } = this.props;
    // handler
    if (status === index) return;
    changeStatus(index);
  };
  render() {
    return (
      <fieldset>
        <legend>Select a maintenance drone:</legend>
        <ul>
          <li className="choose">
            <input
              type="radio"
              name="drone"
              id="delete"
              className="choose"
              onClick={() => this.handlerCheckBox(1)}
            />
            <label htmlFor="delete">delete</label>
          </li>
          <li>
            <input
              type="radio"
              name="drone"
              id="edit"
              className="choose"
              onClick={() => this.handlerCheckBox(2)}
            />
            <label htmlFor="edit">edit</label>
          </li>
          <li>
            <input
              type="radio"
              name="drone"
              id="add"
              className="choose"
              onClick={() => this.handlerCheckBox(3)}
            />
            <label htmlFor="add">add</label>
          </li>
        </ul>
      </fieldset>
    );
  }
}
export default OptionTodo;
