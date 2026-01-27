'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, User, ChevronDown, AtSign, Globe, Image, Mic } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatPanel() {
  const { isChatOpen, setChatOpen } = useSidebar();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m Ariel, your Spright AI assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('Finance Assistant');
  const [selectedModel, setSelectedModel] = useState('Sonnet 4.5');
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock agent list
  const agents = [
    'Finance Assistant',
    'Compliance Advisor',
    'Data Analyst',
    'Report Generator',
    'Contract Reviewer',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('bill') || lowerInput.includes('variance')) {
      return 'I can help you with bill variance analysis. Your current variance is $203,000. Would you like me to break down the root causes or help you investigate specific records?';
    } else if (lowerInput.includes('help')) {
      return 'I can assist you with:\n• Analyzing bill variances\n• Reviewing contract compliance\n• Explaining anomalies in your data\n• Creating custom reports\n• Answering questions about your Spright apps\n\nWhat would you like to explore?';
    } else if (lowerInput.includes('anomal')) {
      return 'You currently have 3 critical anomalies detected. The main issues are:\n1. Usage Variance (Acme Company)\n2. Timing Difference (Bleech Corp)\n3. Proration Error (Code Lane)\n\nWould you like me to provide more details on any of these?';
    } else {
      return 'I understand you\'re asking about: "' + userInput + '". I can help you analyze your data, create reports, or answer questions about your Spright applications. Could you provide more details?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isChatOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-[300px] bg-white z-40 flex flex-col border-l border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Ariel AI</h3>
              
              {/* Agent Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAgentDropdownOpen(!isAgentDropdownOpen)}
                  className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>{selectedAgent}</span>
                  <ChevronDown size={12} className={`transition-transform ${isAgentDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isAgentDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg z-50 py-1">
                    {agents.map((agent) => (
                      <button
                        key={agent}
                        onClick={() => {
                          setSelectedAgent(agent);
                          setIsAgentDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                          selectedAgent === agent ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {agent}
                      </button>
                    ))}
                    
                    {/* Create New Agent */}
                    <div className="border-t border-gray-200 mt-1 pt-1">
                      <button
                        onClick={() => {
                          setIsAgentDropdownOpen(false);
                          // TODO: Open create agent modal
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 transition-colors font-medium"
                      >
                        + Create new agent
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setChatOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="text-gray-600" size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Message Bubble */}
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2.5 ${
                  message.role === 'user'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {message.content}
                </p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-3 border-t border-gray-100">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setInput('Explain the bill variance')}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 text-left transition-colors"
            >
              Explain bill variance
            </button>
            <button
              onClick={() => setInput('Show me the anomalies')}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 text-left transition-colors"
            >
              Show anomalies
            </button>
            <button
              onClick={() => setInput('Help me create a report')}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 text-left transition-colors"
            >
              Create report
            </button>
          </div>
        </div>

        {/* Input Area */}
        <div className="px-4 py-4 border-t border-gray-200 bg-white">
          <div className="bg-white rounded-xl border border-gray-300 overflow-hidden">
            {/* First Row - Text Input */}
            <div className="px-3 py-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask Ariel anything..."
                rows={3}
                className="w-full bg-transparent text-gray-900 text-sm focus:outline-none placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Second Row - Buttons */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
              <div className="flex items-center gap-1">
                {/* Model Dropdown */}
                <div className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                  <span className="text-gray-700 text-xs font-medium">{selectedModel}</span>
                  <ChevronDown size={14} className="text-gray-500" />
                </div>

                {/* Action Icons */}
                <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                  <Globe size={16} className="text-gray-600" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                  <Image size={16} className="text-gray-600" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                  <Mic size={16} className="text-gray-600" />
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
