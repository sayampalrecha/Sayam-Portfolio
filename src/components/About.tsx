
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section
      id="about"
      className={cn(
        'py-24 px-6 relative overflow-hidden',
        className
      )}
    >
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="section-subtitle">About Me</div>
          <h2 className="section-title mb-16">
            Focused on creating products that people love to use.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection animation="fade-in-right" delay={300}>
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop"
                  alt="Portrait photo"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left" delay={500}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-primary/90">
                I'm a designer and developer with over 6 years of experience creating digital products for clients around the world. My approach combines clean aesthetics with functional design.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My work is guided by the philosophy that design should remove complexity, not add to it. Every pixel and line of code I craft is purposeful, aiming to create intuitive and enjoyable user experiences.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Bachelor of Design<br />
                    California Design Institute
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Senior Designer at Studio92<br />
                    Design Lead at Minimal Inc
                  </p>
                </div>
              </div>
              
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors link-underline"
                >
                  Let's work together
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
