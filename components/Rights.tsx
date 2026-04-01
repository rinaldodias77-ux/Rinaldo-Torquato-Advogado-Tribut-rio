import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Disease } from '../types';

const diseases: Disease[] = [
  { name: 'Cardiopatia grave' },
  { name: 'Neoplasia maligna (câncer)' },
  { name: 'Doença de Parkinson' },
  { name: 'Doença de Alzheimer' },
  { name: 'Esclerose múltipla' },
  { name: 'Hepatopatia grave' },
  { name: 'Nefropatia grave' },
  { name: 'Tuberculose ativa' },
  { name: 'Paralisia irreversível e incapacitante' },
  { name: 'AIDS' },
  { name: 'Outras previstas em lei' },
];

const Rights: React.FC = () => {
  return (
    <section id="direitos" className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold"></div>
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Lista de Enfermidades
            </span>
            <div className="h-px w-8 bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Quem tem direito à isenção?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Conforme a Lei 7.713/88, aposentados portadores de doenças graves podem obter isenção do Imposto de Renda sobre seus proventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {diseases.map((disease, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 bg-primary p-5 rounded-xl border border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/5"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <CheckCircle2 className="text-gold w-4 h-4" />
              </div>
              <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{disease.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-slate-900 to-primary border border-slate-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl font-light mb-10 text-slate-300 leading-relaxed">
              <span className="text-gold font-bold uppercase tracking-widest text-xs block mb-4">Observação Importante</span>
              A isenção não depende de laudo recente ou contemporaneidade dos sintomas, e o direito pode ser reconhecido mesmo que a doença tenha sido descoberta no passado.
            </p>
            
            <a 
              href="https://wa.me/5565981126567?text=Olá, gostaria de saber se tenho direito à isenção de IR."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-primary-dark font-bold py-4 px-10 rounded-lg transition-all shadow-xl shadow-gold/10 hover:shadow-gold/20 transform hover:-translate-y-1"
            >
              Consultar Meu Direito
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rights;