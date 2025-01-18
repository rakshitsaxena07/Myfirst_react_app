import React,{useState} from 'react'
import PropTypes from 'prop-types'




export default function Textform(props) {
    
    const handleUpClick = ()=> {
      //console.log("Uppercase was clicked" + Text);
      let newText = Text.toUpperCase();
      setText(newText);
    }

    const handleLoClick = ()=> {
      
      let newText = Text.toLowerCase();
      setText(newText);
    }
    const clearText= ()=> {
        
        let newText = "";
        setText(newText);
      }
      const removeSpace= ()=> {
        
        let newText = Text.replace(/\s+/g, ""); // Remove all spaces from the text
        setText(newText); // Update the state with the modified text
      }

      const handleCopy = () => {
        navigator.clipboard.writeText(Text);
      }
  

    const handleOnChange = (event)=> {//to listen to event or it enables us to type in textbox
      //console.log("On change");
      setText(event.target.value);
    }


    const[Text, setText] = useState("Enter text here");//HOOKs

    

  return (
    <>
  <div className="container"style={{color : props.mode === 'dark'?'white':'black'}}>
<h1>{props.heading}</h1>    
<div className="mb-3">
  <label for="myBox" class="form-label">Another label</label>
  <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white', 
    color:props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
</div>
    <button disabled={Text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to
       Uppercase </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to
     Lowercase </button>
     <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Convert to
    blank </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeSpace}>Convert to
    spaceless </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
</div>
<div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{Text.split(" ").filter((element)=>{ return element.length!==0}).length} words 
      and {Text.length} characters</p>
    <p>{0.008*Text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:".B..L..A..N..K."}</p>
    </div>
</>
  )
}

