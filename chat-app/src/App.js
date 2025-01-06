import React, { useState, useEffect } from "react";
import { database } from "./firebase";
import { ref, push, onValue } from "firebase/database";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = data ? Object.values(data) : [];
      setMessages(messagesList);
    });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const messagesRef = ref(database, "messages");
      push(messagesRef, {
        text: newMessage,
        timestamp: Date.now(),
      });
      setNewMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Chat App</h1>
      <div style={{ marginBottom: "20px" }}>
        {messages.map((message, index) => (
          <p key={index}>{message.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
