import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todo:[]
}
const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTask(state,data){
            state.todo=[...state.todo,data.payload]
            console.log(state.todo);
        },
        deleteTask(state,data){
            state.todo = state.todo.filter((element, i) => i !== data.payload);
            console.log(data.payload);
        }
    }
    

});
export const {addTask,deleteTask} = todoSlice.actions
export default todoSlice.reducer