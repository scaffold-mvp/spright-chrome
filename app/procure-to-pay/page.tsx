'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ChatPanel from '@/components/ChatPanel';

export default function ProcureToPayPage() {
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
        <div className="max-w-[1800px] mx-auto px-8 pb-8">
          <TopBar
            title="Procure To Pay"
            subtitle="Procurement and payment tracking"
            showPortalPublished={true}
          />
          
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500 text-lg">Procure To Pay page coming soon...</p>
          </div>
        </div>
      </main>

      {/* Chat Panel */}
      <ChatPanel />
    </div>
  );
}
