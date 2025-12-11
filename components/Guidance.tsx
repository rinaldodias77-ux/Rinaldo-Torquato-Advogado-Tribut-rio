import React from 'react';
import { FileText, Stethoscope, History, Scale, TrendingUp } from 'lucide-react';
import { GuidanceItem } from '../types';

const guidanceItems: GuidanceItem[] = [
  {
    id: 1,
    title: 'Como funciona a isenção?',
    summary: 'A isenção é um direito previsto no Art. 6º, inciso XIV, da Lei nº 7.713/88. É necessário preencher dois requisitos: 1. Estar aposentado; 2. Possuir uma das doenças previstas no rol legal, apresentando documentos médicos comprobatórios.',
    iconName: 'FileText'
  },
  {
    id: 2,
    title: 'Preciso de laudo oficial?',
    summary: 'Não. Conforme a Súmula 598 do STJ, é possível o reconhecimento da isenção mesmo sem laudo oficial, desde que o conjunto probatório (exames, atestados, tomografias) seja robusto para comprovar a moléstia.',
    iconName: 'Stethoscope'
  },
  {
    id: 3,
    title: 'Dinheiro de volta (5 Anos)',
    summary: 'Sim, é possível recuperar valores pagos ou retidos na fonte dos últimos 5 (cinco) anos. Esse "crédito tributário" volta para o seu bolso com correção monetária (Taxa Selic).',
    iconName: 'History'
  },
  {
    id: 4,
    title: 'Diferença: Isenção vs Imunidade',
    summary: 'Imunidade é limitação constitucional ao poder de tributar. Isenção é dispensa legal do pagamento. Aposentados com moléstia grave têm isenção legal conforme a Lei 7.713/88.',
    iconName: 'Scale'
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case 'FileText': return <FileText className="w-8 h-8 text-accent" />;
    case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-accent" />;
    case 'History': return <TrendingUp className="w-8 h-8 text-green-600" />; // Ícone de gráfico subindo para dinheiro
    case 'Scale': return <Scale className="w-8 h-8 text-accent" />;
    default: return <FileText className="w-8 h-8 text-accent" />;
  }
};

const Guidance: React.FC = () => {
  return (
    <section id="orientacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">Informações Jurídicas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 font-serif">Orientações Importantes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidanceItems.map((item) => {
             const isHighlight = item.id === 3; // Destaque para o item de dinheiro de volta
             
             return (
              <div 
                key={item.id} 
                className={`p-8 rounded-xl transition-all duration-300 ${
                  isHighlight 
                    ? 'bg-white border-2 border-green-100 shadow-lg scale-[1.02] relative overflow-hidden' 
                    : 'bg-white shadow-sm hover:shadow-md border border-gray-100'
                }`}
              >
                {isHighlight && (
                  <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                    CRÉDITO A RECEBER
                  </div>
                )}
                
                <div className={`mb-6 w-16 h-16 rounded-lg flex items-center justify-center ${isHighlight ? 'bg-green-50' : 'bg-blue-50'}`}>
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guidance;