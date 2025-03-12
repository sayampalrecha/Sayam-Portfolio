
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      id="home"
      className={cn(
        'relative min-h-[100vh] flex flex-col justify-center items-center py-20 px-6',
        className
      )}
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 right-[20%] w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-[15%] w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in" style={{ animationDelay: '300ms' }}>
          Data Science Student
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-primary tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
          Transforming data into meaningful insights
        </h1>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg animate-fade-in" style={{ animationDelay: '700ms' }}>
          I combine statistical analysis with machine learning techniques to extract valuable insights from complex datasets and build data-driven solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <a 
            href="#projects" 
            className="bg-primary text-white px-8 py-3.5 rounded-lg font-medium transition-all hover:translate-y-[-1px] hover:shadow-md active:translate-y-[1px]"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="bg-secondary text-primary px-8 py-3.5 rounded-lg font-medium transition-all hover:translate-y-[-1px] hover:shadow-sm active:translate-y-[1px]"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
