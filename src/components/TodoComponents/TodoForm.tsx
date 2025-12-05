interface TodoFormProps {
  todoItem: string;
  handleChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addNewTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClear: () => void;
}

function TodoForm(props: TodoFormProps) {
  return (
    <form onSubmit={props.addNewTodo}>
      <input
        className="input"
        value={props.todoItem}
        type="text"
        name="todoItem"
        placeholder="Todo"
        onChange={props.handleChanges}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={props.handleClear}>
        Clear Completed
      </button>
    </form>
  );
}

export default TodoForm;
