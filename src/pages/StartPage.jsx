import React from 'react';
import ChatNav from '../components/ChatNav';

function StartPage({ nickname }) {
  return (
    <React.Fragment>
      <div className="h-full flex items-center justify-center mx-2 my-1 rounded bg-gray-100">
        Hello {nickname}! You can enter in any room :)
      </div>
      <ChatNav {...{ nickname }} />
    </React.Fragment>
  );
}

export default StartPage;
