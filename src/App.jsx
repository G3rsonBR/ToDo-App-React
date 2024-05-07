import "./App.css";
import { Task } from "./components/task/Task";
import { useState } from "react";
import { CreateTask } from "./components/createTask/CreateTask";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedData;
  });

  function handleAddTask(newTask) {
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTasks([...tasks, newTask]);
  }

  function handleCheckTask(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        console.log(task)
        return { ...task, isDone: !task.isDone };
      }
      return task
    })

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  function handleRemoveTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  return (
    <>
      <header>
        <h1>ToDo App</h1>
      </header>
      <CreateTask handleAddTask={handleAddTask} />

      {tasks.length == 0 ? (
        <p className="withoutTasks">Você ainda não tem tarefas cadastradas</p>
      ) : (
        <div className="cardContainer">
          {tasks.map((item, index) => {
            return (
              <Task key={index} task={item.task} id={item.id} completed={item.isDone} handleCheckTask={handleCheckTask} handleRemoveTask={handleRemoveTask}/>
            );
          })}
        </div>
      )}
    </>
  );
}
