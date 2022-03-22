import React from 'react';
import { Message } from './components/Message';
import './styles/App.css';

function App() {
  const foo = () => {
    alert('Привет');
  }
  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <Message name="№" number={1} dosmth={foo}/>
        </div>
      </header>
      <main className='main'></main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
