import React, { useState, useEffect } from "react";
import home from "./home.css";
import Task from "./Task.jsx";

function Home() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [tittle, setTittle] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (tittle !== "") {
      setTasks([...tasks, tittle]);
      setTittle("");
    }
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };
  return (
    <>
      <div className="container">
        <h1>todo</h1>
        <form onSubmit={addTask}>
          <div className="box">
            <input
              type="text"
              placeholder="Add task"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            ></input>
            <button type="submit">Add</button>
            {tasks.map((task, index) => (
              <Task key={index} tittle={task} onDelete={handleDelete} />
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
