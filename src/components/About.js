import React, { useState } from 'react'

export default function About(props) {

  // const[myStyle,setMyStyle] = useState( //state variable
  // {// An object
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  let myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'black':'white',
  }




  
  return (
    <div classNameName="container" style={myStyle}>
      <h1 classNameName="my-3">About Us </h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button "  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" classNameName="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        Text analysis, also known as text mining or
           textual data processing, involves examining written content
            to derive meaningful insights. This can include finding word 
            frequencies, identifying patterns, detecting sentiment, or 
    </div>
  </div>
</div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
      Open_source
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed  "  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
      Convenience: No installation is required; simply use your browser.
Compatibility: Works on all devices, including PCs, smartphones, and tablets.
Free and Open Access: Most browser-based tools are free to use for basic features.
Customizable: Users can tailor the analysis to their specific needs.
</div>
    </div>
  </div>
</div>
</div>
  )
}
