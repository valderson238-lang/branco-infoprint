export interface StoreLocation {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  address: string;
  subLocation: string;
  metroAccess: string;
  hoursWeekday: string;
  hoursWeekend: string;
  phoneDisplay: string;
  whatsappNumber: string;
  mapsUrl: string;
  image: string;
  description: string;
}

export interface ProductItem {
  id: string;
  category: 'gamer' | 'notebook' | 'desktop' | 'periferico' | 'impressora';
  categoryLabel: string;
  name: string;
  subtitle: string;
  condition: 'Seminovo Revisado' | 'Novo' | 'Linha Corporativa';
  warranty: string;
  highlights: string[];
  suggestedPrice?: string;
  installments?: string;
  image: string;
  popular?: boolean;
}

export const COMPANY_INFO = {
  name: 'Branco Infoprint',
  tagline: 'Soluções em Informática, Venda de Equipamentos e Locação Corporativa',
  primaryPhone: '(11) 3368-0091',
  whatsappRaw: '551133680091',
  instagram: 'https://www.instagram.com/brancoinfoprint',
  linktree: 'https://share.google/qFTPvPyBLJyGwQgIX',
  email: 'contato@brancoinfoprint.com.br',
  city: 'São Paulo - SP',
  logoImage: '/assets/aistudio/SaveClip.App_440501262_2490660347805631_8281113699024241009_n_77c39320.jpg',
};

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'tatuape',
    name: 'Shopping Metrô Tatuapé',
    shortName: 'Loja Tatuapé',
    badge: 'Piso Tatuapé',
    address: 'Rua Melo Freire, s/n - Piso Tatuapé',
    subLocation: 'Tatuapé, São Paulo - SP, CEP 03314-030',
    metroAccess: 'Acesso direto integrado à estação Tatuapé (Linha 3-Vermelha e CPTM)',
    hoursWeekday: 'Segunda a Sábado: 10h às 22h',
    hoursWeekend: 'Domingos e Feriados: 14h às 20h',
    phoneDisplay: '(11) 3368-0091',
    whatsappNumber: '551133680091',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shopping+Metro+Tatuape+Sao+Paulo',
    image: '/assets/aistudio/SaveClip.App_587653413_18070900031459486_8737145959328869096_n.jpg_ea987c7a.webp',
    description: 'Nossa loja dentro do Shopping Metrô Tatuapé oferece vitrine completa de notebooks seminovos e novos, PCs Gamers prontos para teste, periféricos e balcão de atendimento corporativo.',
  },
  {
    id: 'itaquera',
    name: 'Shopping Metrô Itaquera',
    shortName: 'Loja Itaquera',
    badge: 'Piso Campanella',
    address: 'Av. José Pinheiro Borges, s/n - Piso Campanella',
    subLocation: 'Itaquera, São Paulo - SP, CEP 08220-900',
    metroAccess: 'Conexão direta pela estação Corinthians-Itaquera (Metrô Linha 3 e CPTM)',
    hoursWeekday: 'Segunda a Sábado: 10h às 22h',
    hoursWeekend: 'Domingos e Feriados: 14h às 20h',
    phoneDisplay: '(11) 3368-0091',
    whatsappNumber: '551133680091',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shopping+Metro+Itaquera+Sao+Paulo',
    image: '/assets/aistudio/SaveClip.App_831424293_18103997129459486_6113473036357634972_n_137c5aa2.jpg',
    description: 'Localizada no Piso Campanella com equipe técnica experiente, estoque a pronta entrega de notebooks Dell, HP e Lenovo com garantia e facilidade de pagamento em até 12x.',
  },
  {
    id: 'sao-miguel',
    name: 'São Miguel Paulista',
    shortName: 'Loja São Miguel',
    badge: 'Loja de Rua / Bairro',
    address: 'Rua central no coração de São Miguel Paulista',
    subLocation: 'São Miguel Paulista, Zona Leste - São Paulo - SP',
    metroAccess: 'Fácil acesso pela Av. Marechal Tito e Estação São Miguel da CPTM',
    hoursWeekday: 'Segunda a Sexta: 09h às 18h',
    hoursWeekend: 'Sábados: 09h às 14h',
    phoneDisplay: '(11) 3368-0091',
    whatsappNumber: '551133680091',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sao+Miguel+Paulista+Sao+Paulo+SP',
    image: '/assets/aistudio/Venha_visitar_nossa_loja___WEBP__06518ea3.webp',
    description: 'Unidade tradicional de rua com foco em atendimento personalizado para moradores locais e empresas da região, suporte ágil para equipamentos e contratos de locação.',
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'pc-gamer-beast',
    category: 'gamer',
    categoryLabel: 'PC Gamer Alta Performance',
    name: 'PC Gamer Branco Monster Edition',
    subtitle: 'Gabinete Open Air Blue, GeForce RTX, Water Cooler RGB',
    condition: 'Novo',
    warranty: 'Garantia de 1 Ano',
    highlights: [
      'Placa de Vídeo NVIDIA GeForce RTX Dedicada',
      'Water Cooler RGB com Display de Temperatura',
      'Processador Intel Core i5/i7 ou AMD Ryzen',
      'Gabinete Futurista Exclusivo com Painéis de Vidro Temperado',
      '16GB / 32GB RAM DDR4/DDR5 + NVMe M.2 Ultrarrápido',
      'Montado, otimizado e pronto para rodar qualquer jogo',
    ],
    suggestedPrice: 'Consulte Configurações',
    installments: 'Até 12x no cartão ou desconto no PIX',
    image: '/assets/aistudio/SaveClip.App_863563927_18106322024459486_4851081394568342295_n_e656aab1.jpg',
    popular: true,
  },
  {
    id: 'hp-elitebook-pro',
    category: 'notebook',
    categoryLabel: 'Notebook Corporativo',
    name: 'HP Elitebook Silver Aluminium',
    subtitle: 'Linha Corporativa Premium, Windows 11 Pro, Bateria Saudável',
    condition: 'Seminovo Revisado',
    warranty: 'Garantia com Nota Fiscal',
    highlights: [
      'Chassi reforçado em alumínio usinado ultraleve',
      'Processador Intel Core i5 / i7 de alto rendimento',
      '16GB Memória RAM para multitarefa sem travamentos',
      'SSD NVMe de inicialização instantânea',
      'Teclado retroiluminado e leitor biométrico',
      'Bateria com excelente autonomia e carregador original',
    ],
    suggestedPrice: 'Sob Consulta',
    installments: 'Parcelamento em até 12x ou à vista',
    image: '/assets/aistudio/Elitebook_voc__encontra_aqui_na_Branco_Infoprint___WEBP__30ca4e05.webp',
    popular: true,
  },
  {
    id: 'dell-latitude-touch',
    category: 'notebook',
    categoryLabel: 'Notebook Dell Core i7',
    name: 'Dell Latitude 5480 Touchscreen',
    subtitle: 'Core i7 · 16GB RAM · SSD NVMe 128GB + HD 1TB · Placa de Vídeo 4GB',
    condition: 'Seminovo Revisado',
    warranty: 'Garantia de Balcão e Procedência',
    highlights: [
      'Processador Intel Core i7 de 7ª Geração',
      '16GB Memória RAM para trabalho pesado e edição',
      'Armazenamento Híbrido: NVMe 128GB (Sistema) + HD 1TB (Dados)',
      'Placa de vídeo dedicada 4GB para design e engenharia',
      'Tela Touchscreen Full HD de alta precisão',
      'Windows 11 e pacote Office configurados',
    ],
    suggestedPrice: 'R$ 3.200,00',
    installments: '10x de R$ 320,00 sem juros ou desconto no PIX',
    image: '/assets/aistudio/Lindo_Notebook__I7_-_7_Gera__o__16GB_RAM__NVME_128GB___HD_1_TB__Placa_de_v_deo_4_GB_Windows_11__Apenas_3.200___Estamos_localizados_dentro_do_Sho_WEBP__75272d8b.webp',
  },
  {
    id: 'impressoras-outsourcing',
    category: 'impressora',
    categoryLabel: 'Impressoras & Multifuncionais',
    name: 'Multifuncionais Laser & Tanque de Tinta',
    subtitle: 'Locação com Manutenção e Suprimentos Inclusos',
    condition: 'Linha Corporativa',
    warranty: 'Suporte e Troca em até 24h',
    highlights: [
      'Impressão e digitalização rápida frente e verso automática',
      'Redução comprovada de custos por página impressa',
      'Substituição de toners e tintas inclusa no contrato',
      'Monitoramento preventivo e manutenção sem custo adicional',
      'Ideal para escritórios, clínicas, comércios e escolas',
    ],
    suggestedPrice: 'Planos Mensais Flexíveis',
    installments: 'Faturamento direto para CNPJ com nota fiscal',
    image: '/assets/aistudio/SaveClip.App_587653413_18070900031459486_8737145959328869096_n.jpg_ea987c7a.webp',
  },
  {
    id: 'monitores-ultra-perifericos',
    category: 'periferico',
    categoryLabel: 'Monitores & Periféricos',
    name: 'Monitores Ultra & Periféricos Pro',
    subtitle: 'Monitores LED Full HD, Teclados, Mouses e Headsets',
    condition: 'Novo',
    warranty: 'Garantia de Fábrica',
    highlights: [
      'Monitores Ultra com resolução Full HD e bordas finas',
      'Teclados mecânicos e ergonômicos para trabalho e jogos',
      'Mouses de alta sensibilidade e durabilidade',
      'Cabos HDMI, adaptadores DisplayPort e fontes de reposição',
      'Retirada imediata em qualquer uma das 3 lojas',
    ],
    suggestedPrice: 'A partir de R$ 79,90',
    installments: 'Opções à pronta entrega',
    image: '/assets/aistudio/SaveClip.App_587653413_18070900031459486_8737145959328869096_n.jpg_ea987c7a.webp',
  },
];

export const OUTSOURCING_BENEFITS = [
  {
    title: 'Zero Custo com Depreciação',
    desc: 'Esqueça máquinas obsoletas no balanço. Renove sua frota periodicamente sem desembolsar grandes quantias.',
  },
  {
    title: 'Manutenção e Peças 100% Inclusas',
    desc: 'Se algum equipamento falhar, nossa equipe técnica repara ou substitui a máquina com velocidade prioritária.',
  },
  {
    title: 'Benefício Fiscal (OPEX)',
    desc: 'As mensalidades de locação entram como despesa operacional, podendo ser abatidas no IRPJ (Lucro Real).',
  },
  {
    title: 'Equipamentos Padronizados e Prontos',
    desc: 'Notebooks e impressoras já chegam com Windows e softwares configurados para a sua equipe começar a produzir.',
  },
];

export const WHY_US_ITEMS = [
  {
    stat: '3 Lojas',
    title: 'Presença Física Real em SP',
    desc: 'Lojas no Metrô Tatuapé, Metrô Itaquera e São Miguel Paulista. Você testa antes de comprar e pode retirar na hora.',
  },
  {
    stat: '20+ Itens',
    title: 'Checklist Rigoroso de Revisão',
    desc: 'Baterias, tela, portas USB, teclado, disco e refrigeração são 100% testados em bancada antes de ir à vitrine.',
  },
  {
    stat: 'Garantia',
    title: 'Segurança e Procedência Legal',
    desc: 'Todos os produtos possuem procedência limpa, nota fiscal e termo de garantia claro sem letras miúdas.',
  },
  {
    stat: 'Agilidade',
    title: 'Atendimento Rápido no WhatsApp',
    desc: 'Fale diretamente com quem entende do assunto para tirar dúvidas, receber fotos ou fechar locação corporativa.',
  },
];
