import React, { useState } from "react";

const TaskInput = ({ onAdd, loading }) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const handleAdd = () => {
        if (!title.trim()) {
            setError("Task title is required");
            return;
        }

        setError("");
        onAdd(title);
        setTitle("");
    };

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    if (e.target.value.trim()) setError("");
                }}
            />

            <button
                type="button"   
                onClick={handleAdd}
                disabled={!title.trim() || loading}
            >
                {loading ? "Adding..." : "Add Task"}
            </button>

            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TaskInput;