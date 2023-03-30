import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyInput from './components/MyInput';
import {FaRegWindowClose} from 'react-icons/fa'

function App() {
 const [vsSumme, setVsSumme] = useState("0")
 const [vsWert, setVsWert] = useState("0")
 const [schaden, setSchaden] = useState("0")
 const [step, setStep] = useState(1)
 const [active, setActive] = useState(false)


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
    <div className="App">

      <div className={"popUp "+ (active?"active":"")}>
        <div id='popUpContainer'>
          <input type="text" />
          <button id='close' onClick={() => setActive(false)}>
            <FaRegWindowClose size={40}/>
          </button>
        </div>
      </div>
      <header className="App-header">
        <div id="container">
          <h1>Schadensabdeckung</h1>
          <div className="progress-container">
            <div className='progress'>
              <p className={step === 1 ? "current" : ""}>1</p>
              <p className={step === 2 ? "current" : ""}>2</p>
              <p className={step === 3 ? "current" : ""}>3</p>
              <p className={step === 4 ? "current last" : "last"}>4</p>
            </div>
          </div>
            {
            step === 1 ?
              <div className='inputKasten'>
                <MyInput title="Versicherungssumme" hoverText="Die Versicherungssumme wurde mit ihrem Versicherungsberater abgemacht. Sie beschreibt den abgemachten Wert ihres Hausrates." value={vsSumme} onChange={setVsSumme} step={step} setStep={setStep}/>
              </div>
              :
              step === 2?
              <div className='inputKasten'>
                <MyInput title="Versicherungswert" hoverText="Der Versicherungswert beschreibt den momentanen Wert ihres Hausrates. Er kann von der Versicherungsumme abweichen." value={vsWert} onChange={setVsWert} step={step} setStep={setStep} setActive={setActive}/>
              </div>
              :
              step === 3 ?
              <div className='inputKasten'>
                <MyInput title="Schaden" hoverText="Der Schaden ist der Wert, der gebraucht wird, um die beschädigte Einrichtung zu ersetzen." value={schaden} onChange={setSchaden} step={step} setStep={setStep} vsWert={vsWert} />
              </div>
              :
              <div id='lastSide'>
                <p>Ihre Versicherung wird <b>{Math.round((vsSumme / vsWert) * 100 * 100) / 100 >= 100 ? 100 : Math.round((vsSumme / vsWert) * 100 * 100) / 100}%</b> des Schadens übernehmen</p>
                <p>Ihre Versicherung wird <b>{Math.round((vsSumme / vsWert) * schaden * 100) /100 >= schaden ? schaden : Math.round((vsSumme / vsWert) * schaden * 100) /100} CHF</b> übernehmen</p>
                
                {
                  vsSumme > vsWert ?
                  <>
                    <p className='vsWarnung'>Sie sind überversichert</p>
                  </>
                  :
                  vsSumme < vsWert ?
                  <>
                    <p className='vsWarnung'>Sie sind unterversichert</p>
                  </>
                  :
                  ""
                }
              </div>
            }
          {step === 4 ?
            <button id='home' onClick={()=>{setStep(1);setVsSumme("");setVsWert("");setSchaden("")}}>Home</button>
          :
            ""
          }

        </div>

        <div id='werteContainer'>
          <p>Versicherungssumme: <br /> <span className='werteVariables'><b>{toOutString(vsSumme)}</b> CHF</span></p> 
          <br />
          <p>Versicherungswert: <br /><span className='werteVariables'><b>{toOutString(vsWert)}</b> CHF</span></p>
          <br />
          <p>Schaden: <br /><span className='werteVariables'><b>{toOutString(schaden)}</b> CHF</span></p> 
        </div>          
      </header>
    </div>
  );
}

export default App;