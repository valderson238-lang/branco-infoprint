import React from 'react';
import { WHY_US_ITEMS, COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Truck, Users, Cpu, FileCheck2, ArrowUpRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Inspeção de Placa & Circuitos',
      desc: 'Testes de voltagem, portas de conexão, integridade de componentes e ausência de oxidação.',
    },
    {
      num: '02',
      title: 'Saúde da Bateria & Armazenamento',
      desc: 'Diagnóstico detalhado de ciclos da bateria e velocidade de leitura/escrita do SSD NVMe.',
    },
    {
      num: '03',
      title: 'Stress Test & Temperatura',
      desc: 'Processador e placa de vídeo sob carga pesada para garantir refrigeração silenciosa e estável.',
    },
    {
      num: '04',
      title: 'Higienização & Sistema Limpo',
      desc: 'Limpeza interna completa, troca de pasta térmica e instalação limpa do Windows original.',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
            Confiança & Rigor Técnico
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
            Por que escolher a Branco Infoprint para sua compra ou locação?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Diferente de marketplaces anônimos, você conta com lojas físicas abertas todos os dias, nota fiscal em todos os pedidos e uma equipe técnica pronta para ajudar você ou sua empresa.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_US_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-2xl font-black text-blue-400 font-mono">
                {item.stat}
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 20-Point Inspection Process Showcase */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-700/80 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Padrão de Qualidade Certificado
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">
                O que acontece antes de um notebook ir para a vitrine?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Cada máquina seminovos ou nova passa por um protocolo de bancada antes de ser liberada para venda ou entrega corporativa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="space-y-2">
                <span className="text-xs font-mono font-bold text-blue-400">{step.num}</span>
                <h4 className="text-sm font-bold text-slate-100">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Precisa de garantia estendida ou suporte corporativo dedicado? Fale com nossos consultores.
            </span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de entender mais sobre a garantia e procedência dos equipamentos da Branco Infoprint.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
            >
              <span>Conversar com um técnico agora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
