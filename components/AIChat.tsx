'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I am Janvi\'s AI assistant. Ask me anything about her work!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.toLowerCase();
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Comprehensive Q&A Logic
    setTimeout(() => {
      let botResponse = "I'm not exactly sure about that. Please contact her directly for more details!";

      // Basic Intro
      if (userMessage.includes('who are you')) {
        botResponse = "I’m Janvi’s AI Assistant 🤖 I can help you explore her projects, skills, and experience.";
      } else if (userMessage.includes('who is janvi')) {
        botResponse = "Janvi is an AI Software Developer & Full Stack Engineer focused on building scalable and performance-driven web applications.";
      } 
      // Frontend & Design
      else if (userMessage.includes('frontend developer')) {
        botResponse = "Yes, Janvi builds responsive and modern UI using HTML, CSS, JavaScript, and works on improving user experience.";
      } else if (userMessage.includes('responsive design')) {
        botResponse = "Absolutely. All her websites are mobile-friendly and optimized for different screen sizes.";
      }
      // Projects
      else if (userMessage.includes('show me your projects') || userMessage.includes('your projects')) {
        botResponse = "Janvi has built multiple projects including a recipe web app using Node.js, Express, and MongoDB, along with dynamic websites and e-commerce platforms.";
      } else if (userMessage.includes('best project')) {
        botResponse = "One of her key projects is a full-stack recipe platform where users can add, manage, and view recipes with user authentication.";
      }
      // Skills & Tools
      else if (userMessage.includes('what skills') || userMessage.includes('skills do you have')) {
        botResponse = "Janvi works with HTML, CSS, JavaScript, PHP, MySQL, Node.js, Express, and MongoDB.";
      } else if (userMessage.includes('tools') || userMessage.includes('technologies')) {
        botResponse = "Git, GitHub, Postman, VS Code, Vercel, Netlify, and database tools.";
      }
      // Work / Experience / Hire
      else if (userMessage.includes('experience')) {
        botResponse = "Yes, Janvi has experience building websites for businesses and personal brands, focusing on performance and user experience.";
      } else if (userMessage.includes('live projects')) {
        botResponse = "Yes, she has developed and deployed live websites, including e-commerce and service-based platforms.";
      } else if (userMessage.includes('why should i hire') || userMessage.includes('hire you')) {
        botResponse = "Janvi focuses on clean code, scalable solutions, and delivering real-world projects that actually perform.";
      }
      // Goal & Extra
      else if (userMessage.includes('what is your goal') || userMessage.includes('your goal')) {
        botResponse = "To become a highly skilled AI & Full Stack Developer and build impactful digital products.";
      } else if (userMessage.includes('what makes you different') || userMessage.includes('different')) {
        botResponse = "Janvi focuses on building production-ready systems with scalability, clean UI, and efficient backend architecture.";
      } else if (userMessage.includes('handle deployment') || userMessage.includes('deployment')) {
        botResponse = "Yes, she can manage domain setup, hosting, and deployment on platforms like Vercel and Netlify.";
      }
      // Contact
      else if (userMessage.includes('how can i contact') || userMessage.includes('contact you')) {
        botResponse = "You can reach Janvi through the contact section on this website or connect via email or LinkedIn.";
      } else if (userMessage.includes('available for work')) {
        botResponse = "Yes, Janvi is open to freelance projects, internships, and full-time opportunities.";
      }
      // Conversational
      else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
        botResponse = "Hey 👋 How can I help you explore Janvi’s work today?";
      } else if (userMessage.includes('thank you') || userMessage.includes('thanks')) {
        botResponse = "You’re welcome 😊 Feel free to ask anything else!";
      } else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
        botResponse = "Bye! Have a great day 🚀";
      }

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    }, 800);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--primary)',
          boxShadow: '0 0 20px var(--primary-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--background)',
          zIndex: 100,
          cursor: 'pointer',
          border: 'none'
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="glass"
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '20px',
              left: '20px',
              maxWidth: '350px',
              marginLeft: 'auto',
              height: '450px',
              maxHeight: '70vh',
              borderRadius: '20px',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                <Bot size={24} style={{ margin: '0 auto' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600' }}>Janvi AI Assistant</h4>
                <p style={{ fontSize: '0.7rem', color: 'var(--primary)' }}>Online</p>
              </div>
            </div>

            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  background: m.role === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                  color: m.role === 'user' ? '#000' : '#fff',
                  padding: '10px 14px',
                  borderRadius: m.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                  fontSize: '0.9rem',
                  maxWidth: '80%',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  {m.content}
                </div>
              ))}
            </div>

            <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask something..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '10px',
                  color: '#fff',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  background: 'var(--primary)',
                  border: 'none',
                  borderRadius: '10px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Send size={18} color="#000" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
