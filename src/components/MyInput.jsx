import React from "react"

const MyInput = ({title, value, onChange, step, setStep}) => {
    return (
        <>
            <h2 className='inputTitle'>{title}</h2>
            <input type="text" name="" id="" value={value} onChange={onChange}/>

            {step < 4 ?
            <button onClick={()=>{
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
        </>
    )
}

export default MyInput;