import React from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Urban Elegance Campaign', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/urban1/800/600', link: '#' },
  { id: 2, title: 'Tech in Textiles', category: 'Blog Post', imageUrl: 'https://picsum.photos/seed/techfashion/800/1000', link: '#' },
  { id: 3, title: 'Minimalist Lookbook', category: 'Video', imageUrl: 'https://picsum.photos/seed/minimal/800/800', link: '#' },
  { id: 4, title: 'AI-Powered Style Guide', category: 'Project', imageUrl: 'https://picsum.photos/seed/aistyle/800/1200', link: '#' },
  { id: 5, title: 'Seasonal Trends Report', category: 'Content Creation', imageUrl: 'https://picsum.photos/seed/trends/800/600', link: '#' },
  { id: 6, title: 'Behind the Code: Fashion App', category: 'Development', imageUrl: 'https://picsum.photos/seed/codefashion/800/900', link: '#' },
];

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-lg h-full shadow-lg">
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
      <div>
        <h3 className="text-white text-xl font-bold font-serif">{item.title}</h3>
        <p className="text-gray-300 text-sm">{item.category}</p>
      </div>
    </div>
  </a>
);

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <p className="text-brand-primary font-semibold mb-2">PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">My Amazing Works</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">A selection of my creative and technical projects that showcase my skills in fashion and IT.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4" style={{gridAutoRows: '24rem'}}>
            <div className="md:col-span-4">
                {portfolioItems[0] && <PortfolioCard item={portfolioItems[0]} />}
            </div>
             <div className="md:col-span-2">
                {portfolioItems[1] && <PortfolioCard item={portfolioItems[1]} />}
            </div>
            <div className="md:col-span-2">
                {portfolioItems[2] && <PortfolioCard item={portfolioItems[2]} />}
            </div>
            <div className="md:col-span-4">
                {portfolioItems[3] && <PortfolioCard item={portfolioItems[3]} />}
            </div>
             <div className="md:col-span-3">
                {portfolioItems[4] && <PortfolioCard item={portfolioItems[4]} />}
            </div>
            <div className="md:col-span-3">
                {portfolioItems[5] && <PortfolioCard item={portfolioItems[5]} />}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;