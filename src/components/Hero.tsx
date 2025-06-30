import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-8 tracking-tight">
          Estúdio
          <br />
          <span className="font-bold">Linha Oito</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Design Gráfico e Digital com mais de 7 anos de experiência criando soluções visuais estratégicas para marcas autênticas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAbout}
            className="bg-[#000AFF] text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg group"
          >
            Conheça meu trabalho
          </button>
          <a 
            href="https://www.linkedin.com/in/rodrigovedeschi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium text-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={24} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;