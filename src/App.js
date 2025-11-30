import React, { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: 'This is a demo reply.' }]);
    setInput('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chatbot Demo</h2>
      <div style={{ border: '1px solid #ccc', padding: 10, height: 300, overflowY: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <b>{m.from}:</b> {m.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        style={{ width: '80%', padding: 8, marginTop: 10 }}
      />
      <button onClick={sendMessage} style={{ padding: 8, marginLeft: 10 }}>Send</button>
    </div>
  );
}
