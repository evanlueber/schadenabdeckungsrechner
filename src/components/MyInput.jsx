import React from "react"

const MyInput = ({title, hoverText, value, onChange, step, setStep, vsWert, setActive}) => {

  const toNumber = (value) => {
    if (value === "") {
      value = 0;
    }

    const numericInput = value.toString().replace(/[^0-9.]/g, "");
    return parseFloat(numericInput);
  };
  
  const toOutString = (value) => {
    let numericInput = value.toString().replace(/[^0-9.]/g, "");
    const [integerPart, decimalPart] = numericInput.split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "'"
    );
    const formattedInput =
      decimalPart !== undefined
        ? `${formattedIntegerPart}.${decimalPart}`
        : formattedIntegerPart;
  
    return formattedInput;
  };
  
  

    return (
        <>
            <h2 className='inputTitle'>Geben Sie ihre/n <span id="title">{title}<span id="descriptionTitle">{hoverText}</span></span> an</h2>
            <input
              type="text"
              value={toOutString(value)}
              onChange={($event) => onChange(toNumber($event.target.value))}
              onFocus={($event) => toNumber($event.target.value)}
              onBlur={($event) => toOutString($event.target.value)}
              className="input"
            />
            <div className="backNext">
              {step >= 2 && step < 4 ?
                  <button id='back' onClick={()=>setStep(step-1)}>Back</button>
                :
                  ""
              }
              {step === 2?
                  <button id="ermittelnButton" onClick={() => setActive(true)}>Wert ermitteln</button>
                :
                ""
              }
              {step < 4 ?
                <button id='next' type="submit" onClick={()=>{
                  if (value ==="0" ) {
                    alert("Geben Sie einen Wert in das Inputfeld ein")
                  } 
                  else if ( title === "Schaden" && value > vsWert || value === 0) {
                    alert("Der Schaden darf nicht höher als der Versicherungswert sein")
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