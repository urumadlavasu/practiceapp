import React, { useState } from 'react'

function CounterE() {
    var [c,setC] = useState(0)
    var [d,setD] = useState(0)
     function inc(x){
         setC(c+x)
     }
     function dec(x){
         setD(d+x)
     }
     function equal(){
        if(c==d){
            document.getElementById("dh").innerHTML = "both are Equal"
        } else{
            document.getElementById("dh").innerHTML = "Not Equal"

        }
     }
     function diff(){
        document.getElementById("dh").innerHTML = c-d
        
     }
  return (
    <div className='mybox' >
        <h1>CounterE</h1>
        <span id='d1' >A : {c}</span> <br /> <br />
        <button onClick={()=>{inc(1)}}>1</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(1)}}>2</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(1)}}>3</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(1)}}>4</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(1)}}>5</button> 
        <br />
        <br />
        <span id='d1' >A : {d}</span> <br /> <br />
        <button onClick={()=>{dec(1)}}>1</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(1)}}>2</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(1)}}>3</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(1)}}>4</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(1)}}>5</button>
        <br /> <br />
        <button onClick={()=>{equal()}} >Equal</button> &nbsp;&nbsp;
        <button onClick={()=>{diff()}}>Difference</button> &nbsp;&nbsp;
        <h1 id='dh' ></h1>
    </div>
  )
}

export default CounterE