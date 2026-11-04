import React, { useState } from 'react';
import { COMPANY_INFO, STORE_LOCATIONS } from '../data/companyData';
import { MessageCircle, X, ChevronRight, Store, Building2, Laptop } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      title: 'Vendas & Catálogo Geral',
      subtitle: 'Tire dúvidas sobre notebooks, PCs gamers e peças',
      icon: Laptop,
      text: 'Olá! Gostaria de falar com o atendimento geral sobre compras de equipamentos.',
      number: COMPANY_INFO.whatsappRaw,
    },
    {
      title: 'Loja Shopping Metrô Tatuapé',
      subtitle: 'Piso Tatuapé · Retirada ou atendimento local',
      icon: Store,
      text: 'Olá! Gostaria de falar com a equipe da Loja Shopping Metrô Tatuapé.',
      number: STORE_LOCATIONS[0].whatsappNumber,
    },
    {
      title: 'Loja Shopping Metrô Itaquera',
      subtitle: 'Piso Campanella · Retirada ou atendimento local',
      icon: Store,
      text: 'Olá! Gostaria de falar com a equipe da Loja Shopping Metrô Itaquera.',
      number: STORE_LOCATIONS[1].whatsappNumber,
    },
    {
      title: 'Locação Corporativa & B2B',
      subtitle: 'Frotas de TI e impressoras para empresas',
      icon: Building2,
      text: 'Olá! Sou de uma empresa e gostaria de saber mais sobre locação corporativa de computadores e impressoras.',
      number: COMPANY_INFO.whatsappRaw,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Options Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          <div className="p-4 bg-emerald-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Fale com a Branco Infoprint</p>
                <p className="text-[11px] text-emerald-100">Escolha onde deseja ser atendido</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-md text-white transition-colors cursor-pointer"
              aria-label="Fechar menu WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-2 divide-y divide-slate-100 max-h-80 overflow-y-auto">
            {options.map((opt, idx) => {
              const Icon = opt.icon;
              const link = `https://wa.me/${opt.number}?text=${encodeURIComponent(opt.text)}`;

              return (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors group rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {opt.title}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {opt.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                </a>
              );
            })}
          </div>

          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-500 font-medium">
              Seg. a Sáb. 10h às 22h · Dom. 14h às 20h
            </span>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Atendimento no WhatsApp"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-4 py-3.5 rounded-full shadow-lg shadow-emerald-700/30 transition-all hover:scale-105 cursor-pointer group"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="text-xs font-bold whitespace-nowrap hidden sm:inline-block">
          WhatsApp Branco Infoprint
        </span>
      </button>

    </div>
  );
};
