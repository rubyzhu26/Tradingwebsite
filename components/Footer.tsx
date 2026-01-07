
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-md">
          <h2 className="text-4xl font-serif text-white mb-8">Let's build something <span className="italic">curious</span> together.</h2>
          <p className="text-lg mb-8 font-light">
            Whether you are looking for an educational tool design and manufacturing supplier, or want to explore innovation in early math learning, we look forward to hearing from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-widest font-bold">
          <div className="space-y-6">
            <h3 className="text-stone-600">Connect</h3>
            <ul className="space-y-6">
              {/* Contact Links */}
              <li>
                <a href="mailto:zhumaotou26@gmail.com" className="text-white hover:text-orange-300 transition-colors normal-case text-base font-light border-b border-stone-800 pb-1">
                  zhumaotou26@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8613636532261" className="text-white hover:text-orange-300 transition-colors normal-case text-base font-light border-b border-stone-800 pb-1">
                  +86-13636532261
                </a>
              </li>
              {/* Social Links */}
              <li className="pt-4 flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">WeChat</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-stone-600">Studio</h3>
            <p className="font-normal normal-case leading-relaxed text-base font-light text-stone-300">
              Headquartered in China.<br />
              Providing global design<br />
              and manufacturing services.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-24 mt-24 border-t border-stone-800 flex justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Lumina Learning Design & Manufacturing.</p>
        <p>Made for curious minds.</p>
      </div>
    </footer>
  );
};

export default Footer;
