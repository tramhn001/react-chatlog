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

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
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
