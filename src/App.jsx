import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import DashboardPreview from './components/DashboardPreview/DashboardPreview';
import Blogs from './components/Blogs/Blogs';
import Founder from './components/Founder/Founder';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Blogs />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
