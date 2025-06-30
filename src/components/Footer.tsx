import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/logo_Prancheta 1.png" 
              alt="Estúdio Linha Oito" 
              className="h-8 w-auto mr-3 filter invert"
              onError={(e) => {
                console.log('Logo não encontrada no footer');
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-lg font-medium">Estúdio Linha Oito</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Design Gráfico e Digital
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Estúdio Linha Oito. Todos os direitos reservados.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 italic">
            "Tudo o que eu crio carrega um traço da minha travessia."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;