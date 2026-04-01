import React from 'react';
import { FileText, Stethoscope, History, Scale, TrendingUp } from 'lucide-react';
import { GuidanceItem } from '../types';

const guidanceItems: GuidanceItem[] = [
  {
    id: 1,
    title: 'Como funciona a isenção?',
    summary: 'A isenção de IR é um direito previsto no Art. 6º, inciso XIV, da Lei nº 7.713/88. É necessário preencher dois requisitos: 1. Estar aposentado; 2. Possuir uma das doenças previstas no rol legal, apresentando documentos médicos comprobatórios.',
    iconName: 'FileText'
  },
  {
    id: 2,
    title: 'Preciso de laudo oficial?',
    summary: 'Não. Conforme a Súmula 598 do STJ, é possível o reconhecimento da isenção mesmo sem laudo oficial, desde que o conjunto probatório (exames, atestados, tomografias) seja robusto para comprovar a doença.',
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
    summary: 'Imunidade é limitação constitucional ao poder de tributar. Isenção é dispensa legal do pagamento. Aposentados com doença grave têm isenção legal conforme a Lei 7.713/88.',
    iconName: 'Scale'
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case 'FileText': return <FileText className="w-8 h-8 text-gold" />;
    case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-gold" />;
    case 'History': return <TrendingUp className="w-8 h-8 text-gold" />; // Ícone de gráfico subindo para dinheiro
    case 'Scale': return <Scale className="w-8 h-8 text-gold" />;
    default: return <FileText className="w-8 h-8 text-gold" />;
  }
};

const Guidance: React.FC = () => {
  return (
    <section id="orientacoes" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold"></div>
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Informações Jurídicas
            </span>
            <div className="h-px w-8 bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Orientações Importantes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {guidanceItems.map((item) => {
             const isHighlight = item.id === 3; // Destaque para o item de dinheiro de volta
             
             return (
              <div 
                key={item.id} 
                className={`group p-10 rounded-2xl transition-all duration-500 ${
                  isHighlight 
                    ? 'bg-white border border-gold/30 shadow-[0_20px_50px_rgba(197,165,114,0.1)] scale-[1.02] relative overflow-hidden' 
                    : 'bg-white shadow-sm hover:shadow-xl border border-slate-100 hover:border-gold/20'
                }`}
              >
                {isHighlight && (
                  <div className="absolute top-0 right-0 bg-gold text-primary-dark text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-bl-xl uppercase">
                    Crédito a Receber
                  </div>
                )}
                
                <div className={`mb-8 w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${isHighlight ? 'bg-gold/10' : 'bg-slate-50'}`}>
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
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