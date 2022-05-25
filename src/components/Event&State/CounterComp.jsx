import { useState } from 'react';
import '../../styles/App.css';

const CounterComp = () => { 

  const [counter, setCounter] = useState(0); // counter is the state, setCounter is the function to update the state
  const decrement = () => { if(counter !== 0) {setCounter(counter - 1)}}
  const increment = () => setCounter(counter + 1);
  
  return (
    <div>
      <h2> {counter} clicks </h2>
      <button  onClick={decrement}>decrement</button>
      <button  onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterComp;