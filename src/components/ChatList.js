import { NavLink, Outlet } from "react-router-dom";

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


export const ChatList = () => (
  <>
    <div>
      {chats.map((chat) => (
        <NavLink to={`/chat/${chat.id}`} key={chat.id}>{chat.name}</NavLink>
      ))}
    </div>
    <Outlet />
  </>
);