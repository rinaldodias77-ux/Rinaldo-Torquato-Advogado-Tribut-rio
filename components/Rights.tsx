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
    <section id="direitos" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Quem tem direito à isenção?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Conforme a Lei 7.713/88, aposentados portadores de doenças graves podem obter isenção do Imposto de Renda sobre seus proventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {diseases.map((disease, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-primary-light p-4 rounded-lg border border-gray-700 hover:border-accent transition-colors"
            >
              <CheckCircle2 className="text-accent min-w-[24px]" />
              <span className="font-medium text-lg">{disease.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/10 rounded-xl p-6 md:p-8 max-w-4xl mx-auto text-center border border-white/20">
          <p className="text-lg md:text-xl font-medium mb-6">
            ⚠️ <span className="font-bold text-yellow-400">Observação Importante:</span> A isenção não depende de laudo recente ou contemporaneidade dos sintomas, e o direito pode ser reconhecido mesmo que a doença tenha sido descoberta no passado.
          </p>
          
          <a 
            href="https://wa.me/5565996931198?text=Olá, gostaria de saber se tenho direito à isenção de IR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors"
          >
            Descobrir se tenho direito
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rights;