import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyInput from './components/MyInput';

function App() {
 const [vsSumme, setVsSumme] = useState("")
 const [vsWert, setVsWert] = useState("")
 const [schaden, setSchaden] = useState("")
 const [step, setStep] = useState(1)
  return (
    <div className="App">

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
          <div id='inputKasten'>
            {
            step === 1 ?
              <>
                <MyInput title="Geben Sie ihre Versicherungssumme ein" value={vsSumme} onChange={(e) => setVsSumme(e.target.value)} step={step} setStep={setStep}/>
              </>
              :
              step === 2?
              <>
                <MyInput title="Geben Sie ihren Versicherungswert an" value={vsWert} onChange={(e) => setVsWert(e.target.value)} step={step} setStep={setStep} />
              </>
              :
              step === 3 ?
              <>
                <MyInput title="Geben Sie ihren Schaden an" value={schaden} onChange={(e) => setSchaden(e.target.value)} step={step} setStep={setStep}/>
              </>
              :
              <>
                <p>Ihre Versicherung wird {Math.round((vsSumme / vsWert) * 100 * 100) / 100 >= 100 ? 100 : Math.round((vsSumme / vsWert) * 100 * 100) / 100}% des Schadens übernehmen</p>
                <p>Ihre Versicherung wird {Math.round((vsSumme / vsWert) * schaden * 100) /100 >= schaden ? schaden : Math.round((vsSumme / vsWert) * schaden * 100) /100}CHF übernehmen</p>
                <p className='werte'>Versicherungssumme: {vsSumme}CHF</p>
                <p className='werte'>Versicherungswert: {vsWert}CHF</p>
                <p className='werte'>Schaden: {schaden}CHF</p>
              </>
            }
          </div>
          {step === 4 ?
            <button id='home' onClick={()=>{setStep(1);setVsSumme("");setVsWert("")}}>Home</button>
          :
            ""
          }
        </div>          
      </header>
    </div>
  );
}

export default App;