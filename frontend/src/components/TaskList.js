import React from "react";

const TaskList = ({ tasks, onComplete, loading }) => {
    if (loading) return <p>Loading tasks...</p>;

    if (tasks.length === 0) return <p>No tasks available</p>;

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <div>
                        <strong>{task.title}</strong>
                        <p>Status: {task.status}</p>
                    </div>

                    {task.status === "Pending" && (
                        <button
                            type="button" 
                            onClick={() => onComplete(task.id)}
                        >
                            Mark Complete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TaskList;