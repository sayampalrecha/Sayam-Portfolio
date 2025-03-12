
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { 
  BarChart, 
  Code2, 
  Database, 
  LineChart, 
  BrainCircuit, 
  PieChart 
} from 'lucide-react';

interface SkillsProps {
  className?: string;
}

const skillsData = [
  {
    title: 'Data Analysis',
    description: 'Exploring and analyzing complex datasets to extract valuable insights and patterns.',
    icon: BarChart,
  },
  {
    title: 'Machine Learning',
    description: 'Building predictive models and algorithms that learn from data and improve over time.',
    icon: BrainCircuit,
  },
  {
    title: 'Statistical Analysis',
    description: 'Applying statistical methods to interpret data and support decision-making processes.',
    icon: LineChart,
  },
  {
    title: 'Python Programming',
    description: 'Proficient in Python and libraries like Pandas, NumPy, scikit-learn, and TensorFlow.',
    icon: Code2,
  },
  {
    title: 'Data Visualization',
    description: 'Creating clear, effective visualizations to communicate complex data insights.',
    icon: PieChart,
  },
  {
    title: 'Database Management',
    description: 'Working with SQL and NoSQL databases to store, retrieve, and analyze large datasets.',
    icon: Database,
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
            Using data science to solve complex problems and drive insights
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
