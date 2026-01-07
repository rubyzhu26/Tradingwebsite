
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact-page" className="py-32 px-6 min-h-[80vh] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-4 block">Let's Connect</span>
              <h2 className="text-7xl font-serif text-stone-900 leading-none">Reach <br /><span className="italic">Out</span></h2>
            </div>
            
            <p className="text-2xl text-stone-500 font-light leading-relaxed">
              Whether you're an educator, a parent, or a manufacturing partner, we're always excited to discuss new ways to make math joyful.
            </p>

            <div className="space-y-8">
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">Email Us</p>
                <a href="mailto:zhumaotou26@gmail.com" className="text-3xl text-stone-900 font-serif hover:text-orange-400 transition-colors border-b border-stone-100 pb-2 inline-block">
                  zhumaotou26@gmail.com
                </a>
              </div>

              <div className="group">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">Call Us</p>
                <a href="tel:+8613636532261" className="text-3xl text-stone-900 font-serif hover:text-orange-400 transition-colors border-b border-stone-100 pb-2 inline-block">
                  +86-13636532261
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3">Headquarters</p>
                  <p className="text-stone-600 text-lg">Guangdong, China<br />The heart of manufacturing.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3">Follow Along</p>
                  <div className="flex flex-col space-y-2 text-stone-600 font-medium">
                    <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-orange-400 transition-colors">WeChat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FCFAF7] rounded-[3rem] p-12 border border-stone-100 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-stone-50">
              <svg className="w-10 h-10 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <form className="space-y-8 pt-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400 font-bold px-1">Your Name</label>
                <input type="text" className="w-full bg-white border-b-2 border-stone-100 p-4 focus:outline-none focus:border-orange-200 transition-colors text-lg" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400 font-bold px-1">Email Address</label>
                <input type="email" className="w-full bg-white border-b-2 border-stone-100 p-4 focus:outline-none focus:border-orange-200 transition-colors text-lg" placeholder="hello@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400 font-bold px-1">Message</label>
                <textarea rows={4} className="w-full bg-white border-b-2 border-stone-100 p-4 focus:outline-none focus:border-orange-200 transition-colors text-lg resize-none" placeholder="How can we help you?" />
              </div>
              <button className="w-full py-5 bg-stone-900 text-white rounded-2xl text-lg font-medium hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
