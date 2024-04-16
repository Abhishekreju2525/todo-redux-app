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
        }
    }
    

});
export const {addTask} = todoSlice.actions
export default todoSlice.reducer