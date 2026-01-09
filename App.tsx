
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Project } from './types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luminous Magnetic Tiles',
    category: 'Geometric Construction',
    description: 'Translucent magnetic blocks designed for exploring 3D geometry, symmetry, and color theory through light play.',
    imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Sensory Counting Abacus',
    category: 'Tactile Arithmetic',
    description: 'A large-scale counting frame with textured beads to help children visualize base-ten systems and early calculations.',
    imageUrl: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Precision Inlay Boards',
    category: 'Spatial Reasoning',
    description: 'High-quality geometric inset boards for matching shapes, fostering fine motor skills and foundational spatial awareness.',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800'
  }
];

type View = 'home' | 'philosophy' | 'about' | 'work' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    
    if (hash === 'about-section') {
      setCurrentView('home');
      return;
    }

    const validViews: View[] = ['philosophy', 'about', 'work', 'contact'];
    if (validViews.includes(hash as View)) {
      setCurrentView(hash as View);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (hash === '' || hash === '/') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); 

    return () => window.removeEventListener('hashchange', handleNavigation);
  }, [handleNavigation]);

  const renderContent = () => {
    switch (currentView) {
      case 'philosophy':
        return <div key="philosophy" className="page-transition"><Philosophy isFullPage /></div>;
      case 'about':
        return <div key="about" className="page-transition"><About /></div>;
      case 'work':
        return (
          <div key="work" className="page-transition">
            <section className="py-24 px-6 max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 block">Gallery</span>
                  <h2 className="text-6xl font-serif text-stone-900">Our Work</h2>
                </div>
                <p className="text-stone-500 max-w-sm text-lg leading-relaxed italic">
                  A selection of tools designed to transform abstract mathematical concepts into tangible tactile experiences.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          </div>
        );
      case 'contact':
        return <div key="contact" className="page-transition"><Contact /></div>;
      default:
        return (
          <div key="home" className="page-transition">
            <Hero />
            <Philosophy />
            <section className="py-24 px-6 max-w-6xl mx-auto border-t border-stone-100">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3 block">Gallery</span>
                  <h2 className="text-6xl font-serif text-stone-900">Featured Tools</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
            <About />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="pt-20 flex-grow min-h-screen">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
