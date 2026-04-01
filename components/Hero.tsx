import React from 'react';
import { ArrowRight, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-slate-50/50 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full mb-8 animate-fadeIn border border-slate-200/50 shadow-sm">
            <Clock size={14} className="text-gold" />
            <span className="text-xs font-bold tracking-widest uppercase">Recupere valores dos últimos 5 anos</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-[1.1] tracking-tight text-balance">
            Isenção de Imposto de Renda para <span className="text-gold italic font-medium">Aposentados</span> com Doença Grave
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Especialista na Lei 7.713/88. Garantimos seu direito à isenção e a <strong>restituição retroativa</strong> com segurança e agilidade.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-14 text-slate-500 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="text-gold w-5 h-5" />
              <span>Análise preliminar gratuita</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="text-gold w-5 h-5" />
              <span>Atendimento 100% Online</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="text-gold w-5 h-5" />
              <span>Sem burocracia</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a 
              href="https://wa.me/5565981126567?text=Olá,%20gostaria%20de%20saber%20sobre%20a%20restituição%20dos%20últimos%205%20anos."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all shadow-2xl shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-1"
            >
              Quero Analisar Meu Caso
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/5565981126567?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20isenção%20de%20IR."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-gold text-slate-700 hover:text-gold px-10 py-5 rounded-lg text-lg font-semibold transition-all hover:shadow-lg"
            >
              Saiba Mais
            </a>
          </div>
          
          <div className="mt-16 flex flex-col items-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"></div>
            <p className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold">
              Fundamento Legal: Artigo 6º, inciso XIV, da Lei 7.713/88
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;