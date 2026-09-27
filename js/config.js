/**
 * =========================================================
 *  CONFIG.JS — ARQUIVO CENTRAL DE PERSONALIZAÇÃO
 * =========================================================
 * Edite apenas este arquivo para atualizar textos, contatos,
 * links, estatísticas e experiência. Nenhum outro arquivo
 * precisa ser tocado para uma atualização de conteúdo.
 * =========================================================
 */

const CONFIG = {
  // ---------- IDENTIDADE ----------
  brand: {
    name: "Vinicios Kauã",
    shortName: "VK",
    role: "Desenvolvedor Full Stack & Suporte de TI",
    logo: "assets/images/logo/logo-header.png", // troque pelo arquivo da sua logo
    favicon: "assets/images/logo/favicon-192.png",
  },

  // ---------- FOTO DE PERFIL ----------
  profile: {
    photo: "assets/images/profile/foto-perfil.jpeg", // substitua pela sua foto real
    photoAlt: "Foto de Vinicios Kauã",
  },

  // ---------- HERO ----------
  hero: {
    eyebrow: "Salto, SP — Brasil",
    headline: "Transformando ideias em sistemas que funcionam.",
    subtext:
      "Estudante de Engenharia de Software e técnico em Informática, atuando com desenvolvimento web e suporte de infraestrutura. Construo sistemas que resolvem problemas reais de times e negócios.",
    ctaPrimary: { label: "Ver projetos", href: "#projetos" },
    ctaSecondary: { label: "Baixar currículo", href: "assets/cv/curriculo-vinicios-kaua.pdf" },
  },

  // ---------- SOBRE ----------
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Sou o Vinicios, tenho experiência prática em montagem e manutenção eletromecânica de máquinas, suporte técnico de TI e, mais recentemente, desenvolvimento de sistemas web. Essa combinação me dá uma visão pouco comum: entendo tanto a parte física e operacional de uma empresa quanto a parte lógica dos sistemas que a sustentam.",
      "Hoje curso Engenharia de Software na Anhanguera Educacional e sou Técnico em Informática formado pelo Senac São Paulo. No dia a dia, trabalho com Node.js, Express e MySQL para criar sistemas web completos — do banco de dados à interface — sempre pensando em resolver um problema real de forma simples e confiável.",
      "Meu objetivo é atuar na área de Tecnologia da Informação com foco em suporte técnico, infraestrutura e desenvolvimento de sistemas, contribuindo com a resolução de problemas, a manutenção de ambientes e a criação de soluções.",
    ],
    stats: [
      { value: "5", label: "Sistemas web desenvolvidos" },
      { value: "1", label: "Anos de experiência profissional" },
      { value: "5", label: "Certificações e cursos concluídos" },
      { value: "10+", label: "Tecnologias em uso" },
    ],
  },

  // ---------- EXPERIÊNCIA & FORMAÇÃO ----------
  timeline: {
    title: "Experiência & Formação",
    experience: [
      {
        period: "Atual",
        title: "Montador",
        place: "Kion Group",
        description:
          "Montagem completa de empilhadeiras elétricas e a combustão. Instalação de motores e sistemas hidráulicos, elétricos e eletrônicos. Programação e parametrização de módulos eletrônicos, interpretação de diagramas elétricos e identificação de falhas.",
      },
      {
        period: "2022 — 2023",
        title: "Ajudante Geral",
        place: "Larofi / Celmar Salto",
        description:
          "Carregamento e descarga, montagem e atendimento ao cliente, organização de estoques e arquivos, apoio às rotinas administrativas.",
      },
      {
        period: "2020 — 2022",
        title: "Ajudante Geral",
        place: "WA Móveis Planejados",
        description:
          "Corte e acabamento de peças, planejamento e pré-montagem, organização do setor e apoio à produção.",
      },
    ],
    education: [
      {
        period: "Cursando",
        title: "Bacharelado em Engenharia de Software",
        place: "Anhanguera Educacional",
      },
      {
        period: "Concluído",
        title: "Técnico em Informática",
        place: "Senac São Paulo",
      },
      {
        period: "Concluído",
        title: "Ensino Médio",
        place: "",
      },
    ],
    certifications: [
      { year: "2025", title: "Técnico em Informática", place: "Senac SP", hours: "1200h" },
      { year: "2025", title: "Excel do Básico ao Avançado", place: "Senac SP", hours: "72h" },
      { year: "2024", title: "Leitura e Interpretação de Desenho Técnico", place: "Meafocus", hours: "40h" },
      { year: "2021", title: "Curso de Informática", place: "MicroPro", hours: "4h" },
      { year: "2026", title: "Engenharia de Software (1º semestre)", place: "Anhanguera Educacional", hours: "" },
    ],
  },

  // ---------- HABILIDADES ----------
  skills: {
    title: "Habilidades",
    categories: [
      {
        name: "Desenvolvimento",
        items: [
          { name: "Node.js", level: "Uso frequente em projetos próprios" },
          { name: "Express.js", level: "Uso frequente em projetos próprios" },
          { name: "MySQL", level: "Modelagem e consultas em produção" },
          { name: "HTML", level: "Base de todo projeto web" },
          { name: "CSS", level: "Interfaces responsivas" },
          { name: "Bootstrap", level: "Prototipação rápida de layout" },
          { name: "Handlebars", level: "Templates server-side" },
          { name: "JavaScript", level: "Lógica de front e back-end" },
          { name: "Git & GitHub", level: "Versionamento e colaboração" },
        ],
      },
      {
        name: "Infraestrutura & Suporte",
        items: [
          { name: "Suporte técnico N1/N2", level: "Remoto e presencial" },
          { name: "Redes LAN/WAN", level: "Configuração e diagnóstico" },
          { name: "TCP/IP & DNS", level: "Fundamentos de rede" },
          { name: "Active Directory", level: "Noções de administração" },
          { name: "Firewall & Segurança", level: "Noções aplicadas" },
          { name: "Monitoramento de servidores", level: "Nível básico" },
        ],
      },
      {
        name: "Sistemas Operacionais",
        items: [
          { name: "Windows 10 / 11", level: "Instalação e suporte ao usuário" },
          { name: "Windows 7", level: "Manutenção e legado" },
          { name: "Formatação & Clonagem", level: "Deploy de máquinas" },
        ],
      },
      {
        name: "Ferramentas",
        items: [
          { name: "VS Code", level: "Ambiente principal de desenvolvimento" },
          { name: "Git", level: "Controle de versão" },
          { name: "GitHub", level: "Hospedagem e colaboração" },
          { name: "Railway", level: "Deploy em nuvem" },
        ],
      },
    ],
  },

  // ---------- CONTATO ----------
  contact: {
    title: "Vamos conversar",
    subtitle:
      "Aberto a oportunidades em desenvolvimento web e suporte de TI. Envie uma mensagem — respondo rápido.",
    email: "vini12kaua@hotmail.com",
    phoneDisplay: "(11) 97065-6550",
    whatsappNumber: "5511970656550", // formato internacional, usado no link do WhatsApp
    location: "Salto, SP — Brasil",
    // Troque pelos seus links reais quando estiverem prontos:
    github: "https://github.com/Vinicios-Kaua", // placeholder — substitua
    linkedin: "https://www.linkedin.com/in/vinicioskaua/", // placeholder — substitua
  },

  // ---------- RODAPÉ ----------
  footer: {
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Habilidades", href: "#habilidades" },
      { label: "Certificações", href: "#certificacoes" },
      { label: "Projetos", href: "#projetos" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Contato", href: "#contato" },
    ],
  },

  // ---------- NAVEGAÇÃO ----------
  // "Experiência" fica fora do menu principal de propósito: esse
  // histórico já está completo no currículo e no LinkedIn, então o
  // menu do topo prioriza o que o portfólio faz de melhor (stack,
  // certificações e projetos). A seção continua no site, acessível
  // pelo rodapé e por scroll.
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],
};
