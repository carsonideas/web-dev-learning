import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-accent py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-light-text/80 text-sm">
              © {new Date().getFullYear()} WebDev Learning Platform. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-light-text/80 hover:text-light-text text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-light-text/80 hover:text-light-text text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-light-text/80 hover:text-light-text text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
