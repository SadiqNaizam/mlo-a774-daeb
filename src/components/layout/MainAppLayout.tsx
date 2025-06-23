import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[256px_1fr]">
      <aside className="hidden border-r bg-card lg:block">
        <Sidebar />
      </aside>
      
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;