'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ChatPanel from '@/components/ChatPanel';
import { Sparkles, LayoutGrid, FileText, Copy, Play, Download, TrendingUp, Activity, Shuffle, ArrowRight, Table, Globe, ImageIcon, Mic, Send, ChevronDown, Heart } from 'lucide-react';

export default function AppHomePage() {
  const { isPanelOpen, isChatOpen } = useSidebar();
  const router = useRouter();
  const [appIdea, setAppIdea] = useState('');
  
  // Typewriter animation state
  const words = ['Spright Copilot', 'Automation Assistant', 'Workflow Whisperer', 'Data BFF', 'Integration Guru'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Word complete, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseAfterComplete);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Deletion complete, move to next word after pause
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, pauseAfterDelete);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <main className={`transition-all duration-300 ${
        isPanelOpen ? 'ml-80' : 'ml-16'
      } ${
        isChatOpen ? 'mr-[300px]' : 'mr-0'
      }`}>
        <div className="max-w-[1800px] mx-auto px-8 pb-8">
          <TopBar
            title="spright"
            showPortalPublished={false}
          />
          
          {/* AI App Builder Section */}
          <div className="mb-12 mt-8">
            <div className="mb-6">
              <div className="mb-6">
           
              <h1 className="text-2xl font-semi-bold text-gray-900 mb-1 flex items-center gap-2">
                <div className="flex items-center -space-x-1">
                  <Heart className="text-rose-300" size={14} fill="currentColor" />
                  <Heart className="text-rose-500" size={24} fill="currentColor" />
                  <Heart className="text-rose-400" size={16} fill="currentColor" />
                </div>
                <span>
                  Let me be your <span className="inline-block text-left min-w-[240px]">{currentText}<span className="animate-pulse">|</span></span>
                </span>
              </h1>
            
            </div>

            {/* AI Textarea Card with Animated Gradient Glow */}
            <div className="relative p-1 rounded-2xl">
              {/* Animated Gradient Background Glow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-40 blur-2xl animate-gradient-flow"></div>
              </div>
              
              {/* White Card Content */}
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg p-4">
                <textarea
                  value={appIdea}
                  onChange={(e) => setAppIdea(e.target.value)}
                  placeholder="Ariel AI answers questions, builds automations with you, connects to your data, and helps you build bespoke solutions."
                  className="w-full text-base text-gray-900 placeholder-gray-400 resize-none border-0 focus:outline-none focus:ring-0 mb-4 min-h-[40px]"
                  rows={2}
                />
              
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <Table size={14} />
                    Import files
                  </button>
                  
                  <div className="flex items-center gap-3">
                    {/* Model Selector */}
                    
                    
                    {/* Action Icons */}
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Web search">
                        <Globe size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Upload image">
                        <ImageIcon size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Voice input">
                        <Mic size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Send message">
                        <Send size={18} />
                      </button>
                    </div>
                    
                    {/* Build It Button */}
                    <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-lg transition-colors ml-2">
                      Let's Go!
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* My Spright Apps Section */}
          <div>
            <div className="flex items-center justify-center mb-4 mt-20">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=24" 
                  alt="Celine" 
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                />
                <h2 className="text-1xl font-bold text-gray-900">Spright Apps is Welcoming You Back!</h2>
              </div>
            </div>

            {/* Welcome Section - Action Cards Row */}
            <div className="grid grid-cols-4 mb-8">
              {/* Start Spright App with Ariel */}
              <div className="group relative p-6 pb-14 cursor-pointer transition-all hover:bg-gray-50 border-r border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="text-amber-700 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">Start Spright App with Ariel</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Let AI guide you through app creation</p>
                
                {/* Hover Button - positioned below text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Select
                </button>
              </div>

              {/* Start with App Templates */}
              <div className="group relative p-6 pb-14 cursor-pointer transition-all hover:bg-gray-50 border-r border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <LayoutGrid className="text-lime-700 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">Start with App Templates</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Choose from pre-built templates</p>
                
                {/* Hover Button - positioned below text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Select
                </button>
              </div>

              {/* I Got This. Start Blank Canvas */}
              <div className="group relative p-6 pb-14 cursor-pointer transition-all hover:bg-gray-50 border-r border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="text-stone-700 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">I Got This. Start Blank Canvas</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Build from scratch</p>
                
                {/* Hover Button - positioned below text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Select
                </button>
              </div>

              {/* Clone Existing App */}
              <div className="group relative p-6 pb-14 cursor-pointer transition-all hover:bg-gray-50">
                <div className="flex items-start gap-3 mb-3">
                  <Copy className="text-teal-700 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">Clone Existing App</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Duplicate and customize</p>
                
                {/* Hover Button - positioned below text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Select
                </button>
              </div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {/* Bill Variance Card */}
              <div 
                onClick={() => router.push('/bill-variance')}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5"
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">Bill Variance</h3>
                      <p className="text-xs text-gray-500">Spright vs. ERP Invoices</p>
                    </div>
                    <div className="px-2 py-1 bg-black text-white text-[10px] font-medium rounded-full">
                      Published
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Variance</div>
                        <div className="text-xl font-bold text-gray-900">$203K</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Revenue</div>
                        <div className="text-lg font-semibold text-gray-900">$1.09M</div>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gray-100"></div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] text-green-600 font-medium mb-0.5">▲ +12% Week</div>
                        <div className="text-sm font-semibold text-gray-900">80K Records</div>
                        <div className="text-[10px] text-gray-500">Analyzed</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Critical</div>
                        <div className="text-sm font-semibold text-gray-900">3 Anomalies</div>
                        <div className="text-[10px] text-gray-500">Issues Found</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Procure To Pay Card */}
              <div 
                onClick={() => router.push('/procure-to-pay')}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5"
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">Procure To Pay</h3>
                      <p className="text-xs text-gray-500">P2P Metrics • Last 30 Days</p>
                    </div>
                    <div className="px-2 py-1 bg-black text-white text-[10px] font-medium rounded-full">
                      Published
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Invoices</div>
                        <div className="text-xl font-bold text-gray-900">50,080</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Flag Rate</div>
                        <div className="text-lg font-semibold text-gray-900">4.2%</div>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gray-100"></div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] text-gray-600 font-medium mb-0.5">▲ +3% Week</div>
                        <div className="text-sm font-semibold text-gray-900">$385.8K</div>
                        <div className="text-[10px] text-gray-500">At Risk</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Cycle Time</div>
                        <div className="text-sm font-semibold text-gray-900">5 Days</div>
                        <div className="text-[10px] text-gray-500">PO to Pay</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Compliance Card */}
              <div 
                onClick={() => router.push('/contract-compliance')}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5"
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">Contract Compliance</h3>
                      <p className="text-xs text-gray-500">Anomaly Metrics • Last 30 Days</p>
                    </div>
                    <div className="px-2 py-1 bg-black text-white text-[10px] font-medium rounded-full">
                      Published
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Compliance</div>
                        <div className="text-xl font-bold text-gray-900">96.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Total Value</div>
                        <div className="text-lg font-semibold text-gray-900">$2.4M</div>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gray-100"></div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Active</div>
                        <div className="text-sm font-semibold text-gray-900">1,245</div>
                        <div className="text-[10px] text-gray-500">Contracts</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-orange-600 font-medium mb-0.5">⚠ Expiring</div>
                        <div className="text-sm font-semibold text-gray-900">23</div>
                        <div className="text-[10px] text-gray-500">Soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Health Card */}
              <div 
                onClick={() => router.push('/system-health')}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5"
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">409A Valuation</h3>
                      <p className="text-xs text-gray-500">Performance Monitoring</p>
                    </div>
                    <Activity size={16} className="text-green-600" />
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Uptime</div>
                        <div className="text-xl font-bold text-green-600">99.98%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Response</div>
                        <div className="text-lg font-semibold text-gray-900">124ms</div>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gray-100"></div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] text-gray-500 mb-0.5">Last Sync</div>
                        <div className="text-sm font-semibold text-gray-900">2 min ago</div>
                        <div className="text-[10px] text-gray-500">Data Fresh</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-green-600 font-medium mb-0.5">✓ Healthy</div>
                        <div className="text-sm font-semibold text-gray-900">0 Errors</div>
                        <div className="text-[10px] text-gray-500">24h Period</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Panel */}
      <ChatPanel />
    </div>
  );
}
