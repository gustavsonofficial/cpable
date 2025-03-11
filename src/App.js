import React, { useState } from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import NavMenu from './components/NavMenu';
import ImageGallery from './components/ImageGallery';
import ChatContainer from './components/ChatContainer';
import ChatResponse from './components/ChatResponse';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setResponse(''); // Clear the response when new input is typed
  };

  const handleButtonClick = async () => {
    // Mock response data
    const mockResponse = {
      choices: [
        {
          text: "This is a mock response from the AI occupational therapist."
        }
      ]
    };
    setResponse(mockResponse.choices[0].text);
    setChatHistory([...chatHistory, { input, response: mockResponse.choices[0].text }]);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BurgerMenu toggleMenu={toggleMenu} />
        {menuOpen && <NavMenu menuOpen={menuOpen} />}
        <p>cpable.ai</p>
        <ImageGallery />
        <ChatContainer 
          input={input} 
          handleInputChange={handleInputChange} 
          handleButtonClick={handleButtonClick} 
        />
        <ChatResponse chatHistory={chatHistory} response={response} />
      </header>
    </div>
  );
}

export default App;
