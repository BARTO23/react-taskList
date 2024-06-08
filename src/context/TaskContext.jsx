import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks, // Copia las tareas existentes
      {
        title: task.title, // Nuevo título de la tarea
        id: tasks.length, // Asigna un id basado en el número de tareas existentes
        description: task.description, // Descripción de la nueva tarea
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data); // Inicializa el estado de tasks con los datos importados
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
