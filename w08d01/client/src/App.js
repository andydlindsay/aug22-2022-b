import './App.css';
import TodoList from './components/TodoList';
import {useEffect, useState} from 'react';
import axios from 'axios';

// const tasks = [
//   {
//     id: 'abcd',
//     todo: 'pick up Alice from the airport'
//   },
//   {
//     id: 'efgh',
//     todo: 'make waffles'
//   }
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then((res) => {
        console.log(res);
        setTasks(res.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Todo List App!</h2>
      <h2>Welcome to our site!</h2>
      {/* <TodoListItem task={task} /> */}

      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
