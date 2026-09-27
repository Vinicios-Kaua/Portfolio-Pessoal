# Portfólio — Vinicios Kauã

Site estático (HTML, CSS e JavaScript puro — sem frameworks nem build step),
com foco de **currículo profissional**: sobre, experiência, formação,
habilidades e projetos.

## Como rodar localmente

```bash
npm install   # apenas na primeira vez
npm start     # abre automaticamente em http://localhost:5500
```

## Estrutura do projeto

```
/
├── index.html
├── css/
│   └── style.css            → todo o visual do site (tokens, layout, componentes, responsivo)
├── js/
│   ├── config.js            → ARQUIVO CENTRAL: nome, textos, contatos, links, stats, skills, timeline
│   ├── projects.js          → dados dos projetos (array estruturado, fácil de adicionar novos)
│   └── main.js               → lógica: renderização, header, menu, carrossel, modal/galeria
└── assets/
    ├── images/
    │   ├── logo/             → logo.svg e favicon.svg (troque pela sua marca)
    │   ├── profile/          → foto-perfil.jpg (troque pela sua foto real)
    │   └── projects/
    │       ├── kion-requisition/
    │       ├── agendamento/
    │       ├── stkf/
    │       └── adega-smart/  → coloque aqui as telas reais de cada projeto (tela-01.jpg, tela-02.jpg...)
    └── cv/
        └── curriculo-vinicios-kaua.pdf  → seu currículo (já incluído, pode substituir por uma versão atualizada)
```

## O que editar para personalizar

Tudo fica centralizado em **`js/config.js`**:
- nome, cargo, foto e logo
- textos do hero e do "sobre"
- estatísticas (números de destaque)
- experiência profissional, formação e certificações
- categorias e itens de habilidades
- e-mail, WhatsApp, localização, GitHub e LinkedIn

Os projetos ficam em **`js/projects.js`**. Para adicionar um novo projeto,
copie um dos objetos do array e ajuste os campos (título, categoria,
descrição, tecnologias, problema, solução, funcionalidades e imagens).

> ⚠️ Os links de **GitHub** e **LinkedIn** em `config.js` estão como
> placeholder (`SEU-USUARIO`). Substitua pelos seus links reais.

## Sobre o carrossel de projetos (anel)

A seção "Projetos" usa um carrossel em anel 3D: o card central fica em
destaque e os vizinhos aparecem menores e levemente rotacionados nas
laterais, como um leque. **Não gira sozinho** — a navegação é feita pelas
setas, pelos pontos indicadores, por swipe no celular ou pelas setas do
teclado quando o carrossel está focado. Clicar no card central abre o case
completo do projeto (problema, solução, funcionalidades e galeria de
imagens navegável).

## Sobre a moeda giratória

No hero, uma moeda com a sua foto gira continuamente em 3D (efeito CSS
puro, sem impacto de performance). A animação respeita
`prefers-reduced-motion`: se o usuário tiver essa preferência ativada no
sistema, a moeda para de girar automaticamente.

## Acessibilidade

- Navegação por teclado em todo o site, incluindo carrossel e galeria
- Foco visível em todos os elementos interativos
- Modal do projeto com `aria-modal`, `Esc` para fechar e foco controlado
- Contraste adequado sobre o fundo escuro
- `alt` em todas as imagens
