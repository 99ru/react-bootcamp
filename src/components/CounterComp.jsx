import { useState } from 'react';

const CounterComp = () => { 

  const [counter, setCounter] = useState(0); // counter is the state, setCounter is the function to update the state
  const decrement = () => { if(counter !== 0) {setCounter(counter - 1)}}
  const increment = () => setCounter(counter + 1);
  
  return (
    <div className='Counter'>
      <h2 className='counterTitle'> {counter} clicks</h2>
      <button className='btn-counter' onClick={decrement}>decrement</button>
      <button className='btn-counter' onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterComp;