import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyInput from './components/MyInput';

function App() {
 const [vsSumme, setVsSumme] = useState("")
 const [vsWert, setVsWert] = useState("")
 const [step, setStep] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
        {
        step === 1 ?
          <div>
            <MyInput title="Geben Sie ihre Versicherungssumme ein" value={vsSumme} onChange={(e) => setVsSumme(e.target.value)} />
            <p>{vsSumme}</p>
          </div>
          : 
          step === 2?
          <div> 
            <MyInput title="Geben Sie ihren Versicherungswert an" value={vsWert} onChange={(e) => setVsWert(e.target.value)} />
            <p>{vsWert}</p>
          </div>
          :
          <div> 
          <p>Ihre Versicherung wird {Math.round((vsSumme / vsWert) * 100 * 100) / 100}% des Schadens übernehmen</p>
          </div>
        }

        {step < 3 ?
          <button onClick={()=>setStep(step+1)}>Next</button>
        :
          ""
        }   

        {step === 3 ?
          <button onClick={()=>{setStep(1);setVsSumme("");setVsWert("")}}>Home</button>
        :
          ""
        }

        {step >= 2 && step < 3 ?
          <button onClick={()=>setStep(step-1)}>Back</button>
        :
          ""
        }
          
      </header>
    </div>
  );
}

export default App;