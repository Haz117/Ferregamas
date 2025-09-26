import React from 'react';

const Products = () => {
  const categories = [
    {
      title: "Herramientas Manuales",
      description: "Martillos, destornilladores, llaves, alicates y más herramientas de calidad Trupper",
      icon: "🔧",
      products: ["Martillos", "Destornilladores", "Llaves inglesas", "Alicates", "Serruchos"],
      gradient: "from-ferragamas-400 via-ferragamas-500 to-ferragamas-600",
      bgGradient: "from-ferragamas-50 via-white to-ferragamas-100",
      iconBg: "from-ferragamas-500 to-ferragamas-600",
      shadowColor: "shadow-ferragamas-200",
      borderColor: "border-ferragamas-200",
      hoverShadow: "hover:shadow-ferragamas-300"
    },
    {
      title: "Herramientas Eléctricas",
      description: "Taladros, sierras, lijadoras y herramientas eléctricas profesionales",
      icon: "⚡",
      products: ["Taladros", "Sierras eléctricas", "Lijadoras", "Pulidoras", "Rotomartillos"],
      gradient: "from-electric-400 via-electric-500 to-electric-600",
      bgGradient: "from-electric-50 via-white to-electric-100",
      iconBg: "from-electric-500 to-electric-600",
      shadowColor: "shadow-electric-200",
      borderColor: "border-electric-200",
      hoverShadow: "hover:shadow-electric-300"
    },
    {
      title: "Materiales de Construcción",
      description: "Cemento, arena, grava, varillas y todo para tu construcción",
      icon: "🏗️",
      products: ["Cemento", "Arena", "Grava", "Varillas", "Blocks"],
      gradient: "from-gray-500 via-gray-600 to-gray-700",
      bgGradient: "from-gray-50 via-white to-gray-100",
      iconBg: "from-gray-600 to-gray-700",
      shadowColor: "shadow-gray-200",
      borderColor: "border-gray-200",
      hoverShadow: "hover:shadow-gray-300"
    },
    {
      title: "Plomería",
      description: "Tuberías, conexiones, llaves y accesorios para instalaciones hidráulicas",
      icon: "�",
      products: ["Tuberías PVC", "Conexiones", "Llaves de paso", "Coladeras", "Bombas"],
      gradient: "from-success-400 via-success-500 to-success-600",
      bgGradient: "from-success-50 via-white to-success-100",
      iconBg: "from-success-500 to-success-600",
      shadowColor: "shadow-success-200",
      borderColor: "border-success-200",
      hoverShadow: "hover:shadow-success-300"
    },
    {
      title: "Electricidad",
      description: "Cables, contactos, interruptores y material eléctrico certificado",
      icon: "💡",
      products: ["Cables", "Contactos", "Interruptores", "Cajas", "Conduit"],
      gradient: "from-accent-400 via-accent-500 to-accent-600",
      bgGradient: "from-accent-50 via-white to-accent-100",
      iconBg: "from-accent-500 to-accent-600",
      shadowColor: "shadow-accent-200",
      borderColor: "border-accent-200",
      hoverShadow: "hover:shadow-accent-300"
    },
    {
      title: "Pintura y Acabados",
      description: "Pinturas, brochas, rodillos y todo para dar el acabado perfecto",
      icon: "🎨",
      products: ["Pinturas", "Brochas", "Rodillos", "Thinner", "Selladores"],
      gradient: "from-trupper-red via-red-500 to-red-600",
      bgGradient: "from-red-50 via-white to-red-100",
      iconBg: "from-trupper-red to-red-600",
      shadowColor: "shadow-red-200",
      borderColor: "border-red-200",
      hoverShadow: "hover:shadow-red-300"
    }
  ];

  return (
    <section id="productos" className="py-24 bg-gradient-to-br from-ferragamas-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-rainbow-gradient animate-rainbow bg-[length:400%_400%]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-ferragamas-200 to-accent-200 rounded-full blur-xl animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-success-200 to-electric-200 rounded-full blur-2xl animate-pulse opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-ferragamas-600 via-accent-500 to-ferragamas-600 bg-clip-text text-transparent animate-glow">
              Nuestros Productos
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-trupper-red via-accent-400 to-ferragamas-500 rounded-full animate-rainbow bg-[length:200%_100%] shadow-lg"></div>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Contamos con la línea completa de productos <span className="text-transparent bg-gradient-to-r from-trupper-red to-accent-500 bg-clip-text font-bold">Trupper</span> y materiales de construcción 
            de la más alta calidad para todos tus proyectos.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 bg-gradient-to-r from-ferragamas-100 to-accent-100 px-4 py-2 rounded-full border border-ferragamas-200">
              <span className="text-2xl">🏆</span>
              <span className="text-ferragamas-700 font-medium">Calidad garantizada</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 animate-fade-in-up delay-500">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl ${category.shadowColor} hover:${category.hoverShadow} transition-all duration-700 transform hover:scale-110 hover:-rotate-2 overflow-hidden border-2 ${category.borderColor} hover:border-opacity-50 cursor-pointer`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className={`absolute -inset-2 bg-gradient-to-r ${category.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-700`}></div>
              <div className="absolute inset-0 bg-rainbow-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 animate-rainbow bg-[length:400%_400%]"></div>
              
              <div className="relative p-10">
                <div className="text-center mb-8">
                  <div className={`relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${category.iconBg} rounded-3xl shadow-2xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-float`}>
                    <div className="text-4xl filter drop-shadow-lg">{category.icon}</div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`absolute -inset-2 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-700`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ferragamas-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-ferragamas-600 group-hover:to-accent-500 group-hover:bg-clip-text transition-all duration-500">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-500 text-lg">
                    {category.description}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-ferragamas-secondary text-lg group-hover:text-ferragamas-700 transition-colors duration-300 flex items-center gap-2">
                    <span className="text-xl">📦</span>
                    Productos disponibles:
                  </h4>
                  <ul className="space-y-3">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="flex items-center group/item transform transition-all duration-300 hover:translate-x-2">
                        <span className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300 shadow-lg`}></span>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 font-medium group-hover/item:font-semibold">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-2xl text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 group-hover:shadow-3xl relative overflow-hidden border-2 border-transparent hover:border-white/30`}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Ver más productos</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-rainbow-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur animate-rainbow bg-[length:200%_200%]"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-ferragamas-primary via-gray-800 to-ferragamas-secondary rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-trupper-red/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-trupper-red/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">¿No encuentras lo que buscas?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Contamos con un amplio catálogo. Contáctanos y te ayudamos a encontrar 
                exactamente lo que necesitas para tu proyecto.
              </p>
              <button className="group relative bg-gradient-to-r from-trupper-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <span className="relative z-10">Solicitar Cotización</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-trupper-red to-red-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;