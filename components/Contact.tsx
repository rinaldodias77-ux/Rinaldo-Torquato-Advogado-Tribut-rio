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
    fetch("https://formsubmit.co/ajax/rinaldodias77@gmail.com", {
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
    <section id="contato" className="py-20 bg-primary-light text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-accent font-semibold tracking-wider text-sm uppercase">Fale Comigo</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-serif">Atendimento Humanizado e Sigiloso</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Entre em contato para agendar uma consulta ou tirar suas dúvidas sobre a isenção de IR.
            </p>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="bg-primary p-3 rounded-full border border-gray-700">
                   <Phone className="text-accent" size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-lg">Telefone / WhatsApp</h4>
                   <a href="https://wa.me/5565996931198" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                     (65) 99693-1198
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-primary p-3 rounded-full border border-gray-700">
                   <Mail className="text-accent" size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-lg">E-mail</h4>
                   <a href="mailto:rinaldodias77@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                     rinaldodias77@gmail.com
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-primary p-3 rounded-full border border-gray-700">
                   <MapPin className="text-accent" size={24} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-lg">Escritório</h4>
                   <p className="text-gray-300">
                     Av. Historiador Rubens de Mendonça nº 2.368<br/>
                     Top Tower Center, Sala 406<br/>
                     Bosque da Saúde, Cuiabá - MT<br/>
                     CEP 78050-000
                   </p>
                 </div>
               </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/5565996931198"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
              >
                <MessageCircleIcon />
                Falar agora pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl text-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">Envie sua mensagem</h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Mensagem Enviada!</h4>
                <p className="text-gray-600">
                  Obrigado pelo contato. Recebi sua mensagem e retornarei o mais breve possível.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-accent font-semibold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-5" 
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Descrição do Caso</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Descreva brevemente sua situação..."
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  {!status.includes('submitting') && <Send size={18} />}
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