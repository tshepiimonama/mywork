import React from 'react';
import { InstagramIcon, LinkedInIcon, TwitterIcon } from './icons/Icons';

const BrushStrokeSvg = () => (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 -z-10">
        <defs>
            <filter id="f" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="cm" />
                <feComposite in="SourceGraphic" in2="cm" operator="atop"/>
            </filter>
        </defs>
        <path d="M86.2,56.1c0,0,298.4,1.8,333.6,2.7s61.5-3.6,50.2,43.1S382.4,196.4,369,219.8s-134.1,89.9-158.7,81.1 c-24.6-8.8-9.8-100.2-9.8-100.2s-77.9-12.5-101.3-8.8s-53.4,61.5-53.4,61.5s-23.4,75.7,2.7,84.7s147.9-20.5,191.8-31.2 s100.2-34.7,142.5-16.9s32.1,82.9,6.2,103.8s-227,47.7-271.8,43.1S3,429.3,3,386.2s3.6-224.3,8.8-251.2S33.8,47.3,86.2,56.1z" fill="#FFF" filter="url(#f)" />
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <div className="text-center md:text-left">
            <span className="text-brand-primary font-semibold text-lg uppercase tracking-wider">Hello, I'm</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white my-3 font-serif">Tshepiso Promise Monama</h1>
            <p className="text-lg text-brand-gray mb-6">
              I'm a creative designer based in South Africa, and I'm very passionate and dedicated to my work.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-6">
                <a href="#about" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                    About Me
                </a>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-brand-gray hover:text-white"><InstagramIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-brand-gray hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-brand-gray hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
                </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-[500px]">
             <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] z-10">
                {/* Fix: Removed invalid 'border' attribute and duplicate 'alt' attribute. */}
                <img 
                    src="https://i.ibb.co/cKHbHHwX/princess.jpg"
                    alt="Tshepiso Promise Monama"
                    className="object-cover w-full h-full rounded-lg shadow-2xl"
                />
             </div>
             <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] z-0">
                <BrushStrokeSvg />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;