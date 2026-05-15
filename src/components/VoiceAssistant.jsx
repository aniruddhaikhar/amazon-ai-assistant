import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, MicOff, X, Sparkles, Send, ChevronRight,
  Volume2, Loader, Clock, MessageSquare
} from 'lucide-react';
import { voiceResponses } from '../data/products';

const SUGGESTED_PROMPTS = [
  "Find gaming headphones under ₹5000",
  "Is this laptop good for coding?",
  "Compare headphones with AirPods",
  "Which product has best battery life?",
  "Summarize the reviews",
  "Which products are worth the price?",
  "Find highly rated kitchen appliances",
  "Which one has fewer complaints?",
];

function WaveformAnimation({ active }) {
  return (
    <div className={`flex items-center justify-center gap-1 h-10 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-30'}`}>
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="wave-bar text-ai-blue"
          style={{
            animationPlayState: active ? 'running' : 'paused',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

function AIAvatar({ state }) {
  const stateColors = {
    idle: 'from-blue-600 to-ai-blue',
    listening: 'from-red-500 to-pink-500',
    thinking: 'from-purple-600 to-blue-500',
    responding: 'from-green-500 to-ai-blue',
  };

  const stateLabels = {
    idle: 'AI Copilot',
    listening: 'Listening...',
    thinking: 'Thinking...',
    responding: 'Responding...',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        animate={state === 'listening' ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${stateColors[state]} flex items-center justify-center shadow-lg relative`}
        style={state !== 'idle' ? { boxShadow: '0 0 20px rgba(0,191,255,0.5)' } : {}}
      >
        {state === 'thinking' ? (
          <Loader size={24} className="text-white animate-spin" />
        ) : state === 'listening' ? (
          <Mic size={24} className="text-white" />
        ) : state === 'responding' ? (
          <Volume2 size={24} className="text-white" />
        ) : (
          <Sparkles size={24} className="text-white" />
        )}

        {/* Pulse rings for listening */}
        {state === 'listening' && (
          <>
            <span className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" />
            <span className="absolute -inset-2 rounded-full border-2 border-red-400/30 animate-ping" style={{ animationDelay: '0.3s' }} />
          </>
        )}
      </motion.div>
      <span className="text-xs font-medium text-gray-400">{stateLabels[state]}</span>
    </div>
  );
}

function getAIResponse(input) {
  const lower = input.toLowerCase();
  for (const [key, val] of Object.entries(voiceResponses)) {
    if (key === 'default') continue;
    const words = key.split(' ');
    if (words.some(w => lower.includes(w))) {
      return val;
    }
  }
  return voiceResponses.default;
}

export default function VoiceAssistant({ isOpen, onClose, contextProduct }) {
  const [state, setState] = useState('idle');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hi! I'm your AI Shopping Copilot 🛍️ Ask me anything about products — I can compare, summarize reviews, check if something's worth buying, or find the best option in your budget. What are you shopping for?",
      time: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (contextProduct && isOpen) {
      const msg = `Tell me about the ${contextProduct.title}`;
      handleSend(msg);
    }
  }, [contextProduct, isOpen]);

  const handleSend = useCallback(async (text) => {
    const query = text || inputText.trim();
    if (!query) return;

    setInputText('');
    setTranscript('');

    setMessages(prev => [...prev, { role: 'user', text: query, time: new Date() }]);
    setState('thinking');

    await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));

    const aiResp = getAIResponse(query);
    setState('responding');

    setMessages(prev => [...prev, { role: 'ai', text: aiResp.response, time: new Date() }]);

    setTimeout(() => setState('idle'), 1500);
  }, [inputText]);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const mockTranscripts = [
        "Find me the best gaming headphones under 5000",
        "Is the MacBook good for coding",
        "Which product has the best battery life",
        "Compare headphones",
      ];
      const picked = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
      setIsListening(true);
      setState('listening');
      setTranscript('');

      let i = 0;
      const interval = setInterval(() => {
        setTranscript(picked.slice(0, i));
        i++;
        if (i > picked.length) {
          clearInterval(interval);
          setIsListening(false);
          setState('idle');
          handleSend(picked);
        }
      }, 50);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      setState('listening');
    };

    recognitionRef.current.onresult = (e) => {
      const t = Array.from(e.results).map(r => r[0].transcript).join('');
      setTranscript(t);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      setState('idle');
      if (transcript) handleSend(transcript);
    };

    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setIsListening(false);
    setState('idle');
  };

  const formatTime = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center md:justify-end p-0 md:p-4"
          onClick={e => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 250 }}
            className="w-full md:w-[420px] h-[85vh] md:h-[640px] bg-gradient-to-b from-slate-900 to-blue-950 rounded-t-3xl md:rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-ai-blue" />
                  <span className="font-bold text-white text-sm">Voice Shopping Assistant</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              {/* AI Avatar + Waveform */}
              <div className="flex items-center justify-center gap-6 py-2">
                <AIAvatar state={state} />
                <div className="flex-1">
                  <WaveformAnimation active={isListening} />
                  {transcript && (
                    <p className="text-xs text-center text-gray-300 mt-1 italic">"{transcript}"</p>
                  )}
                  {!transcript && (
                    <p className="text-xs text-center text-gray-500 mt-1">
                      {state === 'idle' ? 'Tap mic to speak or type below' :
                       state === 'listening' ? 'Speak now...' :
                       state === 'thinking' ? 'AI is analyzing...' :
                       'AI is responding...'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                >
                  {msg.role === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-ai-blue to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}>
                    <div
                      className={`px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-ai-blue text-white rounded-tr-sm'
                          : 'bg-white/10 text-gray-200 rounded-tl-sm border border-white/10'
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                      }}
                    />
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <Clock size={9} /> {formatTime(msg.time)}
                    </span>
                  </div>
                </motion.div>
              ))}
              {state === 'thinking' && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-ai-blue to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="bg-white/10 px-3 py-3 rounded-2xl rounded-tl-sm border border-white/10 flex items-center gap-1.5">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 bg-ai-blue rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested prompts */}
            <div className="px-4 py-2 border-t border-white/10 flex-shrink-0">
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                {SUGGESTED_PROMPTS.slice(0, 4).map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(p)}
                    className="flex-shrink-0 text-xs bg-white/10 hover:bg-white/20 text-gray-300 px-2.5 py-1.5 rounded-full border border-white/10 transition-all whitespace-nowrap"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={isListening ? stopListening : startListening}
                  className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30'
                      : 'bg-gradient-to-br from-ai-blue to-blue-600 hover:opacity-90 shadow-lg shadow-blue-500/30'
                  }`}
                  style={isListening ? {} : { boxShadow: '0 0 15px rgba(0,191,255,0.4)' }}
                >
                  {isListening ? <MicOff size={18} className="text-white" /> : <Mic size={18} className="text-white" />}
                </button>

                <div className="flex-1 flex items-center bg-white/10 rounded-xl border border-white/10 overflow-hidden">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about any product..."
                    className="flex-1 bg-transparent text-white text-sm px-3 py-2.5 outline-none placeholder-gray-500"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputText.trim()}
                    className="p-2.5 text-ai-blue hover:text-white disabled:text-gray-600 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FloatingMicButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
      style={{
        background: 'linear-gradient(135deg, #007BFF, #00BFFF)',
        boxShadow: '0 0 20px rgba(0,191,255,0.6), 0 0 40px rgba(0,191,255,0.3)',
      }}
    >
      <Mic size={22} className="text-white" />
      <span className="absolute inset-0 rounded-full bg-ai-blue/30 animate-ping" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/20 shadow-lg"
          >
            <Sparkles size={10} className="inline mr-1 text-ai-blue" />
            Voice AI Shopping
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
