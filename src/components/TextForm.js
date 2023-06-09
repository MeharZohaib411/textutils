import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase case","success");
       
    }

    const handleloclick=()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase","success");
    
 
    }
    const handleclearclick=()=>{
        let newtext =("");
        setText(newtext)
        props.showAlert("data is cleared","success");

    }
    const handlecopy = ()=>{
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("data is copied","success");
    }
    const handleExtraSpaces =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra space is removed","success");
    }
    const handleonchange=(event)=>{
        setText(event.target.value); 
       

    } 
    const [text, setText] = useState(" ");
  return (
    <>
    <div className='container' style={{Color: props.mode==='drak'?'white':'light'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='drak'?'grey':'white'}} id="mybox" rows="8 "></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleupclick}>Convert uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleloclick}>Convert lowercase</button>
<button className='btn btn-primary mx-2' onClick={handlecopy}>copy data</button>
<button className='btn btn-primary mx-2' onClick={handleclearclick}>clear data</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra space</button>
    </div>
    <div className='container my-3' 
    style={{Color: props.mode==='drak'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Prreview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
