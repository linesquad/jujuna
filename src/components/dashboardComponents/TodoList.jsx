import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Call Influencers For Barters", completed: true },
    { id: 2, text: "Meetin New Couriers", completed: false },
    { id: 3, text: "Meeting Restaurant’s Owners", completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="bg-white border-[3px] border-purple-300 rounded-xl p-4 h-full">
      <h2 className="mb-4">To Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-3">
            <span>
              {task.id}. {task.text}
            </span>
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className={`w-6 h-6 rounded-full border-2 ${
                task.completed
                  ? "border-purple-300 bg-purple-100 flex items-center justify-center"
                  : "border-purple-300"
              }`}
            >
              {task.completed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
