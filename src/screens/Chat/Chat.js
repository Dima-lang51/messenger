import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import { Message } from "../../components/Message";
import { AUTHORS } from "../../utils/constants";

const chats = [
  {
    name: 'Chats1',
    id: 'chat1',
  },
  {
    name: 'Chats2',
    id: 'chat2',
  },
  {
    name: 'Chats3',
    id: 'chat3',
  }
];

/*const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
};*/
 
 export function Chat() {

  const { id } = useParams();
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
      
          {id && (
            <div>
              <Form onSubmit={sedMessage}/>
            </div>
          )}
          
        </div>
      </main>

      <footer className='footer'></footer>

    </div>
  );
}