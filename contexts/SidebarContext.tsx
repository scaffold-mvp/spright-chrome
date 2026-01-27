'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SidebarContextType {
  isPanelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  togglePanel: () => void;
  isChatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  toggleChat: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('active-nav-panel');
    if (stored && stored !== '') {
      setIsPanelOpen(true);
    }
    
    const storedChat = localStorage.getItem('isChatOpen');
    if (storedChat !== null) {
      setIsChatOpen(JSON.parse(storedChat));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isChatOpen', JSON.stringify(isChatOpen));
  }, [isChatOpen]);

  const setPanelOpen = (open: boolean) => {
    setIsPanelOpen(open);
    localStorage.setItem('active-nav-panel', open ? 'bill-variance' : '');
    // Close chat when opening left panel
    if (open && isChatOpen) {
      setIsChatOpen(false);
    }
  };

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };

  const setChatOpen = (open: boolean) => {
    setIsChatOpen(open);
    // Close left panel when opening chat
    if (open && isPanelOpen) {
      setIsPanelOpen(false);
      localStorage.setItem('active-nav-panel', '');
    }
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <SidebarContext.Provider value={{ 
      isPanelOpen, 
      setPanelOpen, 
      togglePanel,
      isChatOpen,
      setChatOpen,
      toggleChat
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
