import React, {useState} from 'react';
import './App.css';

const App = () =>{

  const showResult = {
    display: 'block',
     marginLeft: '-.5rem',
    animation: '2s forward infinite',
    transition: 'all 3s ease',
    
  }

  const[inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState()
  
  // const hideResultFunc = () =>{
  //   return hideResult 
  // }
  // useEffect(()=>{
  //   setDisplay(hideResultFunc);
  // }, [hideResultFunc]);

  
  const handleInputChange = (e) =>{
    setInputVal(e.target.value);
    
  }
  const Mtn = ["07025", "07026", "0703", "0706", "0803", "0806", "0810", "0813", "0816", "0814", "0906", "0903"]
  const Etisalat = ["0809", "0817", "0818", "0909", "0908"];
  const Glo = ["0705", "0805", "0811", "0807","0815", "0905", "0915"];
  const Airtel = ["0708", "0802", "0808", "0812", "0701", "0901", "0902"];
  const Starcomms = ["07028", "07029", "0819"]
 

  const handleValidity = () =>{
    //show the result by updating the state
    setDisplay(showResult);

    if(Mtn.includes(inputVal.slice(0, 4)) || Mtn.includes(inputVal.slice(0,5))){
      setResult(`${inputVal} is a MTN phone number`)
    }
    else if(Etisalat.includes(inputVal.slice(0, 4))){
      setResult(`9mobile. ${inputVal} is a 9mobile phone number`)
    }
    else if(Glo.includes(inputVal.slice(0, 4))){
      setResult(`Glo. ${inputVal} belongs to the Glo network`)
    }
    else if(Airtel.includes(inputVal.slice(0, 4))){
      setResult(`Airtel. ${inputVal} belongs to the Airtel network`)
    }
    else if(Starcomms.includes(inputVal.slice(0,4)) || Starcomms.includes(inputVal.slice(0, 5))){
      setResult(`Starcommms. ${inputVal} belongs to the Starcomms network`)
    }
    
    else{
      setResult(`
      "${inputVal}" does not belong to Nigeria or you have inputed a wrong number`)
    }
    setInputVal('');
    
  }
  return(
    <div className="app">
      <header>
        <h1>netl<span className="i">i</span><span className="get">get</span></h1>
        <p className="info">
          In a simple search, get the network provider of any phone number in Nigeria.
        </p>
      </header>

      <div className="search">
        <p className="explain">input number without +234 (e.g, 08121122112)</p>
        <input type="text" value={inputVal} onChange={handleInputChange}/>
        <button type="button" onClick={handleValidity}>Check</button>
      </div>
      <div className="result-container" style={display}>
      <p className="result">{result}</p>
      </div>
      <div className="footer-container">
        <p className="footer">loyaltysamuel001@gmail.com</p>
      </div>
    </div>
  );
}
export default App;