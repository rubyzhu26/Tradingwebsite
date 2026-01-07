
import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl bg-stone-100 mb-6 aspect-[4/5] relative">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors" />
      </div>
      <span className="text-xs uppercase tracking-widest text-stone-400 font-bold block mb-2">{project.category}</span>
      <h3 className="text-2xl font-serif text-stone-900 group-hover:text-orange-400 transition-colors mb-2">{project.title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
