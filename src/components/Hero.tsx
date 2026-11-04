import React from 'react';
import { MessageCircle, ShieldCheck, Store, Laptop, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker (No pill box, clean text with separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <span>3 Lojas Físicas em SP</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Shopping Metrô Tatuapé & Itaquera</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>São Miguel Paulista</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Equipamentos de informática de alta performance e locação corporativa inteligente.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Venda de notebooks revisados com garantia, PCs Gamers montados sob medida, monitores e periféricos. Além de outsourcing e locação de frotas de computadores e impressoras com manutenção inclusa para empresas.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Retirada imediata nas lojas ou entrega rápida</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantia real com nota fiscal e procedência</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Parcelamento em até 12x no cartão</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Planos corporativos B2B sob medida (OPEX)</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="#vendas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/20 transition-all text-center"
              >
                <span>Ver Equipamentos à Venda</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-colors text-center cursor-pointer"
              >
                <span>Orçamento de Locação B2B</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Branco Infoprint e quero tirar uma dúvida com um atendente.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Anchor with Real Store & Product Collage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              {/* Main Storefront Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="/assets/aistudio/SaveClip.App_587653413_18070900031459486_8737145959328869096_n.jpg_ea987c7a.webp"
                  alt="Loja Branco Infoprint no Shopping Metrô Tatuapé"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Loja Física Aberta para Você
                  </p>
                  <p className="text-base font-bold">
                    Shopping Metrô Tatuapé & Metrô Itaquera
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Visite nossa loja, teste os equipamentos em bancada e retire na hora!
                  </p>
                </div>
              </div>

              {/* Highlights Sub-strip with Real Product Thumbnails */}
              <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/80 p-3">
                <div className="flex items-center gap-3 pr-2">
                  <img
                    src="/assets/aistudio/SaveClip.App_863563927_18106322024459486_4851081394568342295_n_e656aab1.jpg"
                    alt="PC Gamer Beast Branco Infoprint"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">PCs Gamers</p>
                    <p className="text-[11px] text-slate-500">Alta performance RTX</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-3">
                  <img
                    src="/assets/aistudio/Elitebook_voc__encontra_aqui_na_Branco_Infoprint___WEBP__30ca4e05.webp"
                    alt="Notebooks Corporativos HP Elitebook"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Notebooks Pro</p>
                    <p className="text-[11px] text-slate-500">Revisados e com garantia</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width KPI and Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold text-slate-900">3 Lojas em SP</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Facilidade de acesso integrado aos shoppings de metrô
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold text-slate-900">Garantia Real</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Equipamentos 100% testados com nota fiscal e procedência
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold text-slate-900">Pronta Entrega</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Retirada imediata em loja física ou envio expresso
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-lg font-bold text-slate-900">Atendimento 100%</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Negociação direta pelo WhatsApp com resposta imediata
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
