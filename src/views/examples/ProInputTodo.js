import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class ProInputTodo extends React.Component {
  state = {
    content: "",
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/image");
    }, 3000);
  }
  handlerWrite = (evnt) => {
    this.setState({
      content: evnt.target.value,
    });
  };
  handerSubmit = (evnt) => {
    evnt.preventDefault();
    if (!this.state.content) toast.error("error");
    else {
      this.props.addContent({
        id: Math.floor(Math.random() * 10000),
        content: this.state.content,
      });
      this.setState({
        content: "",
      });
      toast.success("Wow so easy!");
    }
  };
  render() {
    return (
      <form className="inputField">
        <input
          onChange={(evnt) => {
            this.handlerWrite(evnt);
          }}
          type="text"
          placeholder="Add your new todo"
          value={this.state.content}
        />
        <button
          type="submit"
          onClick={(evnt) => {
            this.handerSubmit(evnt);
          }}>
          +
        </button>
      </form>
    );
  }
}
export default withRouter(ProInputTodo);
