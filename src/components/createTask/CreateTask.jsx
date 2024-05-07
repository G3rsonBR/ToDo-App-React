import { useState } from "react";
import "./style.css";

export function CreateTask({ handleAddTask }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const id = "id" + Math.random().toString(16).slice(2)

    setFormData(() => ({ id, [name]: value, isDone: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(formData);
    setFormData({})
  };

  return (
    <div className="createTaskDiv">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="Digite a tarefa..."
            value={formData.task || ""}
            onChange={handleChange}
            required
          />

        <button className="btn btnSubmit" type="submit">
          Criar <span>+</span>
        </button>
      </form>
    </div>
  );
}
