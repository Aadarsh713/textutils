import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    // arrow function
    //console.log("uppercase was clicked "+text)
    let a = text.toUpperCase();
    setText(a);
    props.showAlert("converted to uppercase!","success")
  };
  const handleloclick = () => {
    // arrow function
    //console.log("uppercase was clicked "+text)
    let a = text.toLowerCase();
    setText(a);
    props.showAlert("converted to lowercase!","success")
  };
  const cleartext = () => {
    // arrow function
    //console.log("uppercase was clicked "+text)
    let a = "";
    setText(a);
    props.showAlert("text cleared!","success")
  };
  const handleonchange = (event) => {
    // arrow function
    //  console.log("handleonchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{color: props.mode==='light'?'dark':'white'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
          //  style={{color: props.mode==='light'?'black':'white'}}
            
            value={text}
            onChange={handleonchange}
           style={{backgroundColor: props.mode==='light'?'white':'grey' ,color:props.mode==='light'?'black':'white'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>
            convert to uppercase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleloclick}>
            convert to lowercase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={cleartext}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>

      </div>
    </>
  );
}
