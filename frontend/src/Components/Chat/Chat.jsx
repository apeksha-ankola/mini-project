import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Backend server URL

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages([...messages, message]);
  //   });
  // }, [messages]);

  // const sendMessage = () => {
  //   socket.emit('sendMessage', inputMessage);
  //   setInputMessage('');
  // };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
