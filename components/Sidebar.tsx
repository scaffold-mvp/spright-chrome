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
  Star,
  Users,
  Share2,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  hasToggle?: boolean;
  path?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function Sidebar() {
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

  const myApps: NavItem[] = [
    { label: 'Bill Variance', icon: <Star size={18} />, active: true, path: '/bill-variance' },
    { label: 'Revenue Trend', icon: <Users size={18} /> },
    { label: 'Contract Compliance', icon: <Share2 size={18} /> },
  ];

  const policies: NavSection = {
    title: 'POLICIES',
    items: [
      { label: 'Bill Variance', hasToggle: true },
      { label: 'Contract Rate Validation', hasToggle: true },
      { label: 'Discount Limit Enforcement', hasToggle: true },
      { label: 'Duplicate Invoice Detection', hasToggle: true },
      { label: 'Invoice Tolerance', hasToggle: true },
      { label: 'Revenue Recognition', hasToggle: true },
      { label: 'Usage Cap Alert', hasToggle: true },
    ],
  };

  const reports: NavSection = {
    title: 'REPORTS',
    items: [
      { label: 'Price Tiers' },
      { label: 'Usage Report' },
      { label: 'Exception Report' },
    ],
  };

  const versions: NavSection = {
    title: 'VERSIONS',
    items: [
      { label: 'Last 30 Days' },
      { label: 'Year To Day' },
      { label: 'Annual' },
    ],
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
            {/* Home/App Icon */}
            <button
              onClick={navigateToHome}
              className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                pathname === '/apphome'
                  ? 'bg-[#958D85] text-white'
                  : 'text-white hover:text-white hover:bg-[#958D85]/50'
              }`}
              title="Home"
            >
              {pathname === '/apphome' ? (
                <Grid size={18} />
              ) : (
                <Home size={18} />
              )}
            </button>

            {/* App Icons */}
            {myApps.map((item, idx) => (
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
          <div className="px-6 py-5">
            <h2 className="text-base font-semibold text-black leading-none">My Spright apps</h2>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto py-1">
            <div className="space-y-2">
              {/* MY SPRIGHT APPS */}
              <div className="px-4">
            
                <div className="space-y-1">
                  {myApps.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (item.path) {
                          router.push(item.path);
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm leading-none transition-colors ${
                        item.path && pathname === item.path
                          ? 'bg-[#E8E4DF] text-black font-medium'
                          : 'text-black/70 hover:text-black hover:bg-[#E8E4DF]/50'
                      }`}
                    >
                      {item.icon}
                      <span className="leading-none">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

     

             

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
