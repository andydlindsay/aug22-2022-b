import {useState} from 'react';

const ControlledInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');
  useState('');
  useState('');
  useState('');


  return (
    <div>
      <h2>ControlledInput component</h2>
      <div>
        <label>Search term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div>
        <h3>Search term: {searchTerm}</h3>
      </div>
    </div>
  );
};

export default ControlledInput;
