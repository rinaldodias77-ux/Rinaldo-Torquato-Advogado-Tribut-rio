import React from 'react';
import { Scale, FileCheck, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 relative group">
             {/* Imagem profissional ilustrativa */}
             <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] bg-slate-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mesa de escritório com documentos, óculos e caneta representando análise jurídica minuciosa" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-10">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-3xl font-serif font-bold tracking-tight">Dr. Rinaldo Torquato</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="h-px w-6 bg-gold"></div>
                      <p className="text-gold font-bold text-xs uppercase tracking-widest">Advogado Tributarista</p>
                    </div>
                  </div>
                </div>
             </div>
             {/* Decorative elements */}
             <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl -z-10"></div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/30 rounded-br-3xl -z-10"></div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold"></div>
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                Sobre o Advogado
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Expertise em Pedidos de Isenção de IR e Restituição
            </h2>
            
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Advogado atuante em pedidos de <strong className="text-primary font-semibold">isenção de Imposto de Renda</strong> sobre proventos de aposentadoria para aposentados portadores de doenças graves, conforme previsão legal do artigo 6º, inciso XIV, da Lei 7.713/88.
              </p>
              <p>
                Meu trabalho é focado em orientar aposentados sobre seus direitos e conduzir todo o processo administrativo ou judicial para garantir que a isenção seja reconhecida da forma mais rápida e segura possível.
              </p>
              <p className="italic text-slate-500 border-l-2 border-gold/30 pl-6 py-2">
                "Atendimento individual, sigiloso e com linguagem simples, prezando sempre pelo acolhimento humano."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-gold/20 transition-all hover:shadow-xl hover:shadow-slate-200/50">
                <Scale className="text-gold mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-primary text-xs uppercase tracking-widest">Atuação Especializada</span>
              </div>
              <div className="group flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-gold/20 transition-all hover:shadow-xl hover:shadow-slate-200/50">
                <FileCheck className="text-gold mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-primary text-xs uppercase tracking-widest">Análise Minuciosa</span>
              </div>
              <div className="group flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-gold/20 transition-all hover:shadow-xl hover:shadow-slate-200/50">
                <ShieldCheck className="text-gold mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-primary text-xs uppercase tracking-widest">Sigilo Absoluto</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;