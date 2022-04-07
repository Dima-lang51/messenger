import { useState } from 'react';
import '../styles/Form.css';

export const Form = ({ onSubmit }) => {

  const [value, setValue] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue("");
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form className="form" onSubmit={handlesubmit}>
      <input value={value} onChange={handleChange} className="text" type="text" />
      <input className="submit" type="submit" />
    </form>
  )
}