import { useState } from 'react';
import '../styles/Form.css';
import { Button } from '@material-ui/core';

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
      {/*<input className="submit" type="submit" /> */}
      <Button type='submit' variant='contained'>Отправить</Button>
    </form>
  )
}