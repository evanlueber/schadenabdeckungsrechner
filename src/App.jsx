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
                <MyInput title="Versicherungssumme" hoverText="Die Versicherungssumme wurde mit ihrem Versicherungsberater abgemacht. Sie beschreibt den abgemachten Wert ihres Hausrates." value={vsSumme} onChange={(e) => setVsSumme(e.target.value)} step={step} setStep={setStep}/>
              </>
              :
              step === 2?
              <>
                <MyInput title="Versicherungswert" hoverText="Der Versicherungswert beschreibt den momentanen Wert ihres Hausrates. Er kann von der Versicherungsumme abweichen." value={vsWert} onChange={(e) => setVsWert(e.target.value)} step={step} setStep={setStep} />
              </>
              :
              step === 3 ?
              <>
                <MyInput title="Schaden" hoverText="Der Schaden ist der Wert, der gebraucht wird, um die beschädigte Einrichtung zu ersetzen." value={schaden} onChange={(e) => setSchaden(e.target.value)} step={step} setStep={setStep}/>
              </>
              :
              <div id='lastSide'>
                <p>Ihre Versicherung wird {Math.round((vsSumme / vsWert) * 100 * 100) / 100 >= 100 ? 100 : Math.round((vsSumme / vsWert) * 100 * 100) / 100}% des Schadens übernehmen</p>
                <p>Ihre Versicherung wird {Math.round((vsSumme / vsWert) * schaden * 100) /100 >= schaden ? schaden : Math.round((vsSumme / vsWert) * schaden * 100) /100}CHF übernehmen</p>
                
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
          </div>
          {step === 4 ?
            <button id='home' onClick={()=>{setStep(1);setVsSumme("");setVsWert("")}}>Home</button>
          :
            ""
          }
        </div>

        <div id='werteContainer'>
          <p>Versicherungssumme: <br /> <span className='werteVariables'>{vsSumme}</span>CHF</p> 
          <br />
          <p>Versicherungswert: <br /><span className='werteVariables'>{vsWert}</span>CHF</p>
          <br />
          <p>Schaden: <br /><span className='werteVariables'>{schaden}</span>CHF</p> 
        </div>          
      </header>
    </div>
  );
}

export default App;