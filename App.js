// App.js
import React, { useState, useEffect } from "react";
import { db, ref, set, get, child } from "./firebase";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const messagesRef = ref(db, "messages/");
    get(messagesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setMessages(Object.values(data));
        }
      })
      .catch((error) => {
        console.error("Error reading data: ", error);
      });
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        text: input,
        timestamp: new Date().toISOString(),
      };
      const messagesRef = ref(db, "messages/");
      const newMessageRef = messagesRef.push();
      set(newMessageRef, newMessage).then(() => {
        setInput(""); // Clear input field after sending
      });
    }
  };

  return (
    <div className="App">
      <h1>Firebase Chat App</h1>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
