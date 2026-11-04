import React from 'react';
import { COMPANY_INFO, STORE_LOCATIONS } from '../data/companyData';
import { Instagram, ExternalLink, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logoImage}
                  alt="Branco Infoprint"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Branco Infoprint
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Especialistas em vendas de notebooks novos e revisados, PCs gamers sob medida e soluções corporativas de outsourcing de computadores e impressoras em São Paulo.
            </p>

            {/* Social and Quick Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>@brancoinfoprint</span>
              </a>

              <a
                href={COMPANY_INFO.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <span>Cartão Virtual</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (Col 3) */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#vendas" className="hover:text-white transition-colors">Venda de Equipamentos</a>
              </li>
              <li>
                <a href="#locacao" className="hover:text-white transition-colors">Locação & Outsourcing</a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-white transition-colors">Nossas 3 Lojas Físicas</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais e Garantia</a>
              </li>
            </ul>
          </div>

          {/* Physical Stores in SP (Col 4 & 5) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Nossas Unidades em São Paulo - SP
            </p>
            <div className="space-y-3 text-xs text-slate-400">
              {STORE_LOCATIONS.map((store) => (
                <div key={store.id} className="border-l-2 border-blue-500 pl-3 space-y-0.5">
                  <p className="font-semibold text-slate-200">{store.name} ({store.badge})</p>
                  <p className="text-[11px] text-slate-400">{store.address} - {store.subLocation}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>WhatsApp / Central: {COMPANY_INFO.primaryPhone}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Branco Infoprint. Todos os direitos reservados. CNPJ regularizado · São Paulo - SP.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer text-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
