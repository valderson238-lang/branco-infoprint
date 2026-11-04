import React, { useState } from 'react';
import { FEATURED_PRODUCTS, ProductItem, COMPANY_INFO } from '../data/companyData';
import { MessageCircle, Check, ShoppingBag, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  onSelectItemForQuote?: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectItemForQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'gamer' | 'notebook' | 'impressora' | 'periferico'>('all');

  const filterTabs = [
    { id: 'all', label: 'Todos os Equipamentos' },
    { id: 'gamer', label: 'PCs Gamers' },
    { id: 'notebook', label: 'Notebooks Revisados' },
    { id: 'impressora', label: 'Multifuncionais' },
    { id: 'periferico', label: 'Monitores & Periféricos' },
  ];

  const filteredProducts = activeTab === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="vendas" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Venda de Equipamentos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Catálogo de Equipamentos a Pronta Entrega
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Modelos novos e seminovos com bateria saudável, componentes testados, garantia e notas fiscais. Você pode testar e retirar pessoalmente em nossas lojas.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappMessage = `Olá! Vi o equipamento "${product.name}" no site da Branco Infoprint e gostaria de confirmar o valor, configurações e disponibilidade.`;
            const waLink = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <div
                key={product.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Subtle Condition Flag in corner */}
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {product.condition}
                  </div>

                  {product.popular && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Destaque</span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>{product.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700 font-semibold">{product.warranty}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {product.subtitle}
                    </p>

                    {/* Technical Highlights */}
                    <ul className="pt-2 space-y-1.5 border-t border-slate-100">
                      {product.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action CTA */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-500 block">Condição de Venda</span>
                        <span className="text-lg font-extrabold text-slate-900">
                          {product.suggestedPrice || 'Sob Consulta'}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium text-right max-w-[150px]">
                        {product.installments}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Consultar no WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Configuration Notice Card */}
        <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Procura uma configuração específica ou PC Gamer customizado?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Nossa equipe monta computadores sob medida para jogos, arquitetura, modelagem 3D e empresas. Escolha o processador, placa de vídeo e memória com o melhor custo-benefício.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de montar uma configuração personalizada de PC ou notebook.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 text-blue-600" />
            <span>Solicitar Orçamento Customizado</span>
          </a>
        </div>

      </div>
    </section>
  );
};
