import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const toggleLike = (id) => {
    const updatedMessages = chatMessages.map((message) => {
      if (message.id === id) {
        return {...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setChatMessages(updatedMessages);
  };

  const totalLikes = chatMessages.filter((message) => message.liked).length;

  // Extract unique participants
  const participants = [...new Set(chatMessages.map((message) => message.sender))];

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${participants.join(' and ')}`}</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog 
          entries={chatMessages} 
          onToggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
