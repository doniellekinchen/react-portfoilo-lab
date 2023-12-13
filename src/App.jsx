import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
