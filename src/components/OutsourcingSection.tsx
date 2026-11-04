import React, { useState } from 'react';
import { COMPANY_INFO, OUTSOURCING_BENEFITS } from '../data/companyData';
import { Printer, Laptop, Monitor, Wrench, FileText, CheckCircle2, MessageCircle, Calculator, ArrowRight } from 'lucide-react';

interface OutsourcingSectionProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const OutsourcingSection: React.FC<OutsourcingSectionProps> = ({ onOpenQuoteModal }) => {
  // Fast Interactive Simulator State
  const [equipmentType, setEquipmentType] = useState<'notebooks' | 'desktops' | 'impressoras' | 'completo'>('notebooks');
  const [quantity, setQuantity] = useState<number>(5);
  const [period, setPeriod] = useState<number>(24);

  const equipmentLabels = {
    notebooks: 'Notebooks Corporativos (Intel Core i5/i7, 16GB)',
    desktops: 'Desktops / Computadores de Alta Produtividade',
    impressoras: 'Multifuncionais Laser com Suprimentos Inclusos',
    completo: 'Kit Completo (Notebooks + Multifuncionais)',
  };

  const getEstimatedSavings = () => {
    // Representative savings illustration based on equipment count
    return quantity * 380;
  };

  const handleSimulateWhatsApp = () => {
    const text = `Olá! Gostaria de uma proposta de locação corporativa para minha empresa:\n- Equipamento: ${equipmentLabels[equipmentType]}\n- Quantidade estimada: ${quantity} unidades\n- Prazo de locação: ${period} meses\nPoderiam me enviar uma cotação formal com condições e prazos?`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="locacao" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Outsourcing & Locação B2B
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Aluguel de computadores, notebooks e impressoras para empresas.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Elimine custos altos com compra de equipamentos e imobilização de capital. Tenha equipamentos modernos, manutenção preventiva e substituição rápida para o seu negócio não parar.
          </p>
        </div>

        {/* 2-Column Split: Services & Benefits (Left) + Interactive Simulator (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 4 Key Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Por que sua empresa ganha mais alugando com a Branco Infoprint?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OUTSOURCING_BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Proof Card */}
            <div className="p-5 rounded-xl bg-blue-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>SLA de Atendimento em São Paulo</span>
              </div>
              <p className="text-sm font-medium text-slate-100">
                Qualquer problema de hardware é solucionado com manutenção no local ou substituição imediata por equipamento reserva em até 24h.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-blue-200">
                <span>· Contratos flexíveis de 12 a 36 meses</span>
                <span>· Faturamento via boleto para CNPJ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Rental Calculator */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Simulador de Locação Corporativa
                    </h3>
                    <p className="text-xs text-slate-500">
                      Calcule sua demanda e receba proposta personalizada
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 1: Select Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  1. Qual equipamento sua empresa precisa?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setEquipmentType('notebooks')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer flex items-center gap-2.5 ${
                      equipmentType === 'notebooks'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Laptop className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs">Notebooks</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEquipmentType('desktops')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer flex items-center gap-2.5 ${
                      equipmentType === 'desktops'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Monitor className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs">Desktops / PCs</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEquipmentType('impressoras')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer flex items-center gap-2.5 ${
                      equipmentType === 'impressoras'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <Printer className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs">Multifuncionais</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEquipmentType('completo')}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer flex items-center gap-2.5 ${
                      equipmentType === 'completo'
                        ? 'border-blue-600 bg-blue-50/50 text-blue-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs">Pacote Completo</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Quantity Slider / Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Quantidade de Equipamentos:
                  </label>
                  <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                    {quantity} {quantity === 1 ? 'unidade' : 'unidades'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>1 unidade</span>
                  <span>10</span>
                  <span>25</span>
                  <span>50+ máquinas</span>
                </div>
              </div>

              {/* Step 3: Contract Period */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  3. Prazo do Contrato:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[12, 24, 36].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setPeriod(m)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                        period === m
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {m} meses
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary and Inclusions */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Tudo Incluso na sua Mensalidade:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Suporte técnico contínuo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Troca rápida em caso de defeito</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Toners e suprimentos inclusos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% dedutível no IR (OPEX)</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleSimulateWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Demanda Direto no WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Resposta rápida em horário comercial. Atendemos toda a Grande São Paulo e região.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
