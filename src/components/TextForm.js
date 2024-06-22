import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log('UpperCase was Clicked' + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = () =>{
    // console.log('LowerCase was Clicked' + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = () =>{
    // console.log('LowerCase was Clicked' + text);
    let newText = '';
    setText(newText)
    props.showAlert("Cleared the text!", "success");
  }

  const handleOnChange = (event) =>{
    // console.log('On change');
    setText(event.target.value)
    
  }

  const handleTitleClick = () => {
    let newText = toTitleCase(text);
    setText(newText);
    props.showAlert("Converted to TitleCase!", "success");
  };

  const toTitleCase = (str) => {
    return str
      .split(' ')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
  };

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges(); To remove selection part display
    props.showAlert("Copied to clipboard", "success");
  }


  const findMinutes = () => {
    let wordCount = text.split(" ").filter((element) => element.length !== 0).length; // Filtering out empty strings
    return 0.008 * wordCount;
  };

  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("Enter required text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
        color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

    </div>

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
      <p>{findMinutes().toFixed(2)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div> 

    </>
    
  );
}
