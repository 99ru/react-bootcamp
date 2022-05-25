import {useState} from 'react';

const ToggleComp = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    
  }
  return (
    <div>
      <div className='button-switch'>
      <h2>On and Off switch</h2>
      <h1>{state ? "On" : "Off"}</h1> 
      <button onClick={toggle}>Toggle</button>
      </div>
    </div>
  );
}

export default ToggleComp
