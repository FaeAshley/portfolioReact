import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
        role: "bot",
        content:
        "Hi there, I’m FaeGPT—Fae’s trusted companion here to help you get to know Fae! Ask me anything about her skills, experience, or projects. I’ve got the receipts.",
    },
  ]);
  

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
        const res = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
        });

        const data = await res.json();

        const botResponse = {
        role: "bot",
        content: data.reply,
        };

        setMessages((prev) => [...prev, botResponse]);
    } catch (err) {
        setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Oops! Something went wrong. Try again later." },
        ]);
    }
    };


  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Bubble */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-magenta text-white rounded-full w-14 h-14 shadow-lg hover:bg-magenta-light transition"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[32rem] bg-faebot-background rounded-xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className="bg-magenta text-white px-4 py-2 flex justify-between items-center cursor-pointer"
            onClick={toggleChat}
          >
            <span className="font-semibold">FaeGPT</span>
            <span>✕</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-faebot-background">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-white text-sm ${
                  msg.role === "user" ? "text-right" : "text-left "
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user" ? "bg-magenta" : "bg-faebot-surface"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex bg-faebot-surface border-white/10">
            <input
              type="text"
              className="flex-1 rounded px-2 py-1 text-sm focus:outline-none bg-gray-700 text-faebot-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask FaeGPT something..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-magenta text-white px-3 py-1 rounded hover:bg-magenta-light text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
