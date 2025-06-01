import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';

const ExercisesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('javascript');
  
  const categories = [
    { id: 'javascript', name: 'JavaScript', color: 'js-yellow' },
    { id: 'typescript', name: 'TypeScript', color: 'ts-blue' },
    { id: 'html', name: 'HTML', color: 'html-orange' },
    { id: 'css', name: 'CSS', color: 'css-blue' }
  ];
  
  const exercises = {
    javascript: [
      { 
        id: 'fizzbuzz', 
        title: 'FizzBuzz Challenge', 
        difficulty: 'Beginner',
        description: 'Write a program that prints numbers from 1 to 100, but for multiples of 3 print "Fizz" and for multiples of 5 print "Buzz".',
        path: '/topic/exercises/javascript_fizzbuzz'
      },
      { 
        id: 'palindrome', 
        title: 'Palindrome Checker', 
        difficulty: 'Beginner',
        description: 'Create a function that checks if a given string is a palindrome (reads the same backward as forward).',
        path: '/topic/exercises/javascript_palindrome'
      },
      { 
        id: 'array_methods', 
        title: 'Array Methods Practice', 
        difficulty: 'Intermediate',
        description: 'Practice using array methods like map, filter, reduce, and sort to manipulate data.',
        path: '/topic/exercises/javascript_array_methods'
      },
      { 
        id: 'dom_manipulation', 
        title: 'DOM Manipulation Challenge', 
        difficulty: 'Intermediate',
        description: 'Create, modify, and delete DOM elements based on user interactions.',
        path: '/topic/exercises/javascript_dom_manipulation'
      },
      { 
        id: 'async_fetch', 
        title: 'Async/Await with Fetch API', 
        difficulty: 'Advanced',
        description: 'Use async/await and the Fetch API to retrieve and display data from an external API.',
        path: '/topic/exercises/javascript_async_fetch'
      }
    ],
    typescript: [
      { 
        id: 'type_basics', 
        title: 'TypeScript Type Basics', 
        difficulty: 'Beginner',
        description: 'Practice defining and using basic TypeScript types.',
        path: '/topic/exercises/typescript_type_basics'
      },
      { 
        id: 'interfaces', 
        title: 'Interfaces and Type Aliases', 
        difficulty: 'Intermediate',
        description: 'Create and implement interfaces and type aliases for complex data structures.',
        path: '/topic/exercises/typescript_interfaces'
      },
      { 
        id: 'generics', 
        title: 'Generics Challenge', 
        difficulty: 'Advanced',
        description: 'Implement generic types and functions to create reusable, type-safe components.',
        path: '/topic/exercises/typescript_generics'
      }
    ],
    html: [
      { 
        id: 'structure', 
        title: 'HTML Document Structure', 
        difficulty: 'Beginner',
        description: 'Create a properly structured HTML document with all necessary elements.',
        path: '/topic/exercises/html_structure'
      },
      { 
        id: 'forms', 
        title: 'HTML Forms Challenge', 
        difficulty: 'Intermediate',
        description: 'Build a complex form with various input types and proper validation attributes.',
        path: '/topic/exercises/html_forms'
      },
      { 
        id: 'semantic', 
        title: 'Semantic HTML Layout', 
        difficulty: 'Intermediate',
        description: 'Create a webpage layout using semantic HTML elements for better accessibility and SEO.',
        path: '/topic/exercises/html_semantic'
      }
    ],
    css: [
      { 
        id: 'selectors', 
        title: 'CSS Selectors Practice', 
        difficulty: 'Beginner',
        description: 'Use various CSS selectors to target and style specific elements.',
        path: '/topic/exercises/css_selectors'
      },
      { 
        id: 'flexbox', 
        title: 'Flexbox Layout Challenge', 
        difficulty: 'Intermediate',
        description: 'Create a responsive layout using CSS Flexbox.',
        path: '/topic/exercises/css_flexbox'
      },
      { 
        id: 'grid', 
        title: 'CSS Grid Challenge', 
        difficulty: 'Intermediate',
        description: 'Build a complex grid layout with nested grids and responsive behavior.',
        path: '/topic/exercises/css_grid'
      },
      { 
        id: 'animations', 
        title: 'CSS Animations', 
        difficulty: 'Advanced',
        description: 'Create engaging animations using CSS keyframes and transitions.',
        path: '/topic/exercises/css_animations'
      }
    ]
  };

  const sampleCode = `// Try solving the FizzBuzz challenge
function fizzBuzz() {
  // Write your code here
  for (let i = 1; i <= 100; i++) {
    // Your solution
  }
}

fizzBuzz();`;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Interactive Exercises</h1>
        <p className="text-light-text/80">Practice your skills with these hands-on coding challenges</p>
      </div>

      <div className="flex flex-wrap mb-6 bg-dark-accent rounded-lg p-1">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category.id 
                ? `bg-dark-card text-${category.color}` 
                : 'text-light-text/70 hover:text-light-text'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-dark-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{categories.find(c => c.id === activeCategory)?.name} Exercises</h2>
            <div className="space-y-4">
              {exercises[activeCategory as keyof typeof exercises].map(exercise => (
                <Link
                  key={exercise.id}
                  to={exercise.path}
                  className="block bg-dark-accent hover:bg-dark-accent/70 rounded-lg p-4 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exercise.title}</h3>
                      <p className="text-light-text/80 mb-2">{exercise.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        exercise.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        exercise.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-light-text/50 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-dark-card rounded-lg overflow-hidden sticky top-4">
            <div className="p-4 border-b border-dark-accent">
              <h3 className="text-xl font-bold">Try It Now</h3>
              <p className="text-light-text/80 text-sm">Start coding right away</p>
            </div>
            <CodeEditor code={sampleCode} language="javascript" />
            <div className="p-4 flex space-x-2">
              <button className="btn-primary flex-1">Run Code</button>
              <button className="btn-secondary flex-1">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
