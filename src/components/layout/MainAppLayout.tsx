import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState<boolean>(false);

  const handleToggleMobileSidebar = React.useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} />

      {isMobileSidebarOpen && (
        <div
          onClick={handleToggleMobileSidebar} // Close sidebar on backdrop click
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          aria-hidden="true"
        />
      )}

      <Header onToggleMobileSidebar={handleToggleMobileSidebar} />

      <main className="h-screen overflow-y-auto md:pl-64 pt-[70px]">
        {/* Content wrapper with padding as per mainContent.layout requirements */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
