import './TodoListItem.scss';

const TodoListItem = (props) => {
  console.log(props);

  return (
    <div className="todo-item">
      <h2>{props.task.todo}</h2>
    </div>
  );
};

export default TodoListItem;
