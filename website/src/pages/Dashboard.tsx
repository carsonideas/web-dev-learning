import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressCircle from '../components/ProgressCircle';
import TechCard from '../components/TechCard';
import FeaturedLesson from '../components/FeaturedLesson';
import CodeEditor from '../components/CodeEditor';

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState('Learner');
  const [overallProgress, setOverallProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading user data and progress
    setTimeout(() => {
      setUserName('Beginner');
      setOverallProgress(25);
    }, 500);
  }, []);

  const featuredLessons = [
    {
      id: 'javascript-basics',
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript programming',
      icon: '/assets/images/javascript_logo.png',
      path: '/topic/javascript/introduction'
    },
    {
      id: 'html-intro',
      title: 'Introduction to HTML',
      description: 'Get started with HTML structure and elements',
      icon: '/assets/images/html_logo.png',
      path: '/topic/html/html_basics'
    },
    {
      id: 'css-intro',
      title: 'Getting Started with CSS',
      description: 'Learn how to style your web pages with CSS',
      icon: '/assets/images/css_logo.png',
      path: '/topic/css/introduction'
    }
  ];

  const sampleCode = `// Welcome to JavaScript!
const greeting = "Hello, ${userName}!";
console.log(greeting);

// Try changing the code and see what happens
function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 10);
console.log(\`The sum is \${result}\`);`;

  return (
    <div className="space-y-8">
      <section className="bg-dark-card rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {userName}!</h1>
            <p className="text-light-text/80 text-lg">Continue your web development journey</p>
          </div>
          <div className="mt-6 md:mt-0">
            <ProgressCircle percentage={overallProgress} size={120} strokeWidth={10} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard 
            title="JavaScript" 
            icon="/assets/images/javascript_logo.png"
            progress={30}
            type="js"
            path="/javascript"
          />
          <TechCard 
            title="TypeScript" 
            icon="/assets/images/typescript_logo.png"
            progress={15}
            type="ts"
            path="/typescript"
          />
          <TechCard 
            title="HTML" 
            icon="/assets/images/html_logo.png"
            progress={45}
            type="html"
            path="/html"
          />
          <TechCard 
            title="CSS" 
            icon="/assets/images/css_logo.png"
            progress={20}
            type="css"
            path="/css"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Featured Lessons</h2>
          <div className="space-y-4">
            {featuredLessons.map(lesson => (
              <FeaturedLesson 
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                icon={lesson.icon}
                path={lesson.path}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Try It Out</h2>
          <div className="bg-dark-card rounded-lg overflow-hidden">
            <CodeEditor code={sampleCode} language="javascript" />
            <div className="p-4">
              <button className="btn-primary w-full">Run Code</button>
            </div>
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/exercises" className="card bg-gradient-to-br from-primary/20 to-dark-card border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-2">Practice Exercises</h3>
            <p className="text-light-text/80">Test your skills with coding challenges</p>
          </Link>
          <Link to="/projects" className="card bg-gradient-to-br from-secondary/20 to-dark-card border-l-4 border-secondary">
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p className="text-light-text/80">Build real-world applications</p>
          </Link>
          <Link to="/installation" className="card bg-gradient-to-br from-accent/20 to-dark-card border-l-4 border-accent">
            <h3 className="text-xl font-bold mb-2">Installation Guides</h3>
            <p className="text-light-text/80">Set up your development environment</p>
          </Link>
          <div className="card bg-gradient-to-br from-gray-500/20 to-dark-card border-l-4 border-gray-500">
            <h3 className="text-xl font-bold mb-2">Your Progress</h3>
            <p className="text-light-text/80">Track your learning journey</p>
            <div className="mt-2">
              <div className="h-2 w-full bg-dark-bg rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary" 
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-right mt-1">{overallProgress}% Complete</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
