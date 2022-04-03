import React, { useEffect, useState } from 'react';
import { Message } from './components/Message';
import { Form } from './components/Form';
import './styles/App.css';


const name = 'me';
const msgs = [];

function App() {

  const [messages, setMessages] = useState(msgs);

  const addMessage = (newText) => {
    setMessages([...messages, {text: newText, author: name}]);
  };

  useEffect(() => {
    if (messages.length && messages[messages.length-1].author === name) {
      setMessages([...messages, {text: 'hi', author: 'robot'}]);
    }
  }, [messages]);
 
  return (
    <div className="App">

      <header className='header'>
        <div className='container'>
          {messages.map((msg) => (
            <Message text={msg.text} author={msg.author} />
          ))}
        </div>
      </header>

      <main className='main'>
        <div className='container'>
          <Form onSubmit={addMessage}/>
        </div>
      </main>

      <footer className='footer'></footer>

    </div>
  );
}

export default App;
