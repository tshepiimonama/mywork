import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark">
      <div className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-brand-gray">
            &copy; {currentYear} Tshepiso Promise Monama. All Rights Reserved.
          </p>
          <p className="text-sm text-brand-gray mt-2 sm:mt-0">
            Designed with ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;