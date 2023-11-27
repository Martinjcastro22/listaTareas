import randomUUID from 'crypto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Input from './components/Input.jsx';
import TaskList from './components/TaskList.jsx';
import { useState } from 'react';
function App() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isComplited: false
    };

    setTareas([...tareas, newTask]);
    console.log(tareas);
  };
  

  return (
    <div className= "container ">
      <div>
      <h1>Lista de Tareas</h1>
      <Input onAddTask={(description) => agregarTarea(description)} /> 
      <TaskList tareas={tareas} />
      </div>
      
    </div>
  )
}

export default App
