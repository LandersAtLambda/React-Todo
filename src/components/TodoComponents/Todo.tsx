import "./Todo.css";

interface TodoProps {
  todo: {
    id: number;
    task: string;
    completed: boolean;
    date: string;
  };
  handleCheckbox: (id: number) => void;
}

function Todo(props: TodoProps) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        name={String(props.todo.id)}
        onClick={() => props.handleCheckbox(props.todo.id)}
      />
      <div className={`todoLine ${props.todo.completed ? "completed" : ""}`}>
        <span className="todoItem">{props.todo.task}</span>
        <span className="timestamp">{props.todo.date}</span>
      </div>
    </div>
  );
}

export default Todo;
