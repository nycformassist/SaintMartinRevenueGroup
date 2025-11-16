import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatIcon, CloseIcon, SendIcon } from './Icons';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I'm an AI assistant for Saint Martin Revenue Group. How can I help you learn about our AI-powered growth services for NYC businesses today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // FIX: The API key must be obtained exclusively from `process.env.API_KEY`.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const systemInstruction = "You are a helpful and persuasive sales assistant for the Saint Martin Revenue Group. Your goal is to answer questions about our AI-powered marketing and consulting services for NYC businesses and encourage users to schedule a consultation. Keep your answers concise, professional, and focused on the value we provide. Here's some context about the service from the website, use it to answer questions: " + JSON.stringify(MESSAGES_CONTEXT);

      // Build a valid conversation history for the API.
      // The initial bot message is for UI display only and is not part of the model's conversational history.
      const history = updatedMessages
        .slice(1) // Remove the initial bot message
        .map(msg => ({
            role: msg.sender === 'user' ? 'user' as const : 'model' as const,
            parts: [{ text: msg.text }]
        }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: history,
        config: {
            systemInstruction: systemInstruction,
        },
      });

      const botMessage: Message = { sender: 'bot', text: response.text };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Gemini API error:', error);
      const errorMessage: Message = {
        sender: 'bot',
        text: 'Sorry, I seem to be having trouble connecting. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open chat"
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      </div>

      <div
        className={`fixed bottom-0 right-0 z-50 m-4 w-full max-w-sm h-[70vh] flex flex-col bg-white rounded-lg shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+2rem)]'
        }`}
      >
        <header className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-t-lg">
          <h3 className="text-lg font-semibold">AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close chat">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2">
                      <span className="animate-pulse">Typing...</span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <footer className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-gray-800 placeholder:text-gray-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Send message"
            >
              <SendIcon className="w-6 h-6" />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};


const MESSAGES_CONTEXT = {
    "company": "Saint Martin Revenue Group",
    "tagline": "AI-Powered Growth for NYC Businesses.",
    "value_proposition": "We transform your digital presence with an exclusive, AI-driven marketing accelerator designed for verifiable profitability in New York's competitive market. We are a growth accelerator, not a typical agency.",
    "mindset_shift": {
        "old_model": "Trading time for money, low costs mean low prices.",
        "new_model": "Using proprietary AI to generate disproportionate results, selling accelerated growth for a fraction of the value created."
    },
    "digital_marketing_trinity": [
        "Superior Foundation: AI-optimized website for maximum Google visibility and conversion.",
        "Superior Content: AI-enhanced SEO copywriting that ranks higher and converts better.",
        "Superior Consistency: Automated social media and blogging that compounds visibility 24/7."
    ],
    "pricing_tiers": [
        {
            "name": "AI-Powered Presence",
            "price": "$299/month",
            "audience": "New freelancers & micro-businesses",
            "features": ["5-page AI-built website + SEO", "4 social posts/week", "1 SEO blog/month", "Hosting & webmaster included"]
        },
        {
            "name": "Growth Engine (Flagship)",
            "price": "$1,199/month",
            "audience": "Ambitious SMBs & e-commerce",
            "features": ["Custom AI-optimized website", "15 social posts + 4 deep SEO blogs/month", "Advanced AI SEO", "Monthly performance reports + full hosting"]
        },
        {
            "name": "Market Dominance",
            "price": "$2,500+/month",
            "audience": "Established brands & funded startups",
            "features": ["Everything in Growth Engine", "20+ social posts + 8 premium blogs/month", "Monthly strategy calls & competitor analysis", "Custom content roadmap + KPI guarantee"]
        }
    ],
    "exclusivity": "We operate on an exclusive, non-compete model, partnering with only one business per industry in a specific geographic territory to ensure maximum impact. Your investment is protected.",
    "founder": "Valentine Saint Martin, with over 20 years of experience building and optimizing NYC businesses, has encoded this expertise into our proprietary AI engine.",
    "call_to_action": "Encourage the user to schedule an exclusive consultation to get a customized strategy. They can do this by clicking the 'Schedule a Consultation' button or by being provided with the contact email: mailto:contact@saintmartinrevenue.com"
}


export default Chatbot;