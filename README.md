# Portfólio - Gabriel Rosaes de Souza

## Objetivo
Este projeto é um portfólio pessoal desenvolvido com SvelteKit para apresentar:
- formação acadêmica;
- experiências profissionais;
- projetos desenvolvidos;
- formas de contato.

O foco é ter uma página simples, responsiva e com suporte a tema (claro/escuro) e idioma (PT/EN).

## Como rodar
Pré-requisitos:
- Node.js 18+;
- npm.

Instalação das dependências:
- npm install

Ambiente de desenvolvimento:
- npm run dev

Build de produção:
- npm run build

Pré-visualização do build:
- npm run preview

## Estrutura do projeto
- src/
	- app.html: variáveis globais de tema, fontes e base visual.
	- routes/
		- +page.svelte: composição da página principal.
	- lib/
		- components/
			- Header.svelte: perfil, título e botões de tema/idioma.
			- Navbar.svelte: navegação entre as seções.
			- Curriculo.svelte: seção de currículo.
			- Portfolio.svelte: seção de projetos.
			- Contato.svelte: seção de contatos.
			- Footer.svelte: rodapé.
		- stores/
			- languageStore.js: estado de idioma.
			- themeStore.js: estado de tema.
			- arquivos de tradução: textos por seção (PT/EN).
- static/
	- icons/: ícones e manifest.
	- linguagens/: imagens e assets usados na interface.

## Scripts úteis
- npm run dev: inicia o servidor de desenvolvimento.
- npm run build: gera versão de produção.
- npm run preview: executa preview da build.
- npm run lint: valida formatação e lint.
- npm run test: executa testes.
