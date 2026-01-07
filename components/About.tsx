
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about-section" className="py-24 px-6 bg-white min-h-[80vh]">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* 左侧文字叙述 */}
          <div className="lg:col-span-7 space-y-12">
            <header>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-4 block">Our Story</span>
              <h2 className="text-6xl font-serif text-stone-900 leading-tight">
                About <span className="italic">Us</span>
              </h2>
            </header>
            
            <div className="space-y-10 text-stone-600 leading-relaxed font-light text-xl">
              {/* 核心宣言 */}
              <p className="font-medium text-stone-800 text-2xl leading-snug">
                We are passionate about creating hands-on math tools and educational toys that make learning fun for children aged 3–7.
              </p>
              
              {/* 创始人背景 */}
              <p>
                Growing up in China, our founder <span className="text-stone-900 font-normal underline decoration-orange-100 decoration-8 underline-offset-[-2px]">Yao</span> has always been fascinated by how children explore the world through play. Over the years, we’ve combined a love for education, thoughtful design, and innovative problem-solving to develop toys that are not only engaging but also help kids build essential math and cognitive skills.
              </p>

              {/* 视觉引用框 */}
              <div className="py-12 px-10 bg-[#FCFAF7] border-l-4 border-orange-200 rounded-r-[2.5rem] relative">
                <svg className="absolute top-6 left-6 w-12 h-12 text-orange-50/50 -z-0" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4z" />
                </svg>
                <p className="italic text-stone-800 font-serif text-2xl leading-relaxed relative z-10">
                  With experience working across cultures and collaborating with families and educators worldwide, we understand the importance of designing products that are both practical and inspiring. Every piece we create is designed to spark curiosity, creativity, and confidence in little learners, <span className="text-orange-400">turning every playtime into a meaningful learning experience.</span>
                </p>
              </div>

              {/* 愿景总结 */}
              <p className="pt-4 text-stone-900 font-medium">
                We believe learning should be joyful, hands-on, and full of wonder—and we’re here to bring that belief to children everywhere.
              </p>
            </div>
            
            <div className="pt-6">
              <div className="h-px w-24 bg-stone-100 mb-8" />
              <p className="text-sm uppercase tracking-widest text-stone-400 font-bold">Lumina Learning Design Studio</p>
            </div>
          </div>

          {/* 右侧形象展示 */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-stone-100 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Two children playing together with educational wooden toys" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* 装饰性浮层 */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
              
              <div className="mt-10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F1EB] flex items-center justify-center">
                  <span className="text-orange-400 font-serif italic text-xl">Y</span>
                </div>
                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">Design Philosophy</p>
                  <p className="text-stone-800 font-serif italic text-lg leading-tight">"Hands-on is heart-on."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
