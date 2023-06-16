import React, { useState } from "react";

export const MessageContext = React.createContext();

export const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const handleMessage = (msg) => {
        setMessages((prev) => [...prev, msg]);
    }
  return (
    <MessageContext.Provider value={{ messages, handleMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
