import React from 'react';
import { Linkedin, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Sobre
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Sou Designer Gráfico e Digital com mais de 7 anos de experiência criando soluções visuais estratégicas para marcas que buscam um posicionamento qualitativo e duradouro no mercado.
              </p>
              
              <p>
                Atuo no desenvolvimento de planos de comunicação, campanhas publicitárias e projetos de branding, sempre com foco em construir marcas sólidas, autênticas e conectadas com seu público.
              </p>
              
              <p>
                Minha trajetória também é atravessada por uma forte relação com arte, cultura e educação — áreas com as quais atuo há anos em projetos sociais, iniciativas criativas e experiências formativas. Essa vivência amplia meu olhar para além do design comercial, trazendo repertório e sensibilidade para soluções que geram impacto real e diálogo com diferentes contextos.
              </p>
              
              <p>
                Acredito no design como ferramenta de transformação — estética, simbólica e social — e busco trabalhar com empresas e iniciativas que compartilhem esse propósito.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/in/rodrigovedeschi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#000AFF] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-200 font-medium"
                onError={() => {
                  console.log('CV.pdf não encontrado');
                }}
              >
                <Download size={20} />
                Currículo
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-6">
              Linha oito
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tudo o que eu crio carrega um traço da minha travessia.
                Minha marca se chama Linha Oito — a mesma linha de trem que me leva pra casa, em Barueri.
              </p>
              
              <p>
                Mais do que um nome, é um caminho. É o som metálico dos trilhos marcando o ritmo da cidade, o movimento dos corpos, o tempo do cotidiano.
              </p>
              
              <p>
                É nesse percurso, entre o centro e a quebrada, que as ideias amadurecem, que os olhos aprendem a observar o invisível, que o design se encontra com a vida real.
              </p>
              
              <p>
                Linha Oito nasce dessa escuta: do grafite no muro, da conversa entre vagões, das cores do mercado de rua, das paisagens que se sobrepõem na janela.
              </p>
              
              <p>
                Meu trabalho em design não é só estética — é pertencimento.
                É comunicação com propósito, é linguagem visual que cria pontes, que representa, que inspira.
              </p>
              
              <p>
                A Linha Oito não é apenas um trajeto.
                É a forma que encontrei de traduzir meu território em criação.
                É o trem que me forma e me informa.
                É onde mora minha história.
              </p>
              
              <p className="font-medium text-black">
                Vamos criar algo relevante?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;