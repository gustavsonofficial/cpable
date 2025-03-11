import React from 'react';

const ChatContainer = ({ input, handleInputChange, handleButtonClick }) => (
  <div className="chat-container">
    <textarea 
      value={input} 
      onChange={handleInputChange} 
      placeholder="Ask the AI occupational therapist" 
      rows="4" 
      className="chat-input"
    />
    <button onClick={handleButtonClick} className="chat-submit">Submit</button>
  </div>
);

export default ChatContainer;
