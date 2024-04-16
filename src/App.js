import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTask, deleteTask } from "./store/todoSlice";
import { useForm } from "react-hook-form";

function App() {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function handleAddTodo(data) {
    data.status = false;
    dispatch(addTask(data));
    

    console.log(data);
    reset();
  }
  return (
    <div className="App">
      <div className="w-[80%]">
        <form
          action=""
          onSubmit={handleSubmit(handleAddTodo)}
          className="TodoContainer"
        >
          <h1 className="text-4xl font-medium text-center pt-12 text-white">
            To-do
          </h1>
          <div className="inputRow">
            <input
              placeholder="Add a new item"
              className="mt-8 border-0 rounded-full p-3 w-[80%] h-[60px] flex mr-0 justify-start mx-auto"
              {...register("todoItem", { required: true })}
            />
            {/* {errors.username && <span>Todo item required</span>} */}

            <div className="addbt text-3xl addBtn1  addBtn rounded-full mt-8 p-3 mr-auto text-center  font-bold">
              <input className=" text-4xl mb-2 " type="submit" value="+" />
            </div>
          </div>
        </form>
      </div>
      <div>
        {/* <input type="text" onChange={handleChange} /> */}
        <button
          onClick={() => {
            dispatch(addTask("new task"));
          }}
          className="p-2"
        >
          Add
        </button>
      </div>
      <div>
        {data.todo.map((item, index) => {
          return (
            <div className="flex gap-2 p-5">
              {item.todoItem}{" "}
              <button
                onClick={() => {
                  dispatch(deleteTask(index));
                }}
                className="p-2 bg-red-500"
              >
                Delete
              </button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
