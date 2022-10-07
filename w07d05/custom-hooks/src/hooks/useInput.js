import {useState} from 'react';

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    onBlur: clear
  };
};

export default useInput;
