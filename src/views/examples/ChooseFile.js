import React from "react";

class ChooseFile extends React.Component {
  myFunction() {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    // it's onload event and you forgot (parameters)
    reader.onload = function (e) {
      var image = document.createElement("img");
      // the result image data
      image.src = e.target.result;
      document.body.appendChild(image);
    };
    // you have to declare the file loading
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div>
        <input type="file" name="filename" id="file" multiple />
        <button type="button" onclick={() => this.myFunction}>
          Display
        </button>
      </div>
    );
  }
}
export default ChooseFile;
