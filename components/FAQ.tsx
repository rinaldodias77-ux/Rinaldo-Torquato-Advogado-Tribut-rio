import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: 'Preciso estar aposentado para ter direito à isenção?',
    answer: 'Sim, a isenção prevista no artigo 6º, inciso XIV da Lei 7.713/88, é válida para proventos de aposentadoria. Pensionistas também podem ter direito.'
  },
  {
    question: 'Preciso apresentar laudo médico recente?',
    answer: 'Não necessariamente. A lei não exige contemporaneidade dos sintomas ou que o laudo médico seja atual, bastando comprovar que o aposentado foi acometido pela doença legalmente prevista em algum momento da vida, independentemente de remissão ou tratamento da doença.'
  },
  {
    question: 'A isenção vale para rendimentos de trabalho?',
    answer: 'Não. A isenção refere-se especificamente aos proventos de aposentadoria, reforma ou pensão, e não abrange os rendimentos trabalhistas (salários de quem continua trabalhando).'
  },
  {
    question: 'Quanto tempo demora o processo?',
    answer: 'Depende de cada caso. A via administrativa tende a ser mais lenta e burocrática, e a judicial mais célere e rápida, variando conforme o Poder Judiciário local.'
  },
  {
    question: 'Posso pedir valores retroativos?',
    answer: 'Sim. Até 5 anos, conforme prescrição quinquenal da legislação tributária.'
  },
  {
    question: 'O atendimento é online ou presencial?',
    answer: 'O atendimento pode ser feito virtualmente para todo o Brasil ou na forma presencial em Cuiabá-MT. Marque um horário via Whatsapp.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold"></div>
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Dúvidas Comuns
            </span>
            <div className="h-px w-8 bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${
                openIndex === index 
                  ? 'border-gold/30 shadow-xl shadow-gold/5 bg-slate-50/50' 
                  : 'border-slate-100 hover:border-gold/20 bg-white'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 md:p-8 text-left transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg md:text-xl font-bold transition-colors pr-6 ${openIndex === index ? 'text-gold' : 'text-primary group-hover:text-gold'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-gold text-primary-dark rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-gold/20 group-hover:text-gold'}`}>
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-slate-600 text-lg font-light leading-relaxed border-t border-slate-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;