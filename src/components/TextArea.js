import React, { useState } from 'react'

const TextArea = (prop) => {

  
  const [text,setText]=useState("")

  const utilBug = (text)=>{
    if((text.split(" ").length) === 1){
      text = 0
      return text
    }
    else{
      return (text.split(" ").length)
    }
  }
  
  
  
  
  const handleUpCase = ()=>{
      let newtext = text.toUpperCase();
     setText(newtext)
     prop.showAlert("converted to Upper Case","success")
  }
  
  const handlelOCase = ()=>{
      let newtext = text.toLowerCase();
     setText(newtext)
     prop.showAlert("converted to Lower Case","success")
  }
  
  const delText = ()=>{
   
     setText("")
     prop.showAlert("all text is Deleted","warning")
  }
  
  
  
  const onChange = (event)=>{
     
      setText(event.target.value)
  }
  
  function toSentenceCase(){
  let newtext = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);

  
    setText(newtext)
    prop.showAlert("converted to Sentance Case","success")
  }




  function handleCopy() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    
    prop.showAlert(`Copied (${copyText.value})`,"success")
  }


  
  
  
  
    return (
      <>
   
  <div className="container mb-3" style={{color :prop.mode === "dark" ? "white" : "black"}}>
    <label for="exampleFormControlTextarea1" className="form-label"><h1>{prop.heading}</h1></label>
    <textarea  className="form-control" id="myInput" value={text} style={{backgroundColor : prop.mode === "dark" ? "#949ba2" : "white",
     color :prop.mode === "dark" ? "white" : "black"}} onChange={onChange} rows="8" placeholder='Enter Text Here...' ></textarea>
    <br/>
    <button className='btn btn-primary mx-2 my-1' onClick={handleUpCase}>Transform Uppercase</button>
    <button className='btn btn-primary mx-2 my-1' onClick={handlelOCase}>Transform Lowercase</button>
    <button className='btn btn-danger mx-2 my-1' onClick={delText}>Delete All Text</button>
    <button className='btn btn-success mx-2 my-1' onClick={toSentenceCase}>Transform Sentance Case</button>
    <button className='btn btn-secondary mx-2 my-1' onClick={handleCopy}>Copy text</button>
    
    
   
  
    
  </div>
  <div className='container my-3'  style={{color :prop.mode === "dark" ? "white" : "black"}}>
    <h1>
      Your Text Summary
    </h1>
    {/* <p>{(text.split(" ").length)-1} words and {text.length} charcters</p> */}
    <p>{utilBug(text)} words and {text.length} charcters</p>
    <p>{(0.008 * text.split(" ").length)-0.008} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
      </>
    )
  }
  
  
  export default TextArea;











