import {useState} from 'react';

const FormSubmit = () => {
  const [input , setInput] = useState(''); 
  const submit = (e) => {  
    e.preventDefault()
    console.log(input)
  }
  const clear = () => {
    setInput('')
  }

  return (
    <div className='form-wrapper'>
      <h2>Form submit prevention</h2>
      <form action="POST">
        <input type="text" value={input} placeholder="input" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={submit}>submit</button>
      </form>
      <h2 className='result'>
        <button onClick={clear}>Clear</button>
      </h2>
    </div>
  )
}

export default FormSubmit;