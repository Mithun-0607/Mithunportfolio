import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm Mithun's AI assistant. How can I help you today?", isBot: true },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessages([...messages, { text: userMsg, isBot: false }]);
    setMessage('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { text: data.response, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { text: "Sorry, I encountered an error. Please try again.", isBot: true }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { text: "Sorry, I encountered an error. Please try again.", isBot: true }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <Bot size={28} className="text-white" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
      </button>

      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96 h-[500px] bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Chat with Mithun AI</h3>
                <p className="text-xs text-gray-100">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-blue-500 text-white'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
