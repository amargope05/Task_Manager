
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let tasks = []; // In-memory DB

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST create task
router.post("/", (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Task title is required" });
    }

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      status: "Pending",
    };

    tasks.push(newTask);

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PUT update task

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;

    let found = false;

    tasks = tasks.map((task) => {
      if (task.id === id) {
        found = true;
        return { ...task, status: "Completed" };
      }
      return task;
    });

    if (!found) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task updated successfully" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;