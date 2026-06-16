import { useState } from "react";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import LocalStorage from "./hooks/LocalStorage";

function App() {
  const [tasks, setTasks] = LocalStorage(
    "tasks",
    []
  );

  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] =
    useState(null);

  const addTask = () => {
    if (!task.trim()) return;

    if (editIndex !== null) {
      const updated = [...tasks];

      updated[editIndex].text = task;

      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([
        ...tasks,
        {
          text: task,
          completed: false,
        },
      ]);
    }

    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(
      tasks.filter((_, i) => i !== index)
    );
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];

    updated[index].completed =
      !updated[index].completed;

    setTasks(updated);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <TodoForm
        task={task}
        setTask={setTask}
        addTask={addTask}
        editIndex={editIndex}
      />

      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;