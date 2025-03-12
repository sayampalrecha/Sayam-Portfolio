
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
            Passionate about uncovering patterns and solving problems with data.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection animation="fade-in-right" delay={300}>
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/lovable-uploads/015b5094-41d0-4d10-9e59-58dfaaa36a3d.png"
                  alt="Profile photo in Times Square"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left" delay={500}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-primary/90">
                I'm a Data Science student with a strong foundation in statistics, machine learning, and data analysis. I'm passionate about extracting meaningful insights from complex datasets and building models that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My approach combines rigorous statistical methods with cutting-edge machine learning techniques. I believe in the power of data to drive informed decision-making and create positive impact across industries.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Bachelor's in Artificial Intelligence and Data Science<br />
                    Currently Pursuing Master's in Data Science
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Skills</h3>
                  <p className="text-muted-foreground text-sm">
                    Python, R, SQL, Machine Learning<br />
                    Data Visualization, Statistical Analysis
                  </p>
                </div>
              </div>
              
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors link-underline"
                >
                  Let's collaborate on data projects
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
