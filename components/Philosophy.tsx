
import React from 'react';

interface PhilosophyProps {
  isFullPage?: boolean;
}

const Philosophy: React.FC<PhilosophyProps> = ({ isFullPage }) => {
  return (
    <section id="philosophy" className={`${isFullPage ? 'py-32' : 'py-24'} bg-[#F5F1EB] px-6 min-h-[80vh] flex items-center`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=1000" 
            alt="Wooden hands-on learning tools" 
            className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000 soft-shadow"
          />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100/20 rounded-full blur-3xl -z-10 group-hover:bg-orange-200/30 transition-colors"></div>
        </div>
        
        <div className="space-y-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-4 block">Foundational Beliefs</span>
            <h2 className="text-6xl font-serif text-stone-900 leading-tight">The <span className="italic underline decoration-orange-100 decoration-4">Tangible</span> Mind</h2>
          </div>
          
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            In early childhood, abstract numbers are ghosts. To truly understand 'five' or 'symmetry', 
            a child needs to feel weight, see balance, and manipulate space.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-400 flex-shrink-0 shadow-sm font-serif italic text-xl">01</div>
              <div>
                <h3 className="font-semibold text-stone-900 text-lg mb-2">Tactile Discovery</h3>
                <p className="text-stone-500 leading-relaxed">Learning starts with the fingertips. We design for texture, weight, and friction to anchor abstract thoughts.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-400 flex-shrink-0 shadow-sm font-serif italic text-xl">02</div>
              <div>
                <h3 className="font-semibold text-stone-900 text-lg mb-2">Low Floor, High Ceiling</h3>
                <p className="text-stone-500 leading-relaxed">Tools that are easy to start with for a 3-year-old, but offer infinite complexity as a child grows to 7.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-400 flex-shrink-0 shadow-sm font-serif italic text-xl">03</div>
              <div>
                <h3 className="font-semibold text-stone-900 text-lg mb-2">Human Connection</h3>
                <p className="text-stone-500 leading-relaxed">Education isn't a screen; it's a conversation between a child, an object, and a guide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
