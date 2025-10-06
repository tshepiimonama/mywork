import React from 'react';

const SquiggleSvg = () => (
    <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-8 -left-8 w-20 h-20">
        <path d="M32.9643 7.82348C33.0233 7.33353 32.8647 6.84358 32.5369 6.47164C31.595 5.40576 30.019 5.58378 29.281 6.81172C25.2133 13.5615 24.5294 21.4393 27.4215 28.6011C34.7932 46.8525 54.382 56.59 72.6334 49.2182C74.027 48.6943 75.5296 49.3282 76.0535 50.7218C76.5775 52.1154 75.9436 53.618 74.55 54.1419C54.1673 62.3617 32.4468 51.5699 24.129 31.2524C20.833 23.0366 21.5759 14.1558 26.0475 7.00777L26.1105 6.91775C26.1105 6.91775 32.8463 7.97144 32.9643 7.82348Z" fill="#FDC34D" stroke="#FDC34D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark-2">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                <img 
                    src="https://picsum.photos/seed/working/800/1000" 
                    alt="Tshepiso working on a project" 
                    className="object-cover w-full h-full rounded-lg shadow-2xl"
                />
                <div className="absolute -left-8 -bottom-8 bg-black/30 backdrop-blur-sm p-5 rounded-lg text-center shadow-lg">
                    <h3 className="text-4xl font-bold text-white">5+</h3>
                    <p className="text-brand-gray">Years of Success</p>
                </div>
                <div className="absolute -right-8 top-16 bg-black/30 backdrop-blur-sm p-5 rounded-lg text-center shadow-lg">
                    <h3 className="text-4xl font-bold text-white">100+</h3>
                    <p className="text-brand-gray">Total Projects</p>
                </div>
                <SquiggleSvg />
            </div>
          </div>
          <div>
            <p className="text-brand-primary font-semibold mb-2">I'M A CONTENT CREATOR</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">I Can Create Anything You Want</h2>
            <p className="text-lg text-brand-gray mb-4 leading-relaxed">
              My name is Tshepiso Promise Monama, and I operate at the creative intersection of high fashion and high technology. With a passion for aesthetics and a mind for logic, I craft compelling digital narratives that resonate and inspire.
            </p>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              From curating visually stunning social media campaigns to exploring how technology is reshaping the fashion industry, my work is a testament to the idea that creativity and code are not mutually exclusive.
            </p>
            <a href="#contact" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;