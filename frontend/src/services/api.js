import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchTasks = async () => {
  try {
    return await API.get("/tasks");
  } catch (err) {
    throw err.response?.data?.error || "Failed to fetch tasks";
  }
};

export const createTask = async (data) => {
  try {
    return await API.post("/tasks", data);
  } catch (err) {
    throw err.response?.data?.error || "Failed to create task";
  }
};

export const updateTask = async (id) => {
  try {
    return await API.put(`/tasks/${id}`);
  } catch (err) {
    throw err.response?.data?.error || "Failed to update task";
  }
};