import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-white text-xl font-serif font-bold mb-4 tracking-wider">
          RINALDO TORQUATO ADVOGADO
        </h3>
        <p className="mb-2 font-medium text-white/80">OAB/MT 33.780/O</p>
        
        <div className="w-16 h-1 bg-accent mx-auto my-6 rounded-full"></div>
        
        <p className="max-w-2xl mx-auto mb-6">
          Atuação especializada na solicitação de isenção de Imposto de Renda (IR) em benefício de aposentados portadores de moléstia grave. Atendimento online para todo o Brasil.
        </p>

        <p className="text-sm mb-8">
          Av. Historiador Rubens de Mendonça nº 2.368, Bosque da Saúde<br/>
          CEP 78050-000 - Cuiabá (MT) - Top Tower Center, Sala 406.
        </p>

        {/* Aviso Legal Importante para evitar bloqueios de Phishing/Impersonation */}
        <div className="max-w-3xl mx-auto mb-8 p-4 bg-gray-800/50 rounded-lg text-xs text-gray-500 border border-gray-700">
          <p>
            <strong>Aviso Legal:</strong> Este site pertence a um escritório de advocacia privado e não possui qualquer vínculo com a Receita Federal do Brasil ou outros órgãos governamentais. Os serviços prestados são de natureza jurídica privada.
          </p>
        </div>

        <div className="text-xs text-gray-500 border-t border-gray-800 pt-6">
          &copy; {currentYear} <a href="https://www.rinaldotorquatoadv.com" className="hover:text-white transition-colors">Rinaldo Torquato Advogado</a>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;