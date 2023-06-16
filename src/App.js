import {  useState } from 'react';
import './App.css';
import { ChatBox } from './components/ChatBox';
function App() {
  const [chatBoxes, setChatBoxes] = useState([]);
  const handleAddChatBox = () => {
    let currentChatBox = new Date().getTime()
    setChatBoxes((prev) => ([...prev, currentChatBox]))
  }
  const handleUpdateChatBox = (chatBoxId) => {
    let updatedChatBoxes = chatBoxes.filter((chatBox) => {
      return chatBox != chatBoxId
    });
    setChatBoxes(updatedChatBoxes)
  }
  return (
    <div>
      <div className='vertical-center'>
        <button className='add-btn btn' onClick={handleAddChatBox}>Add Chatbox</button>
        <button disabled={chatBoxes.length>0?false:true} className='close-btn btn' onClick={() => setChatBoxes([])}>Close All</button>
      </div>
      <div className='chatboxes-main-container'>
        {chatBoxes.map((chatBox) => (
          <div key={chatBox}>
            <ChatBox handleUpdateChatBox={handleUpdateChatBox} chatBoxId={chatBox} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
