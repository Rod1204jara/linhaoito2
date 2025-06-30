import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Vamos criar algo relevante?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Estou sempre aberto para novos projetos e parcerias. 
              Se você tem uma ideia, uma marca que precisa de identidade 
              ou um projeto que busca impacto real, vamos conversar.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#000AFF]" />
                <span className="text-gray-300">Barueri, SP - Linha 8</span>
              </div>
              
              <a 
                href="tel:+5511964420998" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#000AFF] transition-colors duration-200"
              >
                <Phone size={20} />
                <span>(11) 96442-0998</span>
              </a>
              
              <a 
                href="mailto:estudio.linhaoito@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#000AFF] transition-colors duration-200"
              >
                <Mail size={20} />
                <span>estudio.linhaoito@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rodrigovedeschi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#000AFF] transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/rodrigovedeschi</span>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">
              Entre em contato
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#000AFF] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#000AFF] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#000AFF] focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#000AFF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;