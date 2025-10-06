import React from 'react';
import { InstagramIcon, LinkedInIcon, TwitterIcon } from './icons/Icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-primary transition-colors duration-300">
    {children}
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-dark-2">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">Let's Create Together</h2>
        <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <a href="mailto:hello@tshepisomonama.com" className="text-2xl md:text-3xl text-white font-medium hover:text-brand-primary transition-colors duration-300">
          hello@tshepisomonama.com
        </a>
        <div className="flex justify-center space-x-6 mt-12">
            <SocialLink href="#"><InstagramIcon className="w-7 h-7" /></SocialLink>
            <SocialLink href="#"><TwitterIcon className="w-7 h-7" /></SocialLink>
            <SocialLink href="#"><LinkedInIcon className="w-7 h-7" /></SocialLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;