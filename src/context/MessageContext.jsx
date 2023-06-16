import React, { useState } from "react";

export const MessageContext = React.createContext();

export const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const handleMessage = (msg, id) => {
        setMessages((prev) => [...prev, { [id]: msg }]);
    }
  return (
    <MessageContext.Provider value={{ messages, handleMessage,setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
