import React, {useState} from 'react';
import './App.css';

const App = () =>{
  const[inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("")

  const handleInputChange = (e) =>{
    setInputVal(e.target.value);
    console.log(inputVal)
  }
  const Emmanuel =  ["john", "shola", "bimbo"];
  const Mtn = ["07025", "07026", "0703", "0706", "0803", "0806", "0810", "0813", "0816", "0814", "0906", "0903"]
  const Etisalat = ["0809", "0817", "0818", "0909", "0908"];
  const Glo = ["0705", "0805", "0811", "0807","0815", "0905", "0915"];
  const Airtel = ["0708", "0802", "0808", "0812", "0701", "0901", "0902"];
  const Starcomms = ["07028", "07029", "0819"]

  console.log(Emmanuel.map((emma,index)=> emma[index]))
  const handleValidity = () =>{
    if(Mtn.includes(inputVal.slice(0, 4)) || Mtn.includes(inputVal.slice(0,5))){
      alert("this is an mtn number");
      setResult(`MTN. ${inputVal} is an MTN number`)
    }
    if(Etisalat.includes(inputVal.slice(0, 4))){
      alert("this is an Etisalat number");
      setResult(`9mobile. ${inputVal} is an 9mobile number`)
    }
    if(Glo.includes(inputVal.slice(0, 4))){
      alert("this is a Glo number");
      setResult(`Glo. ${inputVal} belongs to the Glo network`)
    }
    if(Airtel.includes(inputVal.slice(0, 4))){
      alert("this is an Airtel number");
      setResult(`Airtel. ${inputVal} belongs to the Airtel network`)
    }
    if(Starcomms.includes(inputVal.slice(0,4)) || Starcomms.includes(inputVal.slice(0, 5))){
      alert("this is a starcomms number");
      setResult(`Starcommms. ${inputVal} belongs to the Starcomms network`)
    }
    

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
      <p className="result">{result}</p>
    </div>
  );
}
export default App;