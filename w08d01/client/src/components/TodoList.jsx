import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  console.log(props);

  const mappedTasks = props.tasks.map((task) => {
    return <TodoListItem task={task} />;
  });

  return (
    <div>
      <h2>Todo List</h2>

      { mappedTasks }
    </div>
  );
};

export default TodoList;
