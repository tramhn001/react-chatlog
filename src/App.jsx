import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const toggleLike = (id) => {
    const updatedMessages = chatMessages.map((message) =>
      message.id === id ? { ...message, liked: !message.liked } : message
    );
    setChatMessages(updatedMessages);
  };

  const totalLikes = chatMessages.filter((message) => message.liked).length;

  const sender1 = messages[0].sender // First sender
  const sender2 = messages[1].sender // Second sender

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${sender1} and ${sender2}`}</h1>
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
