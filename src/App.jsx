import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyInput from './components/MyInput';
import {FaRegWindowClose} from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md'

function App() {
 const [vsSumme, setVsSumme] = useState("0")
 const [vsWert, setVsWert] = useState("0")
 const [schaden, setSchaden] = useState("0")
 const [step, setStep] = useState(1)
 const [active, setActive] = useState(false)
 const [items, setItems] = useState([{gegenstand: "", wert: ""}])

 function checkForDuplicates(arr) {
  const hasDuplicates = arr.filter((item, index) => arr.findIndex(obj => obj.gegenstand === item.gegenstand && obj.wert === item.wert) !== index)
  return hasDuplicates.length > 0;
}

const toNumber = (value) => {
    if (value === "") {
      value = 0;
    }

    const numericInput = value.toString().replace(/[^0-9.]/g, "");
    return parseFloat(numericInput);
  };

 function addInputs() {
  setItems((oldArr) => {
    const result = [...oldArr]
    result.push({
      gegenstand:"",
      wert: ""
    })
    return result
  })
 }

 function sumUpAndSelect() {
  setVsWert("0")
  items.forEach((item)=> {
    setVsWert((wert)=> {
      let resultat = parseFloat(wert);
      resultat += parseFloat(item.wert.toString());
      return resultat;
    })
  });
 }

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
          <div className='inputDiv'>
            {
              items.map((item, index)=> {
                const setGegenstand = (e) => {
                    setItems((prevArr) => {
                    const result = [...prevArr];
                    result[index].gegenstand = e.target.value;
                    return result;
                  });
                };
                  
                const setWert = (e) => {
                  setItems((prevArr) => {
                    const result = [...prevArr];
                    result[index].wert = e;
                    return result;
                  });

                };

                return (
                  <div className='fullAddedItem'>
                    <input className="popUpInput" type="text" placeholder='Gegenstand...' value={item.gegenstand} onChange={(e) => setGegenstand(e)}/>
                    <input 
                      className="popUpInput" 
                      type="text" placeholder='Wert...' 
                      value={toOutString(item.wert)} 
                      onChange={($event) => setWert(toNumber($event.target.value))}
                      onFocus={($event) => toNumber($event.target.value)}
                      onBlur={($event) => toOutString($event.target.value)}
                    />
                    <button className='delete'
                      onClick={() => {
                        setItems((prevArr) => {
                          const result = [...prevArr];
                          const newArr = result.filter(
                            (e, i) => e !== item && index != i
                          );
                          return newArr;
                        });
                     }}>
                      <MdDeleteOutline id='deleteIcon' size={40}/>
                    </button>
                  </div>
                )
              })
            }
          </div>
          <button 
            id='close' 
            onClick={() => {
              setActive(false)
              setVsWert("0")
              setItems([{gegenstand: "", wert: ""}]);
            }}>
            <FaRegWindowClose 
              id="closeIcon" 
              size={40}
            />
          </button>      
          <button id='add' onClick={addInputs}>
            +
          </button>
          <button id='select' onClick={() => {
            let check = checkForDuplicates(items)
              if (check) {
                alert("Versichern Sie sich, dass keine Duplikate vorhanden sind oder bennenen Sie den Gegenstand um, um Verwirrung zu vermeiden")
              }
              else {
                setActive(false);
                sumUpAndSelect();
              }     
            }}>
            Übernehmen
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
                    <p className='vsWarnung'>WARNUNG: Sie sind überversichert!</p>
                  </>
                  :
                  vsSumme < vsWert ?
                  <>
                    <p className='vsWarnung'>WARNUNG: Sie sind unterversichert!</p>
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