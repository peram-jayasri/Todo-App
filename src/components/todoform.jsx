function TodoForm({
  task,
  setTask,
  addTask,
  editIndex,
}) {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        {editIndex !== null
          ? "Update"
          : "Add"}
      </button>
    </div>
  );
}

export default TodoForm;