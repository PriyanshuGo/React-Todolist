import React from "react";
import home from "./home.css";

function Task({ tittle, onDelete }) {
  return (
    <div className="tasks">
      <div>
        <span>{tittle}</span>
        <button onClick={() => onDelete(tittle)}> - </button>
      </div>
    </div>
  );
}

export default Task;
