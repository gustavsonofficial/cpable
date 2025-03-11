import React from 'react';

const ChatResponse = ({ chatHistory, response }) => (
  <div className="chat-response">
    {chatHistory.map((chat, index) => (
      <div key={index} className="chat-message">
        <p style={{ color: 'black' }}><strong>You:</strong> {chat.input}</p>
        <p style={{ color: 'black' }}><strong>AI:</strong> {chat.response}</p>
      </div>
    ))}
    <p style={{ color: 'black' }}>{response}</p>
  </div>
);

export default ChatResponse;
