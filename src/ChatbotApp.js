// src/ChatbotApp.js
import React, { useState } from 'react';
import './ChatbotApp.css';

const ChatbotApp = () => {
  const [apiKey1, setApiKey1] = useState('');
  const [apiKey2, setApiKey2] = useState('');
  const [topic, setTopic] = useState('');
  const [numConversations, setNumConversations] = useState(1);
  const [ready, setReady] = useState(false);
  const [conversation, setConversation] = useState([]);

  const handleSubmit = () => {
    if (apiKey1 && apiKey2) {
      setReady(true);
      alert('They are ready for communication.');
    } else {
      alert('Please enter both API keys.');
    }
  };

  const handleGo = async () => {
    if (ready && topic && numConversations > 0) {
      const convo = await simulateConversation(apiKey1, apiKey2, topic, numConversations);
      setConversation(convo);
    } else {
      alert('Please enter a topic, ensure both API keys are ready, and specify the number of conversations.');
    }
  };

  const simulateConversation = async (key1, key2, topic, numConversations) => {
    // Mock function to simulate conversation
    const convo = [];
    for (let i = 0; i < numConversations; i++) {
      convo.push({ bot: 'Bot 1', message: `Bot 1: Here's a riddle about ${topic}: What has keys but can't even open a single door?` });
      convo.push({ bot: 'Bot 2', message: `Bot 2: The answer is a piano.` });
      convo.push({ bot: 'Bot 2', message: `Bot 2: Now, here's a riddle about ${topic}: What has to be broken before you can use it?` });
      convo.push({ bot: 'Bot 1', message: `Bot 1: The answer is an egg.` });
    }
    return convo;
  };

  return (
    <div className="chatbot-app">
      <h1>Gemini Chatbot Communication</h1>
      <div className="api-keys">
        <input
          type="text"
          placeholder="Enter Gemini API Key 1"
          value={apiKey1}
          onChange={(e) => setApiKey1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Gemini API Key 2"
          value={apiKey2}
          onChange={(e) => setApiKey2(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {ready && (
        <div className="topic-input">
          <input
            type="text"
            placeholder="Enter a topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of conversations"
            value={numConversations}
            onChange={(e) => setNumConversations(parseInt(e.target.value))}
            min="1"
          />
          <button onClick={handleGo}>Go</button>
        </div>
      )}
      {conversation.length > 0 && (
        <div className="conversation">
          <h2>Conversation:</h2>
          {conversation.map((msg, index) => (
            <div key={index} className={`message ${msg.bot}`}>
              {msg.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatbotApp;
