
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
            Designing toys and tools that make <span className="italic text-orange-400">math</span> feel like <span className="italic">play</span>.
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed mb-10 max-w-xl">
            We are an educational tool design and manufacturing supplier based in China. We believe the most profound mathematical discoveries happen through messy hands, open-ended blocks, and the quiet joy of noticing patterns.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-50/50 rounded-[3rem] -z-10 blur-2xl"></div>
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-200/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200" 
              alt="Translucent magnetic blocks on a table in a warm kindergarten classroom" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          {/* Decorative tag */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-stone-50">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">Inspiration</p>
            <p className="text-stone-800 font-serif italic text-lg">"Learning is finding light."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
