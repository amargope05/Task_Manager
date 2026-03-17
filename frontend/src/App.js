import React, { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {
  fetchTasks,
  createTask,
  updateTask,
} from "./services/api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load tasks
  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const res = await fetchTasks();
        setTasks(res.data);
        localStorage.setItem("tasks", JSON.stringify(res.data));
      } catch (err) {
        setError(err);
        const local = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(local);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  // Add task
  const handleAdd = async (title) => {
    setAdding(true);
    setError("");
    setSuccess("");

    try {
      const res = await createTask({ title });

      const updated = [...tasks, res.data.task];

      setTasks(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));

      setSuccess("Task added successfully");
    } catch (err) {
      setError(err);
    } finally {
      setAdding(false);
    }
  };

  // Complete task
  const handleComplete = async (id) => {
    setError("");
    setSuccess("");

    try {
      await updateTask(id);

      const updated = tasks.map((t) =>
        t.id === id ? { ...t, status: "Completed" } : t
      );

      setTasks(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));

      setSuccess("Task marked as completed");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <TaskInput onAdd={handleAdd} loading={adding} />

      <TaskList
        tasks={tasks}
        onComplete={handleComplete}
        loading={loading}
      />
    </div>
  );
}

export default App;