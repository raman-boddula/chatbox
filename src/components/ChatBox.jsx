import { useContext, useId, useState } from "react";
import { MessageContext } from "../context/MessageContext";

export const ChatBox = ({ chatBoxId, handleUpdateChatBox }) => {
    const [typedText, setTypedText] = useState("");
    const id = useId();
  const handleChange = (e) => {
    setTypedText(e.target.value);
  };
  const { messages, handleMessage } = useContext(MessageContext);
  return (
    <>
      <div className="chatbox-container dis-flex">
        <div className="typed-text">
          {messages.map((message) => (
            <div
              key={id}
              className={
                Object.keys(message) == chatBoxId.id
                  ? "align-right"
                  : "align-left"
              }
            >
              {" "}
              {Object.values(message)[0]}
            </div>
          ))}
        </div>
        <textarea
          value={typedText}
          onChange={handleChange}
          id={`textArea+${chatBoxId}`}
        ></textarea>
        <div>
          <button
            className="send-btn btn"
            onClick={() => {
              handleMessage(typedText, chatBoxId.id);
              setTypedText("");
            }}
            disabled={!typedText.length}
          >
            Send
          </button>
          <button
            className="close-btn btn"
            onClick={() => handleUpdateChatBox(chatBoxId)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
