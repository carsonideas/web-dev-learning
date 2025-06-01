import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import JavaScriptPath from './pages/JavaScriptPath';
import TypeScriptPath from './pages/TypeScriptPath';
import HTMLPath from './pages/HTMLPath';
import CSSPath from './pages/CSSPath';
import ExercisesPage from './pages/ExercisesPage';
import ProjectsPage from './pages/ProjectsPage';
import InstallationGuides from './pages/InstallationGuides';
import TopicPage from './pages/TopicPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark-bg text-light-text">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/javascript" element={<JavaScriptPath />} />
            <Route path="/typescript" element={<TypeScriptPath />} />
            <Route path="/html" element={<HTMLPath />} />
            <Route path="/css" element={<CSSPath />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/installation" element={<InstallationGuides />} />
            <Route path="/topic/:technology/:topicId" element={<TopicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
