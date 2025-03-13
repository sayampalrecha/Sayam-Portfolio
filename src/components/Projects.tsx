
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  className?: string;
}

const projectsData = [
  {
    title: 'Black-Scholes-Algorithm Option Pricing',
    description: 'Python Implementation and Streamlit Interface for understanding and using B-S Algorithm',
    imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Machine Learning', 'Feature Engineering', 'Financial Markets'],
    link: 'https://github.com/sayampalrecha/Black_scholes_algorithm',
  },
  {
    title: 'WeedGuard-Smart Weed Detection',
    description: 'Smart Weed Detection using YOLO based model',
    imageSrc: 'https://www.croptracker.com/images/blog/Robots_in_Ag/computervision.webp',
    tags: ['Computer Vision', 'YOLO', 'Transfer Learning'],
    link: 'https://github.com/sayampalrecha/WeedGuard-Smart-Weed-Detection-Using-Computer-Vision',
  },
  {
    title: 'Medical Data Visualization',
    description: 'Data visualization of medical data using static and dynamic plots',
    imageSrc: 'https://images.unsplash.com/photo-1584291527935-456e8e2dd734?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,
    tags: ['Data Visualization', 'Python', 'Plotly','Matplotlib & Seaborn'],
    link: '#',
  },
  {
    title: 'Smart Home Control System',
    description: 'IoT interface allowing users to manage connected devices with voice commands and automation.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
    tags: ['IoT', 'UX Design', 'Swift'],
    link: '#',
  },
];

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <section
      id="projects"
      className={cn(
        'py-24 px-6 bg-secondary/50',
        className
      )}
    >
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-subtitle">Recent Work</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <h2 className="section-title mb-4 md:mb-0">
              Selected projects I've worked on
            </h2>
            <a
              href="#contact"
              className="text-accent font-medium hover:text-accent/80 transition-colors link-underline"
            >
              Interested in working together?
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={300 + (index * 100)}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
