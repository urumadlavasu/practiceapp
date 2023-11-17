import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function dombased(){
    var x = document.getElementById("inpt1").value;
    document.getElementById("dh1").innerHTML +=x
  }
  var[y,setY]=useState("")
  function reactbasedhandling(v){
      setY(v)
  }
  return (
    <div className="App">
     <h1>this is form handling in react</h1>
     <hr />
     <label htmlFor="">this is DOM based form Element</label>
     <input type="text" id="inpt1" onKeyUp={()=>{dombased()}} />
     <h1 id="dh1">displayhere :</h1>

     <hr />

     <label htmlFor="">This is Reactbasedform Element</label>
     <input type="text" id="inpt2" onKeyUp={(e)=>{reactbasedhandling(e.target.value)}} />
     <h1 id="dh2">{y}</h1>
    </div>
  );
}

export default App;
