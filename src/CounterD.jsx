import React, { useState } from 'react'

function CounterD() {
   var [c,setC] = useState(0)
   var [d,setD] = useState(0)
    function inc(x){
        setC(c+x)
    }
    function dec(x){
        setD(d-x)
    }
  return (
    <div className='mybox' >
        <h1> CounterD </h1>
        <span id='d1' >A : {c}</span> <br /> <br />
        <button onClick={()=>{inc(1)}}>1</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(2)}}>2</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(3)}}>3</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(4)}}>4</button> &nbsp;&nbsp;
        <button onClick={()=>{inc(5)}}>5</button>
        <br />
        <br />
        <span id='d1' >A : {d}</span> <br /> <br />
        <button onClick={()=>{dec(1)}}>1</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(2)}}>2</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(3)}}>3</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(4)}}>4</button> &nbsp;&nbsp;
        <button onClick={()=>{dec(5)}}>5</button>
    </div>
  )
}

export default CounterD