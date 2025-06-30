import React, { useState } from 'react';
import { Instagram, ExternalLink, FileText } from 'lucide-react';
import ImageModal from './ImageModal';

const Projects = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [] as string[],
    currentIndex: 0,
    title: ''
  });

  const openModal = (images: string[], index: number, title: string) => {
    setModalState({
      isOpen: true,
      images,
      currentIndex: index,
      title
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const goToPrevious = () => {
    setModalState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1
    }));
  };

  const goToNext = () => {
    setModalState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Primitivo Bar e Restaurante",
      subtitle: "Social mídia e campanha publicitária",
      description: `Projeto de Comunicação Estratégica — Marca Primitivo

Desenvolvemos um plano completo de posicionamento e comunicação para o Primitivo, espaço gastronômico localizado no Ipê Clube, guiado pela sensibilidade da chefe Gabriela Perri. O foco foi traduzir sua essência — o fogo, o alimento e o pertencimento — em uma linguagem próxima, acolhedora e coerente em todos os canais.

Entregas principais:
• Posicionamento de marca com tom de voz afetivo e familiar, alinhado à proposta da cozinha e ao público do clube.

• Revisão visual, com nova paleta de cores e tipografias que reforçam rusticidade e sofisticação simples.

• Planejamento de conteúdo digital, com estratégias para feed e stories, incluindo campanhas para o Dia dos Namorados e a Festa Junina.

• Ações multicanais, com presença integrada na revista, rádio, TVs e murais do Ipê Clube.

• Criação de campanha institucional, marcando a primeira aparição da marca na revista do clube.

Resultado esperado:
Fortalecimento da imagem institucional, ampliação da presença digital e conexão mais profunda com um público que valoriza tempo de qualidade, boa comida e experiências memoráveis.

Mais do que servir, o Primitivo acolhe. E a comunicação agora traduz isso.`,
      instagram: "https://www.instagram.com/primitivorestaurantebar/",
      image: "/primitivo-capa.jpg",
      gallery: [
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      title: "Revelando SP",
      subtitle: "Design é cultura",
      description: `Design Gráfico que celebra a cultura tradicional paulista

No maior festival de cultura popular do estado de São Paulo, o design também é protagonista. O trabalho gráfico desenvolvido para o Revelando SP é parte essencial da identidade vibrante e acolhedora que envolve o público e valoriza as expressões culturais das cidades paulistas.

Sob direção de arte de Emílio Rogê e com a parceria criativa de Fabiola Eusébio, nosso estúdio foi responsável por traduzir visualmente a riqueza do evento em peças gráficas impressas — como sinalização, totens, banners e materiais editoriais — e também na comunicação digital, com destaque para o conteúdo visual do Instagram oficial do festival (@revelandosp).

Com uma linguagem acessível, plural e conectada com o território, o projeto gráfico contribui para fortalecer a presença do festival em diferentes regiões do estado, valorizando tanto os expositores quanto o público.

Design é cultura, pertencimento e celebração.
E o Revelando SP é tudo isso.`,
      instagram: "https://www.instagram.com/revelando.sp/",
      image: "/REv1.jpg",
      gallery: [
        "/REv1.jpg",
        "/Rev2.jpg",
        "/REv3.jpg",
        "/Rev4.jpg",
        "/REv5.jpg"
      ]
    },
    {
      id: 3,
      title: "WS 360",
      subtitle: "Identidade Visual Completa",
      description: `A WS360 é mais do que um estúdio de treinamento — é um espaço onde saúde, movimento e acolhimento se encontram. Desenvolvemos uma identidade visual completa e estratégica que traduz os pilares da marca: profissionalismo, bem-estar e leveza.

Com um posicionamento focado em pessoas e não em números, criamos uma linguagem visual moderna, acessível e empática, que diferencia a WS360 das academias de rede. A construção da marca envolveu a definição de paleta de cores, tipografia exclusiva, conceito verbal e visual, além de diretrizes para a comunicação nas redes e nos materiais impressos.

O resultado é uma marca que transmite confiança, motivação e pertencimento — um convite aberto para quem busca qualidade de vida com sorriso no rosto.`,
      image: "/WS1.jpg",
      gallery: [
        "/WS1.jpg",
        "/WS2.jpg",
        "/WS3.jpg",
        "/WS4.jpg",
        "/WS5.jpg"
      ],
      pdfUrl: "/CV.pdf"
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seleção de trabalhos que traduzem estratégia em design, conectando marcas com seus públicos de forma autêntica e impactante.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-start ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
                  onClick={() => project.gallery && openModal(project.gallery, 0, project.title)}
                  onError={(e) => {
                    console.log(`Imagem não encontrada: ${project.image}`);
                    e.currentTarget.src = "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#000AFF] font-medium text-lg">
                    {project.subtitle}
                  </p>
                </div>
                
                <div className="prose prose-lg text-gray-700 mb-8">
                  {project.description.split('\n\n').map((paragraph, i) => (
                    <div key={i} className="mb-4">
                      {paragraph.includes('•') ? (
                        <div>
                          {paragraph.split('\n').map((line, j) => (
                            <p key={j} className={`${line.includes('•') ? 'ml-4' : ''} leading-relaxed`}>
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="leading-relaxed">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.instagram && (
                    <a 
                      href={project.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium"
                    >
                      <Instagram size={20} />
                      Ver no Instagram
                    </a>
                  )}

                  {project.pdfUrl && (
                    <a 
                      href={project.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#000AFF] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 font-medium"
                      onError={() => {
                        console.log('PDF não encontrado');
                      }}
                    >
                      <FileText size={20} />
                      Saiba mais
                    </a>
                  )}
                </div>

                {/* Galeria com scroll lateral */}
                {project.gallery && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-black mb-4">
                      {project.id === 1 ? 'Galeria Instagram' : 'Galeria do Projeto'}
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {project.gallery.map((image, i) => (
                        <div key={i} className="flex-shrink-0">
                          <img 
                            src={image} 
                            alt={`${project.title} - ${project.id === 1 ? 'Post' : 'Imagem'} ${i + 1}`}
                            className="w-32 h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
                            onClick={() => openModal(project.gallery!, i, project.title)}
                            onError={(e) => {
                              console.log(`Imagem da galeria não encontrada: ${image}`);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para visualizar imagens */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
        title={modalState.title}
      />
    </section>
  );
};

export default Projects;