import React, { useEffect, useRef, useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! I’m Estate AID. Ask me any real estate question.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const model = 'models/gemini-1.5-flash-latest';

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: 'user', text }]);
    setInput('');

    if (!apiKey) {
      setMessages((prev) => [...prev, { from: 'ai', text: 'API key not configured. Add VITE_GEMINI_API_KEY to .env.' }]);
      return;
    }

    setLoading(true);
    try {
      const prompt = `You are Estate AID, an expert assistant for real estate investors. Answer concisely and practically. Question: ${text}`;
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await res.json();
      let reply = 'Sorry, I could not process that. Please try again.';
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        reply = data.candidates[0].content.parts[0].text;
      }
      setMessages((prev) => [...prev, { from: 'ai', text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { from: 'ai', text: 'There was an error connecting to the AI. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="chat-fab" onClick={() => setIsOpen((v) => !v)} aria-label="Open chatbot">
        {isOpen ? '❌' : '🤖'}
      </button>

      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h4>Estate AID Assistant</h4>
          <button className="chat-close" onClick={() => setIsOpen(false)}>✖</button>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-message ${m.from}`}>{m.text}</div>
          ))}
          {loading && <div className="chat-loading">AI is thinking...</div>}
        </div>
        <form className="chat-input" onSubmit={sendMessage}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything..." disabled={loading} />
          <button type="submit" disabled={loading}>Send</button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;


