import TodoItem from "./TodoItem";

function TodoList({
  tasks,
  deleteTask,
  editTask,
  toggleComplete,
}) {
  return (
    <div className="todo-list">
      {tasks.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;