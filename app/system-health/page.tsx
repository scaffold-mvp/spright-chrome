'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ChatPanel from '@/components/ChatPanel';

export default function SystemHealthPage() {
  const { isPanelOpen, isChatOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <main className={`transition-all duration-300 ${
        isPanelOpen ? 'ml-80' : 'ml-16'
      } ${
        isChatOpen ? 'mr-[300px]' : 'mr-0'
      }`}>
        <div className="max-w-[1600px] mx-auto px-8 pb-8">
          <TopBar
            title="System Health"
            subtitle="System monitoring and performance metrics"
            showPortalPublished={false}
          />
          
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500 text-lg">409A Valuation </p>
          </div>
        </div>
      </main>

      {/* Chat Panel */}
      <ChatPanel />
    </div>
  );
}
