import React, { useState } from 'react'

function Counter() {
   var [c,setC] = useState(0)
   var [d,setD] = useState(0)
    function dec(x,y){
    setC(c-x);
    setD(d-y)
    }
    function inc(x,y){
        setC(c+x)
        setD(d+y)
    }
  return (
    <div className='mybox' >
       <h1> Counter</h1>
       <button onClick={()=>{dec(1,0)}}>-1</button>
       <span id='d1'>{c}</span>
       <button onClick={()=>{inc(1,0)}}>+1</button>
       <br /> 
       <br />
       <br />
       <button onClick={()=>{dec(0,100)}}>-100</button>
       <span id="d1">{d}</span>
       <button onClick={()=>{inc(0,100)}}>+100</button>

        </div>
  )
}

export default Counter