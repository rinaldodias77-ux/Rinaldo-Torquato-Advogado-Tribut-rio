import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-slate-500 py-20 border-t border-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="h-20 w-20 md:h-24 md:w-24 mb-6 overflow-hidden rounded-xl shadow-2xl shadow-black/50 border border-slate-800/50 bg-slate-900 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Rinaldo Torquato Logo" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.classList.add('hidden');
              }}
            />
          </div>
          <h3 className="text-white text-2xl font-serif font-bold mb-2 tracking-[0.1em] uppercase">
            RINALDO TORQUATO
          </h3>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-gold"></div>
            <p className="text-gold font-bold text-[10px] uppercase tracking-[0.3em]">Advocacia Tributária</p>
            <div className="h-px w-6 bg-gold"></div>
          </div>
        </div>
        
        <p className="mb-8 font-bold text-slate-300 tracking-widest text-xs uppercase">OAB/MT 33.780/O</p>
        
        <p className="max-w-2xl mx-auto mb-10 text-slate-400 font-light leading-relaxed">
          Atuação especializada na isenção de Imposto de Renda (IR) para aposentados portadores de doença grave. Atendimento online para todo o Brasil.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12 text-sm text-slate-400 font-light">
          <div className="flex flex-col items-center gap-2">
            <MapPin size={16} className="text-gold mb-1" />
            <p>Av. Historiador Rubens de Mendonça nº 2.368, Bosque da Saúde</p>
            <p>Cuiabá (MT) - Top Tower Center, Sala 406</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone size={16} className="text-gold mb-1" />
            <p>(65) 98112-6567</p>
            <p>Atendimento Virtual para todo o Brasil</p>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-slate-900/50 rounded-2xl text-[10px] text-slate-500 border border-slate-800/50 leading-relaxed">
          <p className="uppercase tracking-widest font-bold mb-2 text-slate-400">Aviso Legal</p>
          <p>
            Este site pertence a um escritório de advocacia privado e não possui qualquer vínculo com a Receita Federal do Brasil ou outros órgãos governamentais. Os serviços prestados são de natureza jurídica privada, pautados pela ética e transparência.
          </p>
        </div>

        <div className="text-[10px] text-slate-600 border-t border-slate-800/50 pt-10 uppercase tracking-[0.2em] font-bold">
          &copy; {currentYear} <a href="https://www.rinaldotorquatoadv.com" className="hover:text-gold transition-colors">Rinaldo Torquato Advogado</a>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;