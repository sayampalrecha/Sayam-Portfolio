
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section
      id="contact"
      className={cn(
        'py-24 px-6 bg-primary text-white',
        className
      )}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-in-right">
            <div className="section-subtitle text-white/70">Get In Touch</div>
            <h2 className="text-3xl font-display font-medium tracking-tight text-white mb-8">
              Let's discuss your next project
            </h2>
            
            <p className="text-white/80 mb-12 max-w-md">
              I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just want to say hello, then get in touch.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <a href="mailto:sayampalrecha1@gmail.com" className="text-white/70 hover:text-white transition-colors">
                    sayampalrecha1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <a href="tel:+17039289345" className="text-white/70 hover:text-white transition-colors">
                    +1 (703) 928-9345
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-white/70">
                    Washington, DC
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={300}>
            <form className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-primary text-2xl font-medium mb-6">Send a message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary/80 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary/80 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-medium py-3.5 px-4 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
