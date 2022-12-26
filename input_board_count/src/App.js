import './App.css';
import { useState } from 'react'
import Board from './components/Board';
import Count from './components/Count';
import Input from "./components/Input"

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState([]);


  function changeCount() {
    setCount(count + 1);
  }

  return (
    <>
      <Count count={count} />
      <Input setTask={setTask} task={task} setCount={setCount} changeCount={changeCount} />
      <Board task={task} />
    </>
  );
}

export default App;
