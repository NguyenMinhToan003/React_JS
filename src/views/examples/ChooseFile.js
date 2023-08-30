import React from "react";

class ChooseFile extends React.Component {
  myFunction = () => {
    const imgInp = document.querySelector("#imgInp");
    const formChoose = document.querySelector(".formChoose");
    imgInp.onchange = () => {
      let [...file] = imgInp.files;
      file.forEach((el) => {
        if (el) {
          let img = document.createElement("img");
          img.setAttribute("id", "blah");
          img.src = URL.createObjectURL(el);
          formChoose.appendChild(img);
        }
      });
    };
  };
  handerSubmit = () => {};
  render() {
    return (
      <form runat="server" className="formChoose">
        <button
          clastName="resetFile"
          type="submit"
          onClick={() => this.handerSubmit()}>
          Reset
        </button>
        <input
          accept="image/*"
          type="file"
          id="imgInp"
          multiple
          onClick={() => this.myFunction()}
        />
        {/* <img id="blah" alt="img" /> */}
      </form>
    );
  }
}
export default ChooseFile;
