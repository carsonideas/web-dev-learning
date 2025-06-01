import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark-accent shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-light-text flex items-center">
              <span className="text-primary">Web</span>
              <span className="text-secondary">Dev</span>
              <span className="ml-1">Learning</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-2">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/javascript" className="nav-link">JavaScript</Link>
            <Link to="/typescript" className="nav-link">TypeScript</Link>
            <Link to="/html" className="nav-link">HTML</Link>
            <Link to="/css" className="nav-link">CSS</Link>
            <Link to="/exercises" className="nav-link">Exercises</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/installation" className="nav-link">Installation</Link>
          </div>
          <div className="md:hidden">
            <button className="text-light-text focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
