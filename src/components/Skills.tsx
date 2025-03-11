
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { 
  Paintbrush, 
  Code2, 
  Lightbulb, 
  Smartphone, 
  LineChart, 
  Globe 
} from 'lucide-react';

interface SkillsProps {
  className?: string;
}

const skillsData = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces focusing on user needs and business goals.',
    icon: Paintbrush,
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive websites with modern frameworks like React and Vue.',
    icon: Code2,
  },
  {
    title: 'Product Strategy',
    description: 'Defining product vision and roadmap to achieve measurable objectives.',
    icon: Lightbulb,
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform applications for iOS and Android devices.',
    icon: Smartphone,
  },
  {
    title: 'Data Visualization',
    description: 'Presenting complex data in intuitive, actionable visual formats.',
    icon: LineChart,
  },
  {
    title: 'SEO Optimization',
    description: 'Improving site visibility and search rankings for organic traffic growth.',
    icon: Globe,
  },
];

const Skills: React.FC<SkillsProps> = ({ className }) => {
  return (
    <section
      id="skills"
      className={cn(
        'py-24 px-6 relative',
        className
      )}
    >
      {/* Decorative Elements */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-[15%] left-[5%] w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="section-subtitle">Expertise</div>
          <h2 className="section-title max-w-2xl mb-16">
            Using design and technology to solve complex problems
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in" 
              delay={300 + (index * 100)}
            >
              <div className="p-6 rounded-xl bg-white border border-border/50 shadow-sm hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg mb-5">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
