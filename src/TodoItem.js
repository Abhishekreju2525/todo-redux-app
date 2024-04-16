import React from "react";
import "./css/todo.css";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTask } from "./store/todoSlice";

function TodoItem({ Item, index }) {
  const dispatch = useDispatch();
  //   console.log(Item);
  console.log("Item" + Item);
  return (
    <div className="TodoItem">
      <div>
        {index + 1}. &nbsp;
        {Item.todoItem}
      </div>
      <button
        className={`w-[200px] ${!Item.status ? 'bg-green-500' : 'bg-red-500'} rounded-xl`}
        onClick={() => {
          dispatch(changeStatus(Item));
        }}
      >
        {Item.status ? "Undo" : "Mark as Done"}
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(deleteTask(index));
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
