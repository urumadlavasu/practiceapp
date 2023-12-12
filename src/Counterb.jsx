import React, { useState } from "react";
function Counterb(){
     var [c,setC] = useState(0)
    function inc(x){
        setC(c+x)
    }
    return(
    <div className="mybox" >
        <h1>Counterb</h1>
        <span id="d1">{c}</span> <br /> <br />
        <button onClick={()=>{inc(1)}}>+1</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(2)}}>+2</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(3)}}>+3</button>
    </div>
    )
}
export default Counterb