import React from 'react';
import { ArrowRight, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge de Destaque - Crédito Tributário */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-accent px-4 py-2 rounded-full mb-6 animate-fadeIn hover:bg-blue-200 transition-colors cursor-default">
            <Clock size={16} />
            <span className="text-sm font-bold tracking-wide uppercase">Recupere valores dos últimos 5 anos</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Isenção de Imposto de Renda para <span className="text-accent">Aposentados</span> Portadores de Moléstia Grave
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pare de pagar Imposto de Renda indevidamente. Atuação especializada na Lei 7.713/88 para garantir sua isenção e a <strong>restituição do que foi pago a mais</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-gray-600 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span>Análise preliminar gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span>Atendimento 100% Online</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span>Sem burocracia</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5565996931198?text=Olá,%20gostaria%20de%20saber%20sobre%20a%20restituição%20dos%20últimos%205%20anos."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Quero Analisar Meu Caso
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#sobre"
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-accent text-gray-700 hover:text-accent px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Saiba Mais
            </a>
          </div>
          
          <p className="mt-8 text-xs text-gray-400">
            Fundamento Legal: Artigo 6º, inciso XIV, da Lei 7.713/88
          </p>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-gray-200 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;