import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // Wave1: Render 1 entry
  // const firstMessage=messages[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry 
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        /> */}
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
