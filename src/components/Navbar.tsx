
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-5 px-8 backdrop-blur-lg',
        scrolled ? 'bg-white/80 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-primary font-display font-medium text-xl tracking-tight"
          >
            portfolio<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary/80 hover:text-primary text-sm font-medium transition-colors duration-200 link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center text-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XIcon size={24} className="transition-all" />
            ) : (
              <MenuIcon size={24} className="transition-all" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden absolute top-full left-0 right-0 glass-panel overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen
              ? 'max-h-[300px] opacity-100 border-t'
              : 'max-h-0 opacity-0 border-t border-transparent'
          )}
        >
          <div className="px-8 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary/80 hover:text-primary text-sm font-medium block w-full py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
