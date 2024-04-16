import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTask, deleteTask, changeStatus } from "./store/todoSlice";
import { useForm } from "react-hook-form";
import TodoItem from "./TodoItem";

function App() {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // console.log(data);
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
      <div className="w-[80%] mx-auto">
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

      
        <div className="TaskContainer">
          <h2 className="text-3xl ">Active tasks</h2>
          <hr style={{ width: "70px" }} /> <br />
          {data.todo.length > 0 ? (
            data.todo.map((todo, index) => {
              return <TodoItem Item={todo} key={todo.todoItem} index={index} />;
            })
          ) : (
            <p className="text-gray-700 text-md">No tasks found.</p>
          )}
        </div>
      </div>
     
    </div>
  );
}

export default App;
