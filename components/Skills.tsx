import React from 'react';
import type { Skill } from '../types';
import { ContentCreationIcon, DigitalStrategyIcon, WebDevIcon } from './icons/Icons';

interface Service extends Skill {
  bgColor: string;
}

const services: Service[] = [
  {
    name: 'Pixel Perfect',
    description: 'Most common methods for designing websites that work well on desktop and mobile.',
    icon: <ContentCreationIcon className="w-8 h-8 text-white" />,
    bgColor: 'bg-brand-primary'
  },
  {
    name: 'High Quality',
    description: 'I deliver high-quality work that meets the needs of my clients and their users.',
    icon: <WebDevIcon className="w-8 h-8 text-white" />,
    bgColor: 'bg-brand-green'
  },
  {
    name: 'Awesome Idea',
    description: 'I bring creative and innovative ideas to every project I work on.',
    icon: <DigitalStrategyIcon className="w-8 h-8 text-white" />,
    bgColor: 'bg-brand-yellow'
  },
];

const Skills: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.name} className="p-8 text-center bg-brand-dark-2 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className={`inline-block p-5 rounded-full mb-6 ${service.bgColor}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-serif text-white">{service.name}</h3>
              <p className="text-brand-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;