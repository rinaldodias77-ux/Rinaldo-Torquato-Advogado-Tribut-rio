import React from 'react';
import { Scale, FileCheck, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 relative">
             {/* Imagem profissional ilustrativa: Detalhes Jurídicos / Análise */}
             <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mesa de escritório com documentos, óculos e caneta representando análise jurídica minuciosa" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white text-2xl font-serif font-bold">Dr. Rinaldo Torquato</h3>
                    <p className="text-white/90 font-medium">Advogado Tributarista</p>
                  </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-50 text-accent text-sm font-semibold rounded-full mb-4">
              SOBRE O ADVOGADO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Especialista na Defesa dos Direitos dos Aposentados
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Sou advogado atuante principalmente em pedidos de <strong>isenção de Imposto de Renda</strong> sobre proventos de aposentadoria para pessoas portadoras de moléstias graves, conforme previsão legal do artigo 6º, inciso XIV, da Lei 7.713/88.
              </p>
              <p>
                Meu trabalho é focado em orientar aposentados sobre seus direitos e conduzir todo o processo administrativo ou judicial para garantir que a isenção seja reconhecida da forma mais rápida e segura possível.
              </p>
              <p>
                Atendimento individual, sigiloso e com linguagem simples, prezando sempre pelo acolhimento humano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Scale className="text-accent mb-3 w-8 h-8" />
                <span className="font-semibold text-primary">Atuação Especializada</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <FileCheck className="text-accent mb-3 w-8 h-8" />
                <span className="font-semibold text-primary">Análise Minuciosa</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <ShieldCheck className="text-accent mb-3 w-8 h-8" />
                <span className="font-semibold text-primary">Sigilo Absoluto</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;