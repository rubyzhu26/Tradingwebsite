
import React, { useState } from 'react';
import { generateMathActivity } from '../services/geminiService';
import { ActivitySuggestion } from '../types';

interface ActivityGeneratorProps {
  isFullPage?: boolean;
}

const ActivityGenerator: React.FC<ActivityGeneratorProps> = ({ isFullPage }) => {
  const [item, setItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<ActivitySuggestion | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const result = await generateMathActivity(item);
      setSuggestion(result);
    } catch (err) {
      setError('The play lab is resting. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lab" className={`${isFullPage ? 'py-32' : 'py-24'} px-6 max-w-5xl mx-auto min-h-[80vh]`}>
      <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-stone-100 shadow-2xl shadow-stone-200/40">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-4 block">Interactive Play Lab</span>
          <h2 className="text-6xl font-serif text-stone-900 mb-6">Prompt a Play Idea</h2>
          <p className="text-stone-500 text-xl font-light max-w-xl mx-auto leading-relaxed">
            Everyday objects are invitations to learn. Tell me what's nearby (like spoons or stones), and I'll suggest a mathematical adventure.
          </p>
        </div>

        <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-16 max-w-2xl mx-auto">
          <input 
            type="text" 
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="e.g., Colorful rubber bands"
            className="flex-1 px-8 py-5 rounded-full border border-stone-200 focus:outline-none focus:ring-4 focus:ring-orange-50 transition-all text-xl"
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-10 py-5 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all disabled:opacity-50 shadow-lg shadow-stone-200"
          >
            {loading ? 'Thinking...' : 'Generate Lab Idea'}
          </button>
        </form>

        {error && <p className="text-red-400 text-center mb-8">{error}</p>}

        {suggestion && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 bg-[#FDFBF9] rounded-[2.5rem] p-10 md:p-14 border border-stone-100">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-white rounded-full text-sm font-medium text-orange-400 border border-orange-50">Concept: {suggestion.mathConcept}</span>
              <span className="px-4 py-1.5 bg-white rounded-full text-sm font-medium text-stone-400 border border-stone-50">Age: {suggestion.ageRange}</span>
            </div>
            
            <h3 className="text-4xl font-serif text-stone-900 mb-10 underline decoration-orange-200 decoration-8 underline-offset-8">{suggestion.title}</h3>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300 mb-6 pb-2 border-b border-stone-100">The Discovery Kit</h4>
                <ul className="space-y-4">
                  {suggestion.materials.map((m, i) => (
                    <li key={i} className="flex items-center gap-4 text-stone-600 text-lg">
                      <div className="w-2 h-2 rounded-full bg-orange-300" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300 mb-6 pb-2 border-b border-stone-100">Step-by-Step Exploration</h4>
                <ol className="space-y-6">
                  {suggestion.instructions.map((step, i) => (
                    <li key={i} className="flex gap-5 text-stone-600 text-lg leading-relaxed">
                      <span className="font-serif italic text-orange-400 font-bold text-2xl">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivityGenerator;
