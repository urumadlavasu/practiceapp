import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/reducers/actions'

function Todolist(props) {
   var[newtodo,setNewtodo] = useState("")
  return (
    <div className='mybox' >
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
        <button onClick={()=>{props.dispatch(addTodo(newtodo))}}>Add todo</button>
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