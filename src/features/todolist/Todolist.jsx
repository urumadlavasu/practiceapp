import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'

function Todolist() {
  var [newtodo,setNewtodo] = useState("")
  var {todolist} = useSelector(store=>store.t)
  console.log(todolist)
 var dispatch = useDispatch()
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
        <button onClick={()=>{dispatch(addTodo(newtodo))}}>Add todo</button>
        <ul>
            {
                todolist.map((todo,i)=>{
                    return <li>
                        {todo}
                        <button onClick={()=>{dispatch(deleteTodo(i))}} >Delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist