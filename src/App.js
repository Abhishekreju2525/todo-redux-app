import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask } from './store/todoSlice';

function App() {
  const data=useSelector((state)=>state.todo)
  const dispatch=useDispatch()
  console.log(data);
  return (
    <div className="App">
     {data.todo.map((item)=> {return <p>{item}</p>})}
     <button onClick={()=>{dispatch(addTask("new task"))}} className='p-2'>Add</button>
    </div>
  );
}

export default App;
