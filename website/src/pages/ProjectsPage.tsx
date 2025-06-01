import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('beginner');
  
  const categories = [
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];
  
  const projects = {
    beginner: [
      { 
        id: 'todo_list', 
        title: 'To-Do List Application', 
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Build a simple to-do list application with the ability to add, complete, and delete tasks.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/todo_list_project'
      },
      { 
        id: 'calculator', 
        title: 'JavaScript Calculator', 
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Create a functional calculator with basic arithmetic operations.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/calculator_project'
      },
      { 
        id: 'landing_page', 
        title: 'Responsive Landing Page', 
        technologies: ['HTML', 'CSS'],
        description: 'Design and build a responsive landing page for a fictional product or service.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/landing_page_project'
      }
    ],
    intermediate: [
      { 
        id: 'weather_app', 
        title: 'Weather Application', 
        technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
        description: 'Build a weather app that fetches and displays weather data from an external API.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/weather_app_project'
      },
      { 
        id: 'quiz_app', 
        title: 'Interactive Quiz App', 
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Create an interactive quiz application with multiple-choice questions and score tracking.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/quiz_app_project'
      },
      { 
        id: 'portfolio', 
        title: 'Personal Portfolio Website', 
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'Design and build a personal portfolio website to showcase your projects and skills.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/portfolio_project'
      }
    ],
    advanced: [
      { 
        id: 'social_media', 
        title: 'Social Media Dashboard', 
        technologies: ['React', 'TypeScript', 'CSS'],
        description: 'Build a social media dashboard with React and TypeScript, featuring data visualization and user interactions.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/social_media_dashboard_project'
      },
      { 
        id: 'ecommerce', 
        title: 'E-commerce Product Page', 
        technologies: ['React', 'TypeScript', 'CSS'],
        description: 'Create an e-commerce product page with image gallery, product selection, and cart functionality.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/ecommerce_project'
      },
      { 
        id: 'blog_platform', 
        title: 'Blog Platform', 
        technologies: ['React', 'TypeScript', 'Node.js'],
        description: 'Build a full-stack blog platform with user authentication, post creation, and commenting features.',
        image: '/assets/images/dashboard_preview.png',
        path: '/topic/projects/blog_platform_project'
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Project-Based Learning</h1>
        <p className="text-light-text/80">Apply your skills by building real-world projects with step-by-step guidance</p>
      </div>

      <div className="flex flex-wrap mb-6 bg-dark-accent rounded-lg p-1">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category.id 
                ? 'bg-dark-card text-light-text' 
                : 'text-light-text/70 hover:text-light-text'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects[activeCategory as keyof typeof projects].map(project => (
          <Link
            key={project.id}
            to={project.path}
            className="bg-dark-card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-light-text/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-dark-accent rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Ready for a challenge?</h2>
            <p className="text-light-text/80">
              After completing these guided projects, try building something on your own to solidify your skills.
            </p>
          </div>
          <button className="btn-primary">
            View Project Ideas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
