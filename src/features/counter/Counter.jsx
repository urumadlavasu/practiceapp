import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
   var {value} = useSelector(store=>store.c)
   console.log(value)
  var dispatch = useDispatch()
  return (
    <div className='mybox'>
        <h1>Counter : {value}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Counter