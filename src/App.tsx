/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { OutsourcingSection } from './components/OutsourcingSection';
import { StoresSection } from './components/StoresSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { FastQuoteModal } from './components/FastQuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('locacao');

  const handleOpenQuote = (service: string = 'locacao') => {
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenQuote={() => handleOpenQuote('locacao')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote('locacao')} />

        {/* Sales & Equipment Catalog */}
        <ProductsSection />

        {/* Corporate Outsourcing & Rental */}
        <OutsourcingSection onOpenQuoteModal={handleOpenQuote} />

        {/* 3 Physical Store Locations in São Paulo */}
        <StoresSection />

        {/* Why Choose Us & Technical Inspection Protocol */}
        <WhyChooseUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Interactive Quick Quote / Contact Modal */}
      <FastQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
