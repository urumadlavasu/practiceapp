import React, { useState } from "react";
function CounterC(){
   var[c,setC] = useState(0)
   var[d,setD] = useState(0)
    function inc(x){
        setC(c+x)
    }
    function dec(x){
        setD(d-x)
    }
    return(
        <div className="mybox" >
            <h1>CounterC</h1>
            <span id="d1" >Team A : {c}</span> <br /> <br />
            <button onClick={()=>{inc(1)}}>X</button> &nbsp; &nbsp; &nbsp;
            <button onClick={()=>{inc(1)}}>Y</button> 
            <br />
            <br /> 
            <br /> 
            <span id="d1">Team B : {d}</span> <br /> <br />
            <button onClick={()=>{dec(1)}}>X</button>  &nbsp; &nbsp; &nbsp;
            <button onClick={()=>{dec(1)}}>Y</button>

        </div>
    )
}
export default CounterC