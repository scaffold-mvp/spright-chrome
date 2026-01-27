'use client';

import { RefreshCw, Clock, Sparkles } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';

interface TopBarProps {
  title: string;
  subtitle?: string;
  showPortalPublished?: boolean;
}

export default function TopBar({
  title,
  subtitle,
  showPortalPublished = true,
}: TopBarProps) {
  const { toggleChat } = useSidebar();

  return (
    <div className="sticky top-0 z-30 flex items-start justify-between px-8 py-3 mb-5 border-b border-gray-200 bg-white -mx-8">
      <div>
        {title.toLowerCase() === 'spright' ? (
          <img 
            src="/spright-logo.png" 
            alt="Spright" 
            className="h-10 w-auto"
          />
        ) : (
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        )}
        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
          <RefreshCw size={18} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
          <Clock size={18} className="text-gray-600" />
        </button>
        <button 
          onClick={toggleChat}
          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-purple-50 transition-colors"
        >
          <Sparkles size={18} className="text-purple-600" />
        </button>
        {showPortalPublished && (
          <div className="px-4 py-1.5 bg-black text-white text-sm font-medium rounded-full">
            Portal Published
          </div>
        )}
      </div>
    </div>
  );
}
