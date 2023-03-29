import React from "react"

const MyInput = ({title, hoverText, value, onChange, step, setStep}) => {
    return (
        <>
            <h2 className='inputTitle'>Geben Sie ihre/n <span id="title">{title}<span id="descriptionTitle">{hoverText}</span></span> an</h2>
            <input type="number" name="" id="input" value={value} onChange={onChange}/>

            <div className="backNext">
              {step >= 2 && step < 4 ?
                  <button id='back' onClick={()=>setStep(step-1)}>Back</button>
                :
                  ""
                }
                {step < 4 ?
                  <button id='next' onClick={()=>{
                  if (value ==="" ){
                    alert("Geben Sie einen Wert in das Inputfeld ein")
                  }
                  else {
                    setStep(step+1)
                  }
                }}>Next</button>
                :
                  ""
                }
            </div>
        </>
    )
}

export default MyInput;