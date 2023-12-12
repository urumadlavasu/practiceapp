import React, { useState } from 'react'
import { connect } from 'react-redux'

function Todolist(props) {
   var[newtodo,setNewtodo] = useState("")
  return (
    <div className='mybox' >
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
        <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:newtodo})}}>Add todo</button>
        <ul>
            {
                props.t.todolist.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default connect(function (store){return store}) (Todolist)