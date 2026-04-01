import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Usando FormSubmit para envio de e-mails universal (funciona no Cloudflare)
    fetch("https://formsubmit.co/ajax/rinaldotorquatoadv@gmail.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        _subject: `Novo Contato Site: ${formData.name}`, // Assunto do email
        _template: "table" // Formato bonito no email
      })
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setStatus('error');
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <section id="contato" className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-gold rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold"></div>
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                Fale Conosco
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Atendimento Humanizado e Sigiloso</h2>
            <p className="text-slate-400 mb-12 text-xl font-light leading-relaxed">
              Entre em contato para agendar uma consulta ou tirar suas dúvidas sobre a isenção de IR.
            </p>

            <div className="space-y-10">
               <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-primary rounded-xl border border-slate-800 flex items-center justify-center group-hover:border-gold/50 transition-all duration-500">
                   <Phone className="text-gold" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-200 uppercase tracking-widest text-xs mb-2">Telefone / WhatsApp</h4>
                   <a href="https://wa.me/5565981126567" target="_blank" rel="noopener noreferrer" className="text-xl text-slate-300 hover:text-gold transition-colors font-medium">
                     (65) 98112-6567
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-primary rounded-xl border border-slate-800 flex items-center justify-center group-hover:border-gold/50 transition-all duration-500">
                   <Mail className="text-gold" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-200 uppercase tracking-widest text-xs mb-2">E-mail</h4>
                   <a href="mailto:rinaldotorquatoadv@gmail.com" className="text-xl text-slate-300 hover:text-gold transition-colors font-medium">
                     rinaldotorquatoadv@gmail.com
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-primary rounded-xl border border-slate-800 flex items-center justify-center group-hover:border-gold/50 transition-all duration-500">
                   <MapPin className="text-gold" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-200 uppercase tracking-widest text-xs mb-2">Escritório</h4>
                   <p className="text-lg text-slate-300 leading-relaxed font-light">
                     Av. Historiador Rubens de Mendonça nº 2.368<br/>
                     Top Tower Center, Sala 406<br/>
                     Bosque da Saúde, Cuiabá - MT<br/>
                     CEP 78050-000
                   </p>
                 </div>
               </div>
            </div>

            <div className="mt-14">
              <a 
                href="https://wa.me/5565981126567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-5 px-10 rounded-xl transition-all shadow-2xl shadow-green-900/20 transform hover:-translate-y-1"
              >
                <MessageCircleIcon />
                Falar agora pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl text-slate-800 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-slate-100">
            <h3 className="text-3xl font-bold mb-8 text-primary tracking-tight">Envie sua mensagem</h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Mensagem Enviada!</h4>
                <p className="text-slate-600 text-lg font-light">
                  Obrigado pelo contato. Recebi sua mensagem e retornarei o mais breve possível.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-gold font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6" 
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all bg-slate-50/50"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all bg-slate-50/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all bg-slate-50/50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Descrição do Caso</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all bg-slate-50/50"
                    placeholder="Descreva brevemente sua situação..."
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100 font-medium">
                    Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-primary/20 transform hover:-translate-y-1"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  {!status.includes('submitting') && <Send size={18} className="text-gold" />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper component for Whatsapp icon in button
const MessageCircleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-message-circle"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export default Contact;