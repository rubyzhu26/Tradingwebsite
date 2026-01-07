
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-lg bg-[#FCFAF7] z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
      >
        <div className="p-8 md:p-12">
          <button 
            onClick={onClose}
            className="mb-12 p-2 -ml-2 hover:bg-stone-100 rounded-full transition-colors group"
          >
            <svg className="w-8 h-8 text-stone-400 group-hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <section className="space-y-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-4 block">Design Studio</span>
              <h2 className="text-5xl font-serif text-stone-900 leading-tight">About <span className="italic">Us</span></h2>
            </div>

            <div className="space-y-8 text-stone-600 text-lg leading-relaxed font-light">
              <p className="font-medium text-stone-800 text-xl">
                We are passionate about creating hands-on math tools and educational toys that make learning fun for children aged 3–7.
              </p>
              
              <p>
                Growing up in China, our founder <span className="text-stone-900 font-normal">Yao</span> has always been fascinated by how children explore the world through play. Over the years, we’ve combined a love for education, thoughtful design, and innovative problem-solving to develop toys that are not only engaging but also help kids build essential math and cognitive skills.
              </p>

              <div className="relative py-8 px-6 bg-orange-50/50 rounded-2xl border-l-4 border-orange-200">
                <p className="italic font-serif text-xl text-stone-800">
                  With experience working across cultures and collaborating with families and educators worldwide, we understand the importance of designing products that are both practical and inspiring.
                </p>
              </div>

              <p>
                Every piece we create is designed to spark curiosity, creativity, and confidence in little learners, turning every playtime into a meaningful learning experience.
              </p>

              <p className="font-medium text-stone-900">
                We believe learning should be joyful, hands-on, and full of wonder—and we’re here to bring that belief to children everywhere.
              </p>
            </div>

            <div className="pt-10 border-t border-stone-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-orange-200 font-serif italic text-xl shadow-lg">L</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Lumina Studio</p>
                  <p className="text-stone-800 font-medium italic">"Designing for the tangible mind."</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
