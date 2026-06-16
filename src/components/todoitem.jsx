function TodoItem({
  item,
  index,
  deleteTask,
  editTask,
  toggleComplete,
}) {
  return (
    <div className="todo-item">
      <div className="left-side">
        <span className="number">
          {index + 1}.
        </span>

        <span
          className={
            item.completed
              ? "task-text completed"
              : "task-text"
          }
        >
          {item.text}
        </span>
      </div>

      <div className="task-actions">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() =>
            toggleComplete(index)
          }
        />

        <button
          className="edit-btn"
          onClick={() => editTask(index)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(index)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;