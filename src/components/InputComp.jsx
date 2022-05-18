import { useState } from 'react'; 

const InputComp = () => {
  const [input, setInput] = useState('')
  const clear = () => setInput('')


  return (
    <div className='input'>
      <h2>{input}</h2>
      <input type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={clear}>Clear</button>
     
    </div>
  )
}

export default InputComp;