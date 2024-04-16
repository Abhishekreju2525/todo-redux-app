import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, data) {
      state.todo = [...state.todo, data.payload];
      console.log(state.todo);
    },
    deleteTask(state, data) {
      state.todo = state.todo.filter((element, i) => i !== data.payload);
      console.log(data.payload);
    },
    changeStatus(state, action) {
       
        const updatedTodos = state.todo.map((item) => {
            if (action.payload.todoItem === item.todoItem) {
              return { ...item, status: !item.status };
            }
            return item;
          });
          state.todo=updatedTodos
          console.log(state.todo);
      },
  },
});
export const { addTask, deleteTask, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
