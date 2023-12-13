import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 todolist: ["clean car","paybills","get BMW"]
}

export const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
        addTodo:(state,action)=>{
            state.todolist.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todolist.splice(action.payload,1)
        }
  },
})


export const { addTodo,deleteTodo } = todoSlice.actions

export default todoSlice.reducer