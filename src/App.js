import './styles/App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList';


const Home = () => <h4>Home page</h4>

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Home</NavLink></li>
      <li><NavLink to="/chat" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Chat</NavLink></li>
    </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatList />}>
          <Route path=':id' element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
