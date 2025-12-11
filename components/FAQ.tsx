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
    answer: 'Não necessariamente. A lei não exige contemporaneidade dos sintomas da doença ou que o laudo médico seja atual, bastando comprovar que o aposentado foi acometido pela doença prevista em lei em algum momento da vida.'
  },
  {
    question: 'A isenção vale para rendimentos de trabalho?',
    answer: 'Não. A isenção refere-se especificamente aos proventos de aposentadoria, reforma ou pensão, e não abrange os rendimentos trabalhistas (salários de quem continua trabalhando).'
  },
  {
    question: 'Quanto tempo demora o processo?',
    answer: 'Depende do caso. A via administrativa tende a ser mais rápida, e a judicial varia conforme o tribunal e a complexidade do caso.'
  },
  {
    question: 'Posso pedir valores retroativos?',
    answer: 'Sim. Até 5 anos, conforme prescrição quinquenal da legislação tributária.'
  },
  {
    question: 'O atendimento é online ou presencial?',
    answer: 'O procedimento de atendimento pode ser feito tanto digitalmente (para todo o Brasil) quanto na forma presencial em Cuiabá-MT.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-serif">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-primary pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-accent flex-shrink-0" />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-100 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;