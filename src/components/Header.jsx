import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-200/50' 
        : 'bg-gradient-to-r from-white via-blue-50/30 to-white shadow-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className="relative">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-110">
                FERRAGAMAS
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-red-600 via-orange-400 to-blue-500 transition-all duration-500 group-hover:w-full rounded-full shadow-lg"></div>
            </div>
            <div className="ml-2 text-sm text-gray-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              Filial de Trupper
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {['Inicio', 'Productos', 'Servicios', 'Contacto'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-gray-800 hover:text-blue-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group shadow-lg hover:shadow-blue-200"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="relative z-10 drop-shadow-sm">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 via-orange-100/60 to-blue-100/80 rounded-xl scale-0 transition-transform duration-500 group-hover:scale-100 shadow-inner"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 transition-all duration-500 group-hover:w-4/5 transform -translate-x-1/2 rounded-full"></div>
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white rounded-lg mt-4 shadow-lg border border-gray-200">
              {['Inicio', 'Productos', 'Servicios', 'Contacto'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-800 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;