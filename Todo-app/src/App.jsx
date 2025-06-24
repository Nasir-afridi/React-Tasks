import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    setTodo([...todo, task]); // ✅ FIXED here (array inside [])
    setTask("");
  }

  function deleteTask(index) {
    const updated = todo.filter((_, i) => i !== index);
    setTodo(updated);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">📝 Todo App</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={task}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todo.map((todos, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todos}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
