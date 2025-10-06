import React, { useState, useEffect } from 'react';
import { DownloadIcon, MenuIcon, CloseIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const NavLinksList: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={mobile 
                ? "block py-3 text-lg text-brand-light hover:text-brand-primary transition-colors duration-300" 
                : "text-brand-light hover:text-brand-primary transition-colors duration-300"}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold tracking-wider text-white z-50">
          TPM<span className="text-brand-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            <NavLinksList />
          </ul>
          <a href="#" className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 text-sm">
            <DownloadIcon className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-brand-light z-50">
          {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-brand-dark/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="container mx-auto px-6 pt-24 h-full">
            <ul className="flex flex-col items-center justify-center h-full space-y-6">
                <NavLinksList mobile />
                <li>
                    <a href="#" className="mt-6 inline-block bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                        Download CV
                    </a>
                </li>
            </ul>
          </div>
      </div>
    </header>
  );
};

export default Header;