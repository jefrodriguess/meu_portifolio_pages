# 🌐 Portfólio JRS — Jeferson Rodrigues

Portfólio pessoal desenvolvido como projeto avaliativo da disciplina de **Programação Frontend** pela **Unicesumar**. O site apresenta habilidades, projetos e um formulário de contato, construído inteiramente com HTML5, CSS3 e JavaScript puro — sem frameworks ou dependências pesadas.

🔗 **Demo ao vivo:** [jefrodriguess.github.io/meu_portifolio](https://github.com/jefrodriguess/meu_portifolio)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Executar](#como-executar)
- [Seções do Site](#seções-do-site)
- [Responsividade](#responsividade)
- [SEO](#seo)
- [Autor](#autor)

---

## Sobre o Projeto

Single-Page Application (SPA) com navegação por âncoras que apresenta o desenvolvedor Jeferson Rodrigues para o mercado de T.I. A proposta combina uma identidade visual **dark com acento verde-neon**, animações CSS, efeitos interativos em JavaScript e validação completa de formulário — tudo sem dependência de frameworks.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| **CSS3** | Flexbox, CSS Grid, animações `@keyframes`, media queries, transições |
| **JavaScript ES6+** | Accordion, menu hamburger, máscara de telefone, validação de formulário |
| **Google Fonts** | Tipografia: Poppins + Montserrat |
| **Bootstrap Icons 1.11** | Ícones vetoriais (redes sociais, habilidades, formulário) |
| **Git & GitHub Pages** | Controle de versão e deploy |

---

## Funcionalidades

- ✅ **Layout responsivo** — adapta-se a desktop, tablet e mobile (3 breakpoints)
- ✅ **Menu hamburger** — painel lateral animado com overlay e bloqueio de scroll
- ✅ **Accordion interativo** — cards de habilidades expandem/contraem com transição suave
- ✅ **Formulário com validação JS** — feedback visual em tempo real, sem bibliotecas externas
- ✅ **Máscara de telefone** — formatação automática `(XX) XXXXX-XXXX` ao digitar
- ✅ **Animação CSS** — efeito de flutuação na imagem principal com `@keyframes`
- ✅ **SEO básico** — meta tags, semântica HTML5, hierarquia de headings, atributos `alt`

---

## Estrutura de Arquivos

```
meu_portifolio/
├── index.html        # Documento principal (SPA com âncoras)
├── style.css         # Estilos globais, componentes e responsividade
├── script.js         # JavaScript: accordion, menu, formulário
├── README.md         # Este arquivo
└── img/
    ├── logo.png
    ├── pessoa.png
    ├── pessoa3.png
    ├── PetLife.png
    ├── PersonHardman.png
    ├── inDecor.png
    └── fioealma.png
```

---

## Como Executar

O projeto é estático — não requer build, servidor Node ou qualquer instalação.

**Opção 1 — Abrir direto no navegador:**
```bash
# Clone o repositório
git clone https://github.com/jefrodriguess/meu_portifolio.git

# Abra o arquivo no navegador
open meu_portifolio/index.html
```

**Opção 2 — Live Server (VS Code):**
1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

**Opção 3 — Servidor HTTP local:**
```bash
# Python 3
python -m http.server 3000

# Acesse: http://localhost:3000
```

---

## Seções do Site

| Âncora | Seção | Descrição |
|---|---|---|
| `#inicio` | Início | Apresentação principal e chamada para contato |
| `#sobre` | Sobre | Biografia, trajetória e redes sociais |
| `#habilidades` | Habilidades | Cards accordion: HTML, CSS, JavaScript, Git |
| `#projetos` | Projetos | Galeria com links para repositórios no GitHub |
| *(sem âncora)* | Contato | Formulário com validação JavaScript completa |

---

## Responsividade

Três breakpoints cobrem todos os tamanhos de tela comuns:

```
≤ 1024px  →  Tablet Landscape   — ajuste de tipografia e espaçamento do menu
≤  768px  →  Tablet / Mobile    — ativa menu hamburger, reordena seções em coluna
≤  480px  →  Mobile pequeno     — fontes reduzidas, projetos em coluna única
```

---

## SEO

Práticas de SEO on-page aplicadas:

- `<title>` descritivo
- `<meta name="description">` com até 160 caracteres
- `<meta name="viewport">` para responsividade mobile-first
- Atributo `lang="pt-br"` no elemento `<html>`
- Tags semânticas HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Hierarquia correta de headings (`<h1>` único, seguido de `<h2>` e `<h3>`)
- Atributo `alt` descritivo em todas as imagens
- `<link rel="preconnect">` para otimização do carregamento de fontes

---

## Autor

**Jeferson Rodrigues**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jefrodriguees/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/jefrodriguess)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/ojefrodrigues)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white)](https://wa.me/5519999464662)

📧 jefersonsrodrigues@outlook.com

---

<p align="center">
  Desenvolvido com 💚 por Jeferson Rodrigues &nbsp;|&nbsp; Programação Frontend — Unicesumar
</p>
# meu_portifolio_pages
