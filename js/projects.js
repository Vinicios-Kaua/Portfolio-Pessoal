/**
 * =========================================================
 *  PROJECTS.JS — DADOS DOS PROJETOS
 * =========================================================
 * Para adicionar um novo projeto, copie um objeto do array
 * abaixo e ajuste os campos. As imagens ficam em:
 *   assets/images/projects/<pasta-do-projeto>/
 * Basta trocar os arquivos placeholder pelos prints reais
 * mantendo os mesmos nomes de arquivo.
 *
 * "cover" é a imagem (ou vídeo) do card no carrossel de
 * projetos (a "capa"). Ela é independente da galeria — não
 * aparece na lista de telas do modal de detalhes, mesmo que
 * seja o mesmo arquivo de alguma imagem de "images". Se
 * "cover" não for definido, o card usa a primeira imagem de
 * "images" como fallback (mas aí ela também aparece na
 * galeria).
 *
 * "cover" aceita dois formatos:
 *   1) string — caminho de uma imagem normal (jpg/png/webp).
 *   2) objeto — capa animada (vídeo em loop), usada em
 *      projetos ainda em desenvolvimento:
 *        cover: {
 *          type: "video",
 *          src: "assets/videos/<projeto>/capa.webm",   // preferencial (mais leve)
 *          fallback: "assets/videos/<projeto>/capa.mp4", // usado se o navegador não tocar webm
 *          poster: "assets/images/projects/<projeto>/capa-poster.png" // frame estático exibido antes do vídeo carregar
 *        }
 *      O vídeo toca em loop, mudo e automaticamente (autoplay
 *      + muted + playsinline), sem precisar de nenhum JS extra.
 *
 * "status" (opcional): defina como "em-desenvolvimento" para
 * exibir o selo "Em desenvolvimento" no card e no modal.
 * Omita o campo (ou remova) quando o projeto estiver concluído.
 *
 * Projeto em desenvolvimento normalmente ainda não tem prints
 * reais das telas — nesse caso, deixe "images: []" (array
 * vazio). O modal detecta isso e mostra uma mensagem no lugar
 * da galeria, em vez de tentar exibir uma tela que não existe.
 *
 * Exemplo de projeto em desenvolvimento (copie e ajuste):
 *   {
 *     id: "novo-projeto",
 *     title: "Nome do Projeto",
 *     category: "Sistema Web",
 *     status: "em-desenvolvimento",
 *     cover: {
 *       type: "video",
 *       src: "assets/videos/novo-projeto/capa.webm",
 *       fallback: "assets/videos/novo-projeto/capa.mp4",
 *       poster: "assets/images/projects/novo-projeto/capa-poster.png",
 *     },
 *     shortDescription: "Uma frase curta sobre o que o sistema faz.",
 *     technologies: ["Node.js", "MySQL"],
 *     challenge: "Qual problema o sistema resolve.",
 *     solution: "Como o sistema resolve esse problema.",
 *     features: ["Funcionalidade 1", "Funcionalidade 2"],
 *     images: [], // ainda sem prints — preencha quando tiver
 *     info: { "Tipo": "Sistema Web", "Papel": "Desenvolvimento completo (full stack)", "Hospedagem": "—" },
 *   }
 *
 * Cada imagem da galeria é um objeto { src, title, description }.
 * - title: nome curto da tela (ex.: "Histórico de vendas")
 * - description: o que a tela faz, em uma frase
 * Ambos são opcionais: deixe "" ou remova o campo para não
 * exibir aquela linha. Se os dois estiverem vazios, a tela
 * aparece sem nenhum texto embaixo da imagem.
 * =========================================================
 */


const PROJECTS = [
  {
    id: "kion-requisition",
    title: "Kion Requisition",
    category: "Sistema Interno (PWA)",
    cover: "assets/images/projects/kion-requisition/capa-kion-requisition.png",
    shortDescription:
      "Sistema interno para gerenciamento de requisições e controle de baterias e gás.",
    technologies: ["Node.js", "Express.js", "MySQL", "JavaScript", "PWA"],
    challenge:
      "O setor não tinha controle digital das requisições internas, o que causava perda de tempo com deslocamento de funcionários para pedir materiais e falta de rastreabilidade sobre quem pediu o quê e quando.",
    solution:
      "Desenvolvi um PWA completo com Node.js, Express e MySQL que centraliza as requisições por setor, permite a confirmação de recebimento por número de matrícula ou leitura de crachá, disponibiliza o acompanhamento em tempo real do status de cada solicitação e garante que requisições de gás sejam sempre tratadas como prioridade.",
    features: [
      "Cadastro e controle de requisições por setor",
      "Leitura de QR Code para confirmação de recebimento",
      "Monitoramento do status em tempo real",
      "Histórico completo de movimentações",
      "Interface responsiva, utilizável em celular no chão de fábrica",
    ],
    images: [
      { src: "assets/images/projects/kion-requisition/tela-login.png", title: "Tela de Login", description: "Tela de login do sistema." },
      { src: "assets/images/projects/kion-requisition/tela-admin.png", title: "Tela de Administração", description: "Painel administrativo do sistema, usado para facilitar a manutenção e o fluxo interno." },
      { src: "assets/images/projects/kion-requisition/tela-nova-requisicao.png", title: "Tela de Nova Requisição", description: "Tela para criação de novas requisições, otimizada para uso em dispositivos móveis." },
      { src: "assets/images/projects/kion-requisition/sidebar-tablet.png", title: "Sidebar — Tablet", description: "Sidebar otimizada para uso em tablets." },
      { src: "assets/images/projects/kion-requisition/tela-nova-requisicao-escuro.png", title: "Tela de Nova Requisição — Modo Escuro", description: "Tela de nova requisição no modo escuro." },
      { src: "assets/images/projects/kion-requisition/tela-minhas-requisicoes.png", title: "Tela de Minhas Requisições", description: "Histórico de requisições do usuário, continuação da tela de nova requisição. Otimizada para uso em dispositivos móveis." },
      { src: "assets/images/projects/kion-requisition/tela-minhas-requisicoes-escuro.png", title: "Tela de Minhas Requisições — Modo Escuro", description: "Tela de minhas requisições no modo escuro." },
      { src: "assets/images/projects/kion-requisition/tela-acompanhamento-logistica.png", title: "Tela de Acompanhamento de Logística", description: "Tela de acompanhamento da logística, usada para notificar quando não há baterias em estoque ou quando elas já chegaram à empresa." },
      { src: "assets/images/projects/kion-requisition/sidebar-painel.png", title: "Sidebar — Painel", description: "Sidebar otimizada para uso em painéis." },
      { src: "assets/images/projects/kion-requisition/tela-acompanhamento-logistica-escuro.png", title: "Tela de Acompanhamento de Logística — Modo Escuro", description: "Tela de acompanhamento de logística no modo escuro." },
      { src: "assets/images/projects/kion-requisition/tela-historico-solicitacoes.png", title: "Tela de Histórico de Solicitações", description: "Tela com o histórico de solicitações." },
      { src: "assets/images/projects/kion-requisition/tela-historico-solicitacoes-escuro.png", title: "Tela de Histórico de Solicitações — Modo Escuro", description: "Tela de histórico de solicitações no modo escuro." },
      { src: "assets/images/projects/kion-requisition/tela-impressao-logistica.png", title: "Tela de Impressão de Logística", description: "Tela para impressão da lista de baterias da logística." },
      { src: "assets/images/projects/kion-requisition/tela-impressao-logistica-escuro.png", title: "Tela de Impressão de Logística — Modo Escuro", description: "Tela de impressão de logística no modo escuro." },
      { src: "assets/images/projects/kion-requisition/tela-tv-requisicoes.png", title: "Tela de TV — Requisições", description: "Tela exibida em TVs para visualização de requisições em tempo real." },
      { src: "assets/images/projects/kion-requisition/alerta-gas-tv.png", title: "Alerta de Gás — TV", description: "Alerta exibido em TVs para notificar uma nova requisição de gás." },
    ],
    info: {
      "Tipo": "Sistema interno (PWA)",
      "Papel": "Desenvolvimento completo (full stack)",
      "Hospedagem": "—",
    },
  },
  {
    id: "agendamento",
    title: "Sistema de Agendamento De Exames Admissionais — Eucatex",
    category: "Sistema Interno (web)",
    cover: "assets/images/projects/agendamento-eucatex/capa-agendamento-eucatex.png",
    shortDescription:
      "Plataforma web para controle de horários disponíveis e remarcação de agendamentos para exames admissionais.",
    technologies: ["Node.js", "Express", "Handlebars", "MySQL", "JavaScript"],
    challenge:
      "A marcação de horários era feita de forma manual, gerando conflitos de agenda, falta de visibilidade sobre horários livres e dificuldade para remarcar compromissos rapidamente.",
    solution:
      "Construí um sistema web com Node.js, Express e MySQL, com views renderizadas em Handlebars e interface responsiva, que organiza os horários disponíveis, permite remarcação e reduz conflitos de agenda.",
    features: [
      "Controle de horários disponíveis em tempo real",
      "Remarcação e cancelamento de agendamentos",
      "Interface responsiva para desktop e celular",
      "Painel simples para gestão dos horários",
    ],
    images: [
      { src: "assets/images/projects/agendamento-eucatex/tela-home.png", title: "Tela Home", description: "Tela principal do sistema, onde é possível visualizar como ele funciona e como utilizá-lo. (Área administrativa disponível apenas para testes.)" },
      { src: "assets/images/projects/agendamento-eucatex/tela-home-2.png", title: "Tela Home — Continuação", description: "Continuação da tela principal do sistema." },
      { src: "assets/images/projects/agendamento-eucatex/tela-unidades.png", title: "Tela de Unidades", description: "Tela de unidades, exibida após clicar em \"Novo agendamento\". Permite selecionar a unidade desejada para o agendamento." },
      { src: "assets/images/projects/agendamento-eucatex/tela-unidades-2.png", title: "Tela de Unidades — Continuação", description: "Continuação da tela de unidades do sistema." },
      { src: "assets/images/projects/agendamento-eucatex/tela-unidades-3.png", title: "Tela de Unidades — Continuação", description: "Continuação da tela de unidades do sistema." },
      { src: "assets/images/projects/agendamento-eucatex/tela-novo-agendamento.png", title: "Tela de Cadastro de Agendamento", description: "Tela para criar um novo agendamento, preenchida com os dados necessários após a seleção da unidade." },
      { src: "assets/images/projects/agendamento-eucatex/tela-consultar-agendamento.png", title: "Tela de Consultar Agendamento", description: "Tela para consultar um agendamento existente, com opções de edição e cancelamento." },
      { src: "assets/images/projects/agendamento-eucatex/tela-consultar-agendamento-2.png", title: "Tela de Consultar Agendamento — Continuação", description: "Continuação da tela de consulta de agendamento existente." },
      { src: "assets/images/projects/agendamento-eucatex/tela-login.png", title: "Tela de Login", description: "Tela de login do sistema, usada para acesso à área administrativa." },
      { src: "assets/images/projects/agendamento-eucatex/tela-lista-agendamentos.png", title: "Tela de Lista de Agendamentos", description: "Listagem de agendamentos, para facilitar a visualização e a gestão, com opções de confirmação, cancelamento e registro de falta no exame." },
      { src: "assets/images/projects/agendamento-eucatex/tela-dashboard.png", title: "Tela de Dashboard", description: "Painel diário usado para acompanhar a média de comparecimento aos exames." },
    ],
    info: {
      "Tipo": "Sistema Interno (web)",
      "Papel": "Desenvolvimento completo (full stack)",
      "Hospedagem": "—",
    },
  },
  {
    id: "stkf",
    title: "STKF — App para Fitas",
    category: "Sistema Web (PWA)",
    cover: "assets/images/projects/stkf/capa-stkf.png",
    shortDescription:
      "Aplicativo mobile para controle e gestão de fitas, com backend próprio e banco de dados relacional.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    challenge:
      "O controle de fitas era feito de forma dispersa, sem um aplicativo centralizado que permitisse consultar e atualizar informações de forma rápida em campo.",
    solution:
      "Desenvolvi um aplicativo mobile em PWA integrado a uma API própria em Node.js com banco de dados MySQL, permitindo consultar, cadastrar e atualizar informações de fitas diretamente pelo celular.",
    features: [
      "Sistema PWA para uso em dispositivos móveis",
      "API própria em Node.js para comunicação com o app",
      "Banco de dados MySQL para persistência dos dados",
      "Cadastro e consulta rápida em campo",
    ],
    images: [
      { src: "assets/images/projects/stkf/tela-login.png", title: "Tela de Login", description: "Tela de login do aplicativo." },
      { src: "assets/images/projects/stkf/tela-estoque-fitas.png", title: "Tela de Estoque de Fitas", description: "Estoque de fitas disponível, mostrando tamanho e descrição de cada item." },
      { src: "assets/images/projects/stkf/tela-retiradas-fita.png", title: "Tela de Retiradas de Fita", description: "Tela que mostra as fitas retiradas para produção." },
      { src: "assets/images/projects/stkf/tela-cadastro-fita.png", title: "Tela de Cadastro de Fita", description: "Tela para cadastrar novas fitas." },
      { src: "assets/images/projects/stkf/tela-estoque-chapas.png", title: "Tela de Estoque de Chapas", description: "Estoque de chapas disponível, mostrando tamanho e descrição de cada item." },
      { src: "assets/images/projects/stkf/tela-retiradas-chapas.png", title: "Tela de Retiradas de Chapas", description: "Tela que mostra as chapas retiradas para produção." },
      { src: "assets/images/projects/stkf/tela-cadastro-chapas.png", title: "Tela de Cadastro de Chapas", description: "Tela para cadastrar novas chapas." },
      { src: "assets/images/projects/stkf/tela-cadastro-chapas-2.png", title: "Tela de Cadastro de Chapas — Continuação", description: "Continuação da tela de cadastro de chapas." },
      { src: "assets/images/projects/stkf/botao-historico.png", title: "Botão de Histórico", description: "Botão em destaque que dá acesso ao histórico de operações." },
      { src: "assets/images/projects/stkf/tela-historico.png", title: "Tela de Histórico", description: "Histórico de operações, usado para consultar atualizações e controles tanto de fitas quanto de chapas." },
      { src: "assets/images/projects/stkf/botao-controle-usuarios.png", title: "Botão de Controle de Usuários", description: "Botão em destaque que dá acesso ao controle de usuários." },
      { src: "assets/images/projects/stkf/tela-controle-usuarios.png", title: "Tela de Controle de Usuários", description: "Tela para gerenciar usuários do sistema, permitindo criar e editar perfis." },
    ],
    info: {
      "Tipo": "Sistema Web (PWA)",
      "Papel": "Desenvolvimento completo (Full stack)",
      "Hospedagem": "—",
    },
  },
  {
    id: "adega-smart",
    title: "Adega Smart",
    category: "Sistema Web (PWA)",
    cover: "assets/images/projects/adega-smart/capa-adega-smart.png",
    shortDescription:
      "Sistema de gerenciamento de estoque para adega, com controle de entradas, saídas e disponibilidade.",
    technologies: ["Node.js", "Express.js", "MySQL", "JavaScript"],
    challenge:
      "A gestão do estoque da adega era feita manualmente, dificultando saber a quantidade exata disponível de cada item e o histórico de movimentações.",
    solution:
      "Criei um sistema web PWA com Node.js, Express e MySQL para controlar entradas e saídas do estoque, com uma interface simples para consulta rápida da disponibilidade de cada produto.",
    features: [
      "Controle de entradas e saídas de estoque",
      "Consulta rápida de disponibilidade por item",
      "Histórico de movimentações",
      "Interface simples e direta para uso no dia a dia",
    ],
    images: [
      { src: "assets/images/projects/adega-smart/tela-inicial.png", title: "Tela de Estoque", description: "Tela para visualizar e gerenciar o estoque da adega." },
      { src: "assets/images/projects/adega-smart/tela-dashboard.png", title: "Dashboard", description: "Visão geral das operações e métricas do sistema." },
      { src: "assets/images/projects/adega-smart/tela-historico.png", title: "Histórico de Vendas", description: "Filtro por período (hoje, ontem, 7 dias, este mês) e totais em tempo real." },
    ],
    info: {
      "Tipo": "Sistema web (PWA)",
      "Papel": "Desenvolvimento completo (full stack)",
      "Hospedagem": "—",
    },
  },
  {
    id: "r46-studio",
    title: "R46 Studio — Plataforma de Edição de Fotos e Vídeos",
    category: "Sistema Web (Full Stack)",
    status: "em-desenvolvimento",
    cover: {
      type: "video",
      src: "assets/videos/r46-studio/working_loop.webm",
      fallback: "assets/videos/r46-studio/working_loop.mp4"
    },
    shortDescription:
      "Plataforma completa para uma produtora de edição de fotos e vídeos de motos, com carrinho, pedidos, pagamento via PIX e painel administrativo.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
    challenge:
      "A R46 Studio precisava de um sistema próprio para receber pedidos de edição de fotos e vídeos, sem depender de troca de mensagens manual — com controle de pagamento, revisões e entrega de arquivos organizados em um único lugar.",
    solution:
      "Desenvolvi uma plataforma full stack com backend em Node.js/Express e banco de dados MySQL, cobrindo todo o fluxo do cliente (cadastro, carrinho, pedido, upload de arquivos, pagamento via PIX, revisões) e um painel administrativo completo para gestão de pedidos, portfólio e catálogo de serviços.",
    features: [
      "Cadastro e login de clientes com autenticação via JWT",
      "Carrinho de compras com pacotes de fotos configuráveis pelo admin",
      "Pedidos de fotos (preço fechado) e vídeos (orçamento personalizado)",
      "Upload obrigatório de arquivo original e referência opcional por foto",
      "Registro de pagamento via PIX com confirmação manual pelo administrador",
      "Sistema de revisões com limite configurável por pedido",
      "Entrega de arquivos finais com controle de liberação de download",
      "Painel administrativo completo (pedidos, portfólio, pacotes e configurações do sistema)",
      "Portfólio público com fotos e vídeos, incluindo player com seleção de trecho de vídeo",
    ],
    images: [],
    info: {
      "Tipo": "Sistema Web (Full Stack)",
      "Papel": "Desenvolvimento completo (Full stack)",
      "Hospedagem": "—",
    },
  },
];