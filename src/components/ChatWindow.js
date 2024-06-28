import React, { useState } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Here you would typically send the message to an LLM API and get a response
    // This is a placeholder response
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { 
        text: "I'm an AI assistant. I can help answer questions about your medical records.", 
        sender: 'ai' 
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chat-window">
      <h2>Chat about Your Records</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your records...or I can prompt you based on my observations"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;