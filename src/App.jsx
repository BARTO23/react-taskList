import TaskForm from "./components/TaskForm"; // Importa el componente TaskForm
import TaskList from "./components/TaskList"; // Importa el componente TaskList
// Importa una lista de tareas predefinidas desde un archivo

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10 bg-zinc-900">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App; // Exporta el componente App para que pueda ser usado en otras partes de la aplicación
