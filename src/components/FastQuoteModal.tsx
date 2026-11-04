import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { COMPANY_INFO, STORE_LOCATIONS } from '../data/companyData';

interface FastQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const FastQuoteModal: React.FC<FastQuoteModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [interest, setInterest] = useState<string>(defaultService || 'locacao');
  const [preferredStore, setPreferredStore] = useState<string>('tatuape');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const interestLabels: Record<string, string> = {
      locacao: 'Locação & Outsourcing de Computadores / Notebooks',
      impressoras: 'Aluguel de Impressoras & Multifuncionais',
      compra_gamer: 'Compra de PC Gamer',
      compra_note: 'Compra de Notebook Revisado / Novo',
      geral: 'Outros Assuntos / Suporte',
    };

    const storeObj = STORE_LOCATIONS.find((s) => s.id === preferredStore);
    const storeLabel = storeObj ? storeObj.name : 'Loja Geral';

    const message = `Olá, Branco Infoprint!\n\n` +
      `Me chamo *${name}*${company ? ` da empresa *${company}*` : ''}.\n` +
      `*Interesse:* ${interestLabels[interest] || interest}\n` +
      `*Unidade de preferência:* ${storeLabel}\n` +
      `*WhatsApp:* ${phone}\n` +
      (notes ? `*Observações:* ${notes}\n` : '') +
      `\nGostaria de receber uma proposta ou atendimento!`;

    const targetWaNumber = storeObj ? storeObj.whatsappNumber : COMPANY_INFO.whatsappRaw;
    const waUrl = `https://wa.me/${targetWaNumber}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Solicitar Orçamento Rápido
            </h3>
            <p className="text-xs text-slate-500">
              Atendimento ágil direto no WhatsApp da Branco Infoprint
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Redirecionando para o WhatsApp...
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
              Sua mensagem formatada foi gerada e a janela do WhatsApp foi aberta para você falar diretamente com nossa equipe.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            
            {/* Interest */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">
                O que você precisa?
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="locacao">Locação & Outsourcing de Notebooks/PCs (Empresas)</option>
                <option value="impressoras">Aluguel de Impressoras e Multifuncionais</option>
                <option value="compra_gamer">Comprar PC Gamer de Alta Performance</option>
                <option value="compra_note">Comprar Notebook Revisado com Garantia</option>
                <option value="geral">Outros Assuntos / Suporte Geral</option>
              </select>
            </div>

            {/* Preferred Store */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wider">
                Unidade de Atendimento:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {STORE_LOCATIONS.map((store) => (
                  <button
                    key={store.id}
                    type="button"
                    onClick={() => setPreferredStore(store.id)}
                    className={`p-2 rounded-xl text-center border text-xs font-semibold transition-colors cursor-pointer ${
                      preferredStore === store.id
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {store.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Company (Optional) */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Nome da Empresa (opcional para pessoa física)
              </label>
              <input
                type="text"
                placeholder="Ex: Minha Empresa Ltda"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Detalhes do equipamento ou quantidade
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Preciso de 4 notebooks i5 com 16GB para equipe de vendas..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            {/* Security note */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Seus dados são protegidos e usados apenas para o atendimento.</span>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp Agora</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
