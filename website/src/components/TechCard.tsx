import React from 'react';
import { Link } from 'react-router-dom';

interface TechCardProps {
  title: string;
  icon: string;
  progress: number;
  type: 'js' | 'ts' | 'html' | 'css';
  path: string;
}

const TechCard: React.FC<TechCardProps> = ({ title, icon, progress, type, path }) => {
  return (
    <Link to={path} className={`tech-card ${type}`}>
      <img src={icon} alt={`${title} logo`} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="w-full bg-dark-bg rounded-full h-2 mb-2">
        <div 
          className={`h-full rounded-full ${
            type === 'js' ? 'bg-js-yellow' : 
            type === 'ts' ? 'bg-ts-blue' : 
            type === 'html' ? 'bg-html-orange' : 
            'bg-css-blue'
          }`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-light-text/80">{progress}% Complete</p>
    </Link>
  );
};

export default TechCard;
