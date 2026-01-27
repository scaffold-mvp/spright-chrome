'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import SidebarBillVariance from '@/components/Sidebar-BillVariance';
import TopBar from '@/components/TopBar';
import ChatPanel from '@/components/ChatPanel';

export default function ReportingPage() {
  const { isPanelOpen, isChatOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarBillVariance />
      
      {/* Main Content */}
      <main className={`transition-all duration-300 ${
        isPanelOpen ? 'ml-80' : 'ml-16'
      } ${
        isChatOpen ? 'mr-[300px]' : 'mr-0'
      }`}>
        <div className="max-w-[1800px] mx-auto px-8 pb-8">
          <TopBar
            title="Reporting"
            subtitle="Reports and analytics dashboard"
            showPortalPublished={false}
          />
          
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Reporting Dashboard</h2>
              <p className="text-gray-500">Custom reports and analytics coming soon...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Panel */}
      <ChatPanel />
    </div>
  );
}
