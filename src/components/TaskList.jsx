import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

// Define el componente TaskList que recibe una lista de tareas (tasks) como prop
function TaskList() {
  const { tasks } = useContext(TaskContext);
  // Si no hay tareas, muestra un mensaje
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>; // Devuelve un encabezado indicando que no hay tareas
  }

  // Si hay tareas, las recorre y las muestra
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList; // Exporta el componente para poder usarlo en otras partes de la aplicación
