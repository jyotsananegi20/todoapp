import React, {FC, ChangeEvent, useState} from 'react'; 
import './App.css';
import TodoTask from './Components/TodoTask';
import {task} from './Types'
const App: FC = () =>{

  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState<task[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name==='task'){
      setTask(event.target.value);
    }else{
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void =>{
    const newTask = { taskName: task, deadline: deadLine}
    setTodoList([...todo, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete:string):void =>{
    setTodoList(todo.filter((task)=> {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
        <div className='header'>
          <div className='inputContainer'>
          <input type="text" placeholder="Task" name='task' value={task} onChange={handleChange} />
          <input type="number" placeholder="Deadline" name='deadLine' value={deadLine} onChange={handleChange} />
          </div>
          <button onClick={addTask}> Add Task</button>
        </div>
        <div className='todoList'>
          {todo.map((task: task, key:number)=> {
            return <TodoTask key={key} task={task} completeTask={completeTask} />
          })}
        </div>
    </div>
  );
}

export default App;
