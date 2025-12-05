import Todo from "./Todo";

interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  date: string;
}

interface TodoListProps {
  todoList: TodoItem[];
  handleCheckbox: (id: number) => void;
}

function TodoList(props: TodoListProps) {
  return (
    <div>
      {props.todoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            handleCheckbox={props.handleCheckbox}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
