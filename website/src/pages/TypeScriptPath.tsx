import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TypeScriptPath: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('fundamentals');
  
  const sections = [
    { id: 'fundamentals', name: 'Fundamentals' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'exercises', name: 'Exercises' }
  ];
  
  const topics = {
    fundamentals: [
      { id: 'introduction', title: 'Introduction to TypeScript', completed: false },
      { id: 'dynamic_vs_static_typing', title: 'Dynamic vs. Static Typing', completed: false },
      { id: 'typescript_setup', title: 'TypeScript Setup', completed: false },
      { id: 'typescript_types', title: 'Basic Types', completed: false },
    ],
    intermediate: [
      { id: 'combining_types', title: 'Combining Types', completed: false },
      { id: 'literal_types', title: 'Literal Types', completed: false },
      { id: 'typing_functions', title: 'Typing Functions', completed: false },
      { id: 'type_guards', title: 'Type Guards/Narrowing', completed: false },
    ],
    advanced: [
      { id: 'classes', title: 'Classes in TypeScript', completed: false },
      { id: 'generics', title: 'Generics', completed: false },
      { id: 'utility_types', title: 'Utility Types', completed: false },
    ],
    exercises: [
      { id: 'type_challenges', title: 'Type Challenges', completed: false },
      { id: 'typescript_project', title: 'TypeScript Project', completed: false },
    ]
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <img src="/assets/images/typescript_logo.png" alt="TypeScript Logo" className="w-16 h-16 mr-4" />
        <div>
          <h1 className="text-3xl font-bold">TypeScript Learning Path</h1>
          <p className="text-light-text/80">Add static typing to your JavaScript</p>
        </div>
      </div>

      <div className="bg-dark-card rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Your Progress</h2>
        <div className="w-full bg-dark-bg rounded-full h-4 mb-2">
          <div className="h-full rounded-full bg-ts-blue" style={{ width: '0%' }}></div>
        </div>
        <p className="text-light-text/80">0 of 13 topics completed (0%)</p>
      </div>

      <div className="flex flex-wrap mb-6 bg-dark-accent rounded-lg p-1">
        {sections.map(section => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeSection === section.id 
                ? 'bg-dark-card text-light-text' 
                : 'text-light-text/70 hover:text-light-text'
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className="bg-dark-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{sections.find(s => s.id === activeSection)?.name}</h2>
        <div className="space-y-2">
          {topics[activeSection as keyof typeof topics].map(topic => (
            <Link
              key={topic.id}
              to={`/topic/typescript/${topic.id}`}
              className="flex items-center justify-between p-4 rounded-md hover:bg-dark-accent transition-colors"
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                  topic.completed ? 'bg-green-500' : 'border-2 border-light-text/30'
                }`}>
                  {topic.completed && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={topic.completed ? 'text-light-text' : 'text-light-text/80'}>
                  {topic.title}
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-light-text/50" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeScriptPath;
