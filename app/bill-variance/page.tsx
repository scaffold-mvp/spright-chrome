'use client';

import { useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import SidebarBillVariance from '@/components/Sidebar-BillVariance';
import TopBar from '@/components/TopBar';
import ChatPanel from '@/components/ChatPanel';
import KpiStrip from '@/components/KpiStrip';
import InsightCards from '@/components/InsightCards';
import VarianceRecordsTableShadcn from '@/components/VarianceRecordsTableShadcn';

export default function BillVariancePage() {
  const { isPanelOpen, isChatOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarBillVariance />
      
      {/* Main Content - shifts based on sidebar state (icon bar = 64px, + detail panel = 320px total) */}
      <main className={`transition-all duration-300 ${
        isPanelOpen ? 'ml-80' : 'ml-16'
      } ${
        isChatOpen ? 'mr-[300px]' : 'mr-0'
      }`}>
        <div className="max-w-[1800px] mx-auto px-8 pb-8">
          <TopBar
            title="Bill Variance"
            subtitle="Compare Spright Calculation vs. ERP Invoices"
            showPortalPublished={true}
            showBackButton={true}
          />
          
          <KpiStrip />
          
          <InsightCards />
          
          <VarianceRecordsTableShadcn />
        </div>
      </main>

      {/* Chat Panel */}
      <ChatPanel />
    </div>
  );
}
