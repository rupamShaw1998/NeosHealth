import { useState } from "react";
import { Lists } from "./Lists";
import { TodoInput } from "./TodoInput";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const taskHandler = (data) => {
    const payload = {
      id: (Math.random() * 1000) | 0,
      todo: data,
    };
    setTasks([...tasks, payload]);
  };
  const deleteTodo = (idx) => {
   setTasks(tasks.filter((e)=>{
    return e.id != idx
   }))
  }

  return (
    <>
      <h1 style={{color: "purple"}}>Todo App</h1>
      <TodoInput taskHandler={taskHandler} />
      
        {tasks.map((e) => {
          return <Lists e={e} deleteTodo={deleteTodo} ></Lists>;
        })}
      
    </>
  );
};
