'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ChatPanel from '@/components/ChatPanel';
import { Sparkles, LayoutGrid, FileText, Copy, Play, Download, TrendingUp, Activity } from 'lucide-react';

export default function AppHomePage() {
  const { isPanelOpen, isChatOpen } = useSidebar();
  const router = useRouter();

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
          
          {/* Welcome Section */}
          <div className="mb-8 mt-10">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.pravatar.cc/150?img=47" 
                alt="Celine" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-900">Celine is Back!</h2>
            </div>
            
            {/* Action Cards Row - No Borders, Gray Dividers */}
            <div className="grid grid-cols-4">
              {/* Start Spright App with Ariel */}
              <div className="group relative p-6 pb-16 cursor-pointer transition-all hover:bg-gray-50 border-r border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles className="text-orange-500 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">Start Spright App with Ariel</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Let AI guide you through app creation</p>
                
                {/* Hover Button - 10px from text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Let's Go!
                </button>
              </div>

              {/* Start with App Templates */}
              <div className="group relative p-6 pb-16 cursor-pointer transition-all hover:bg-gray-50 border-r border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <LayoutGrid className="text-blue-500 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">Start with App Templates</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Choose from pre-built templates</p>
                
                {/* Hover Button - 10px from text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Let's Go!
                </button>
              </div>

              {/* I Got This. Start Blank Canvas */}
              <div className="group relative p-6 pb-16 cursor-pointer transition-all hover:bg-gray-50 border-r border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="text-green-500 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">I Got This. Start Blank Canvas</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Build from scratch</p>
                
                {/* Hover Button - 10px from text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Let's Go!
                </button>
              </div>

              {/* Clone Existing App */}
              <div className="group relative p-6 pb-16 cursor-pointer transition-all hover:bg-gray-50">
                <div className="flex items-start gap-3 mb-3">
                  <Copy className="text-purple-500 transition-transform group-hover:scale-110" size={20} />
                  <h3 className="font-semibold text-base text-gray-900">Clone Existing App</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2.5">Duplicate and customize</p>
                
                {/* Hover Button - 10px from text */}
                <button className="absolute bottom-6 left-6 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Let's Go!
                </button>
              </div>
            </div>
          </div>

          {/* My Spright Apps Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">My Spright Apps</h2>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
                  <Play size={16} className="text-gray-600" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
                  <Copy size={16} className="text-gray-600" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
                  <Download size={16} className="text-gray-600" />
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
