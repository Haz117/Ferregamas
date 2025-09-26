import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-xl animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl animate-pulse delay-1000 opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-orange-400 rounded-full blur-xl animate-bounce delay-2000 opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title with Animation */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="inline-block transform transition-all duration-700 hover:scale-110 hover:rotate-2 cursor-pointer">
                <span className="bg-gradient-to-r from-red-600 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                  FERRAGAMAS
                </span>
              </span>
            </h1>
            <div className="h-2 w-40 bg-gradient-to-r from-red-600 via-orange-400 to-blue-400 mx-auto rounded-full shadow-lg"></div>
          </div>
          
          <p className="text-2xl md:text-4xl mb-6 animate-fade-in-up delay-300 font-light">
            Tu ferretería de <span className="text-orange-300 font-bold">confianza</span>
          </p>
          
          <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-300 animate-fade-in-up delay-500 leading-relaxed">
            Filial oficial de <span className="text-red-400 font-bold">Trupper</span>. Ofrecemos las mejores herramientas y materiales para construcción, 
            carpintería, electricidad y plomería. Calidad garantizada y precios competitivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-700">
            <button className="group relative bg-gradient-to-r from-trupper-red via-accent-500 to-accent-600 hover:from-accent-600 hover:via-trupper-red hover:to-accent-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-accent-300 animate-glow">
              <span className="relative z-10 flex items-center gap-2">
                ✨ Ver Productos
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-trupper-red via-accent-400 to-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-rainbow-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-rainbow bg-[length:200%_200%]"></div>
            </button>
            
            <button className="group relative border-3 border-white text-white hover:bg-gradient-to-r hover:from-white hover:to-ferragamas-100 hover:text-ferragamas-800 font-bold py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                📞 Contactar Ahora
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Features with Enhanced Styling */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up delay-1000">
          {[
            {
              icon: "🔧",
              title: "Calidad Garantizada",
              description: "Productos Trupper con garantía de calidad y durabilidad",
              gradient: "from-success-400 via-success-500 to-success-600",
              shadowColor: "shadow-success-200",
              hoverColor: "group-hover:text-success-400"
            },
            {
              icon: "💰",
              title: "Precios Competitivos", 
              description: "Los mejores precios del mercado sin comprometer la calidad",
              gradient: "from-ferragamas-400 via-ferragamas-500 to-ferragamas-600",
              shadowColor: "shadow-ferragamas-200",
              hoverColor: "group-hover:text-ferragamas-400"
            },
            {
              icon: "🛠️",
              title: "Servicio Especializado",
              description: "Asesoría técnica profesional para todos tus proyectos",
              gradient: "from-electric-400 via-electric-500 to-electric-600",
              shadowColor: "shadow-electric-200",
              hoverColor: "group-hover:text-electric-400"
            }
          ].map((feature, index) => (
            <div key={index} className="group text-center transform transition-all duration-700 hover:scale-110 hover:-translate-y-3 cursor-pointer" 
                 style={{animationDelay: `${1000 + index * 200}ms`}}>
              <div className={`relative bg-gradient-to-br ${feature.gradient} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl ${feature.shadowColor} group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-12 animate-float`}>
                <div className="text-4xl filter drop-shadow-lg">{feature.icon}</div>
                <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${feature.hoverColor} transition-colors duration-500`}>
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;