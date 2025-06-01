import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedLessonProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

const FeaturedLesson: React.FC<FeaturedLessonProps> = ({ title, description, icon, path }) => {
  return (
    <Link to={path} className="block bg-dark-card rounded-lg p-4 hover:bg-dark-accent transition-colors">
      <div className="flex items-center">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-light-text/80">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedLesson;
