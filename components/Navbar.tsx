
import React from 'react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FCFAF7]/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-tight text-stone-900 group">
          Elena <span className="text-orange-300 group-hover:text-orange-400 transition-colors">Lumina</span>
        </a>
        
        <div className="flex items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold hidden sm:block">
            Design Studio
          </span>
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors group flex items-center gap-2"
            aria-label="Open Sidebar"
          >
            <span className="text-xs uppercase tracking-widest text-stone-500 font-bold group-hover:text-stone-900 transition-colors">About</span>
            <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
