import React from 'react';
import { STORE_LOCATIONS, COMPANY_INFO } from '../data/companyData';
import { MapPin, Clock, Navigation, MessageCircle, Train, Check } from 'lucide-react';

export const StoresSection: React.FC = () => {
  return (
    <section id="unidades" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Presença Física & Segurança
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            3 Unidades Físicas em São Paulo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Compre online e retire na hora, ou venha até uma de nossas lojas testar o equipamento pessoalmente com nossa equipe técnica especializada.
          </p>
        </div>

        {/* 3 Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORE_LOCATIONS.map((store) => {
            const waMessage = `Olá! Gostaria de falar com o atendimento da unidade ${store.name} da Branco Infoprint.`;
            const waStoreLink = `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

            return (
              <div
                key={store.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all group"
              >
                {/* Store Photo */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {store.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {store.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {store.description}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-700">
                      {/* Address */}
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">{store.address}</p>
                          <p className="text-slate-500">{store.subLocation}</p>
                        </div>
                      </div>

                      {/* Metro Access */}
                      <div className="flex items-start gap-2">
                        <Train className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-medium">
                          {store.metroAccess}
                        </span>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-2 pt-1">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div className="text-[11px] text-slate-500 space-y-0.5">
                          <p>{store.hoursWeekday}</p>
                          <p>{store.hoursWeekend}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
                    >
                      <Navigation className="w-3.5 h-3.5 text-blue-600" />
                      <span>Como Chegar</span>
                    </a>

                    <a
                      href={waStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Loja</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* In-store experience callout */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Prefere retirar seu notebook ou PC Gamer hoje mesmo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Chame nossa equipe pelo WhatsApp para reservar o equipamento na unidade de sua preferência (Tatuapé, Itaquera ou São Miguel). Ao chegar, seu equipamento já estará pronto e configurado para retirada!
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de reservar um equipamento para retirar na loja física hoje.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Reservar para Retirada</span>
          </a>
        </div>

      </div>
    </section>
  );
};
