'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';
import {
  Home,
  Globe,
  Settings,
  Menu,
  X,
  Grid,
  Sliders,
  Database,
  BarChart3,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  hasToggle?: boolean;
  path?: string;
  status?: 'green' | 'yellow' | 'red';
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function SidebarBillVariance() {
  const { isPanelOpen, setPanelOpen, togglePanel } = useSidebar();
  const [hoverOpen, setHoverOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/apphome');
  };

  const handleMenuClick = () => {
    togglePanel();
  };

  const handleNavHoverEnter = () => {
    if (!isPanelOpen) {
      setHoverOpen(true);
    }
  };

  const handleNavHoverLeave = () => {
    setHoverOpen(false);
  };

  // Panel should be open if either permanently open or hover open
  const isOpen = isPanelOpen || hoverOpen;

  // Get status indicator color class
  const getStatusColor = (status?: 'green' | 'yellow' | 'red') => {
    switch (status) {
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'red':
        return 'bg-red-500';
      default:
        return '';
    }
  };

  const mainNavItems: NavItem[] = [
    { label: 'Managing', icon: <Sliders size={18} />, path: '/managing' },
    { label: 'Modeling', icon: <Database size={18} />, path: '/modeling' },
    { label: 'Reporting', icon: <BarChart3 size={18} />, path: '/reporting' },
    
  ];

  const managingSection: NavSection = {
    title: 'ADMINISTRATION',
    items: [
      { label: 'Scheduled Automations' },
      { label: 'Portals' },
      { label: 'Documents' },
      { label: 'Users' },
      { label: 'Settings' },
      { label: 'Notifications' },
      { label: 'Billings' },
      { label: 'Integrations' },
      { label: 'API Keys' },
    ],
  };

  const modelingSection: NavSection = {
    title: 'POLICIES',
    items: [
      { label: 'Bill Variance', status: 'green' },
      { label: 'Contract Rate Validation', status: 'green' },
      { label: 'Discount Limit Enforce', status: 'green' },
      { label: 'Duplicate Invoice Detect', status: 'yellow' },
      { label: 'Invoice Tolerance', status: 'green' },
      { label: 'Revenue Recognition', status: 'green' },
      { label: 'Usage Cap Alert', status: 'red' },
    ],
  };

  const reportingSection: NavSection = {
    title: 'REPORT TYPES',
    items: [
      { label: 'Financial Reports' },
      { label: 'Variance Analysis' },
      { label: 'Compliance Reports' },
      { label: 'Custom Dashboards' },
      { label: 'Executive Summary' },
      { label: 'Scheduled Reports' },
    ],
  };
  const versionSection: NavSection = {
    title: 'VERSIONS',
    items: [
      { label: 'Version 1' },
      { label: 'Version 2' },
      { label: 'Version 3' },
    ],
  };
  // Determine which sections to show based on hover/active state
  const getSecondarySections = () => {
    if (pathname === '/managing') {
      return [managingSection];
    } else if (pathname === '/modeling') {
      return [modelingSection];
    } else if (pathname === '/reporting') {
      return [reportingSection];
    }
    // Default for bill-variance page
    return [managingSection, modelingSection, reportingSection, versionSection];
  };

  return (
    <div>
      {/* Primary Icon Sidebar - Always Visible */}
      <aside 
        className="fixed left-0 top-0 h-screen bg-[#87817B] text-white w-16 flex flex-col z-50"
      >
        {/* Menu Icon (Clickable) */}
        <button
          onClick={handleMenuClick}
          className="flex items-center justify-center px-4 py-5 hover:bg-[#958D85]/30 transition-colors cursor-pointer border-b border-white/10"
        >
          <div className="relative">
            {isPanelOpen ? (
              <X size={20} className="text-white transition-colors" />
            ) : (
              <Menu size={20} className="text-white transition-colors" />
            )}
          </div>
        </button>

        {/* Navigation Icons - Hover to Expand */}
        <div 
          className="flex-1 overflow-y-auto py-4"
          onMouseEnter={handleNavHoverEnter}
          onMouseLeave={handleNavHoverLeave}
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Home Icon - Navigates to Bill Variance */}
            <button
              onClick={() => router.push('/bill-variance')}
              className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                pathname === '/bill-variance'
                  ? 'bg-[#958D85] text-white'
                  : 'text-white hover:text-white hover:bg-[#958D85]/50'
              }`}
              title="Home"
            >
              <Home size={18} />
            </button>

            {/* Main Nav Icons */}
            {mainNavItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.path) {
                    router.push(item.path);
                  }
                }}
                className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                  item.path && pathname === item.path
                    ? 'bg-[#958D85] text-white'
                    : 'text-white hover:text-white hover:bg-[#958D85]/50'
                }`}
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="py-4">
          <div className="flex flex-col items-center space-y-3">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:text-white hover:bg-[#958D85]/50 transition-colors"
              title="Language"
            >
              <Globe size={18} />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md text-white hover:text-white hover:bg-[#958D85]/50 transition-colors"
              title="Settings"
            >
              <Settings size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
          </div>
        </div>
      </aside>

      {/* Secondary Detail Panel - Slides Out */}
      <div
        className={`fixed left-16 top-0 h-screen bg-[#E1E0DE] text-black transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 border-r border-gray-300`}
        onMouseEnter={() => setHoverOpen(true)}
        onMouseLeave={handleNavHoverLeave}
      >
        <div className="flex flex-col h-full">
          {/* Header with Title */}
          <div className="px-4 py-5">
            <h2 className="text-base font-semibold text-black leading-none">
              {pathname === '/managing' ? 'Administration' : 
               pathname === '/modeling' ? 'Data Models' : 
               pathname === '/reporting' ? 'Reports' : 
               'Home'}
            </h2>
            
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto py-2">
            <div 
              key={pathname}
              className={`space-y-6 ${
                isPanelOpen 
                  ? 'animate-slideInRight' 
                  : ''
              }`}
            >
              {getSecondarySections().map((section, sectionIdx) => (
                <div key={sectionIdx} className="px-4">
                  <h3 className="text-[10px] font-semibold text-black/60 tracking-wider mb-3 leading-none">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-black/70 hover:text-black hover:bg-[#E8E4DF]/50 transition-colors leading-none flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        {item.status && (
                          <span className={`w-2 h-2 rounded-full ml-2.5 ${getStatusColor(item.status)}`}></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
