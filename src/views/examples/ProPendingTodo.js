import React from "react";
import { toast } from "react-toastify";
class ProPendingTodo extends React.Component {
  commitDelete = () => {
    this.props.removeDataDelete();
    toast.success("Delete complete");
  };
  editStatus = (event) => {
    event.target.classList.toggle("active");
    if (this.props.status === 2) this.props.changeStatus(1);
    else this.props.changeStatus(2);
    toast.success("Now Edit ");
  };
  render() {
    let { dataDelete } = this.props;

    return (
      <div>
        <span className="footer">
          You have {[...dataDelete].length} pending tasks
          <button
            onClick={() => {
              this.commitDelete();
            }}>
            Delete All
          </button>
        </span>
        <span className="footer">
          You have edit ?
          <button
            onClick={(event) => {
              this.editStatus(event);
            }}>
            {" "}
            Edit
          </button>
        </span>
      </div>
    );
  }
}
export default ProPendingTodo;
