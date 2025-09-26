import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-0">
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
