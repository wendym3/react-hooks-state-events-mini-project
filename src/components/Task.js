import React from 'react';

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* Add onClick event handler for the delete button */}
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;