import React from 'react';
import { NavLink } from 'react-router-dom';

const rooms = ['room1', 'room2', 'room3'];

function ChatNav({ nickname }) {
  return (
    <nav className="flex justify-between">
      {rooms.map((room) => (
        <NavLink className="w-full p-2" to={`/${nickname}/${room}`} key={room}>
          <div className="w-full flex items-center justify-center h-10 rounded bg-gray-100 font-bold capitalize">
            {room}
          </div>
        </NavLink>
      ))}
    </nav>
  );
}

export default ChatNav;
