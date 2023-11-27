import { FormEvent, useState , useRef} from "react";
import "./App.css";
import "bootswatch/dist/lumen/bootstrap.min.css";

type FormElement = FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  //Definimos el estado
  const [task, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTasks(task);
    setNewTask("");
    taskInput.current?.focus();
  };

  const addTasks = (name: string) => {
    const newTask: ITask = { name, done: false };
    const newTasks: ITask[] = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("tareas", JSON.stringify(newTasks));
  };

  const toggleDoneTask = (i: number) => {
    const newTask: ITask[] = [...tasks];
    newTask[i].done = !newTask[i].done;
    setTasks(newTask);
  };

  const removeTask = (i: number) => {
    const newTasks:ITask[] = [...tasks]
    newTasks.splice(i,1)
    setTasks(newTasks)
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="card">
          <div className="card-body pt-2 w-150">
            <h2>Listado de Tareas :D</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input
                className="form-control w-200"
                type="text"
                onChange={(e) => setNewTask(e.target.value)}
                value={task}
                autoFocus
                placeholder="Ingrese una nueva tarea"
                ref={taskInput}
              />
              <button className="btn btn-primary mt-4">Agregar Tarea</button>
            </form>
          </div>
        </div>
      </div>
      {tasks.map((t: ITask, i: number) => (
        <div key={i} className="card2 p-2 mt-2 w-100">
          <li className="list">
            <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
              {t.name}
            </h2>
          </li>
          <button
            className="btn btn-secondary"
            onClick={() => toggleDoneTask(i)}
          >
            {t.done ? "✓" : "X"}
          </button>
          <button className="btn btn-danger" onClick={() => removeTask(i)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
