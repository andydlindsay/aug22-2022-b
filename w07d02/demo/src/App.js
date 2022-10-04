import './App.css';
// import Header from './components/Header';
// import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to my app!</h2>

      {/* <Header 
        message="does this work??"
        secretKey="hello world"
        age={42}
      /> Header({message: 'does this work?'}) */}

      {/* <Header>
        <h2>This is the children</h2>
        <h2>This is the children</h2>
      </Header> */}

      {/* <Counter /> */}

      <ControlledInput />

    </div>
  );
};

export default App;
