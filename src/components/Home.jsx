import React, { useState, useEffect } from "react";
import home from "./home.css";
import Task from "./Task.jsx";

function Home() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [tittle, setTittle] = useState("");

  const addTask = () => {
    // e.preventDefault();
    if (tittle !== "") {
      setTasks([tittle, ...tasks]);
      setTittle("");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // aa
  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <>
      <body>
        <div className="container">
          <h1>Todo List📄</h1>
          {/* <form onSubmit={addTask}> */}
          <div className="box">
            <input
              type="text"
              placeholder="Add task"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            ></input>
            <button onClick={addTask}>Add</button>
            {tasks.map((task, index) => (
              <Task
                key={index}
                tittle={task}
                onDelete={(task) => {
                  handleDelete(task);
                }}
              />
            ))}
          </div>
          {/* </form> */}
        </div>
      </body>
    </>
  );
}

export default Home;
