import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5565996931198?text=Ol%C3%A1%20Dr.%20Rinaldo%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20sobre%20isen%C3%A7%C3%A3o%20de%20IR."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all transform hover:scale-105 hover:shadow-2xl group"
      aria-label="Fale comigo no WhatsApp"
    >
      <span className="font-semibold hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        Fale comigo agora
      </span>
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;