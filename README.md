<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:4e95ff&height=160&section=header&text=Portf%C3%B3lio%20%26%20Curr%C3%ADculo&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=42&desc=Vinicios%20Kau%C3%A3%20%E2%80%94%20Site%20Est%C3%A1tico&descAlignY=62&descAlign=50"/>

<div align="center">

<img src="https://img.shields.io/badge/-HTML5-0D1117?style=flat-square&logo=html5&logoColor=E34F26"/>
<img src="https://img.shields.io/badge/-CSS3-0D1117?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/-JavaScript-0D1117?style=flat-square&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/github/last-commit/Vinicios-Kaua/portfolio?style=flat-square&color=4e95ff&labelColor=0D1117"/>
<img src="https://img.shields.io/badge/status-em%20produ%C3%A7%C3%A3o-4e95ff?style=flat-square&labelColor=0D1117"/>

</div>

<p align="center">
  Site estático (HTML, CSS e JavaScript puro — sem frameworks, sem build step) que reúne <b>portfólio de projetos</b> e <b>currículo profissional</b> em uma única página, com carrossel de projetos em anel, modal de case study com galeria de imagens e conteúdo 100% centralizado em arquivos de configuração.
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-como-rodar-localmente">Como rodar</a> •
  <a href="#-como-personalizar">Personalizar</a> •
  <a href="#-contato">Contato</a>
</p>

<p align="center">
  <video src="https://github.com/user-attachments/assets/a8f5dc31-7f39-405d-836e-d750dbdd8b10" controls width="100%"></video>
</p>

<br>

## 📌 Sobre

Este repositório contém o código-fonte do meu portfólio pessoal, pensado como cartão de visitas para processos seletivos: apresenta quem eu sou, minhas habilidades, formação, experiência e os sistemas reais que já desenvolvi — cada um com um case study completo (problema, solução, funcionalidades e galeria de telas).

Todo o conteúdo (textos, contatos, estatísticas, habilidades, timeline e projetos) fica isolado em arquivos JavaScript de dados, então atualizar o site nunca exige mexer em HTML ou CSS.

## ✨ Funcionalidades

- **Hero** com moeda giratória em 3D (CSS puro) exibindo a foto de perfil, respeitando `prefers-reduced-motion`
- **Sobre mim** com estatísticas configuráveis (projetos entregues, tecnologias, experiência...)
- **Habilidades & Tecnologias** organizadas por categoria
- **Certificações** em grid dedicado
- **Carrossel de projetos em anel 3D** — navegação por setas, pontos indicadores, swipe no celular ou teclado
- **Modal de case study** por projeto: problema, solução, funcionalidades e informações adicionais
- **Galeria de imagens em destaque** dentro do modal, com navegação entre telas e thumbnails
- **Timeline de experiência & formação**
- **Seção de contato** com e-mail, WhatsApp, GitHub e LinkedIn, e botão direto para WhatsApp
- **Totalmente responsivo**, com menu mobile animado
- **Acessível**: navegação por teclado, foco visível, `aria-modal`, `Esc` fecha o modal, `alt` em todas as imagens

## 🛠️ Tecnologias

<table>
  <tr>
    <td valign="top">
      <b>Frontend</b><br><br>
      <img src="https://img.shields.io/badge/-HTML5-0D1117?style=for-the-badge&logo=html5&logoColor=E34F26"/><br>
      <img src="https://img.shields.io/badge/-CSS3-0D1117?style=for-the-badge&logo=css3&logoColor=white"/><br>
      <img src="https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
    </td>
    <td valign="top">
      <b>Ambiente de dev</b><br><br>
      <img src="https://img.shields.io/badge/-Node.js-0D1117?style=for-the-badge&logo=node.js&logoColor=339933"/><br>
      <img src="https://img.shields.io/badge/-http--server-0D1117?style=for-the-badge&logo=npm&logoColor=CB3837"/>
    </td>
  </tr>
</table>

> Sem frameworks, sem bundler e sem dependências de produção — apenas `http-server` como servidor de desenvolvimento local.

## 📁 Estrutura do projeto

```
.
├── index.html
├── css/
│   └── style.css              → todo o visual do site (tokens, layout, componentes, responsivo)
├── js/
│   ├── config.js              → ARQUIVO CENTRAL: nome, textos, contatos, links, stats, skills, timeline
│   ├── projects.js            → dados dos projetos (array estruturado, fácil de adicionar novos)
│   └── main.js                → renderização, header, menu, carrossel, modal/galeria
└── assets/
    ├── images/
    │   ├── logo/               → logo e favicon
    │   ├── profile/            → foto de perfil
    │   └── projects/           → telas reais de cada projeto (kion-requisition, agendamento-eucatex, stkf, adega-smart)
    ├── videos/                 → capas animadas para projetos em desenvolvimento
    └── cv/                     → currículo em PDF
```

## 🚀 Como rodar localmente

```bash
git clone https://github.com/Vinicios-Kaua/Portfólio-Pessoal.git
cd portfolio
npm install      # apenas na primeira vez
npm start        # abre automaticamente em http://localhost:5500
```

## 🎨 Como personalizar

Tudo fica centralizado em **`js/config.js`**:

- nome, cargo, foto e logo
- textos do hero e do "sobre"
- estatísticas de destaque
- experiência profissional, formação e certificações
- categorias e itens de habilidades
- e-mail, WhatsApp, localização, GitHub e LinkedIn

Os projetos ficam em **`js/projects.js`** — para adicionar um novo, copie um objeto do array e ajuste título, categoria, descrição, tecnologias, problema, solução, funcionalidades e imagens.

## 📬 Contato

<div align="center">

<a href="https://www.linkedin.com/in/vinicioskaua/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="mailto:vini12kaua@hotmail.com" target="_blank">
  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
</a>
<a href="https://wa.me/5511970656550" target="_blank">
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>
<a href="https://github.com/Vinicios-Kaua" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>

<br>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:4e95ff&height=120&section=footer"/>