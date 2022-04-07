import React, { useEffect, useState } from 'react';
import { Message } from './components/Message';
import { Form } from './components/Form';
import './styles/App.css';
import { AUTHORS } from './utils/constants';


//const msgs = [];


const name = 'me';
const msgs = [];

function App() {

  const [messages, setMessages] = useState([]);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sedMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`
    })
  };

  useEffect(() => {
    let timeout;
    if (messages.length && messages[messages.length-1].author === AUTHORS.human) {
      timeout = setTimeout(() => {
        addMessage({ author: AUTHORS.robot, text: 'hi', id: `msg-${Date.now()}`})
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [messages]);
 
  return (
    <div className="App">

      <header className='header'>
        <div className='container'>
          {messages.map((msg) => (
            <Message key={msg.id} text={msg.text} author={msg.author} />
          ))}
        </div>
      </header>

      <main className='main'>
        <div className='container'>
          <Form onSubmit={sedMessage}/>
        </div>
      </main>

      <footer className='footer'></footer>

    </div>
  );
}

export default App;
