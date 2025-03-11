
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  className?: string;
}

const projectsData = [
  {
    title: 'Modern E-Commerce Platform',
    description: 'A minimalist shopping experience with focus on product photography and intuitive user interactions.',
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop',
    tags: ['UI/UX', 'React', 'Node.js'],
    link: '#',
  },
  {
    title: 'Financial Dashboard',
    description: 'Data visualization interface for tracking investments and analyzing market trends with real-time updates.',
    imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop',
    tags: ['Dashboard', 'TypeScript', 'GraphQL'],
    link: '#',
  },
  {
    title: 'Health & Wellness App',
    description: 'Mobile application focused on mental wellbeing, featuring guided meditations and mood tracking.',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
    tags: ['Mobile', 'React Native', 'Firebase'],
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
