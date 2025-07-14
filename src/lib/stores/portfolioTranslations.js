import { derived } from 'svelte/store';
import { language } from './languageStore.js';

const projectsData = [
    {
        id: 1,
        src: '/linguagens/html.webp',
        link: 'https://teste.com',
        git: 'https://github.com/usuario/projeto1'
    },
    {
        id: 2,
        src: '/linguagens/html.webp',
        link: 'https://exemplo.com',
        git: 'https://github.com/usuario/projeto2'
    },
    {
        id: 3,
        src: '/linguagens/html.webp',
        link: 'https://demo.com',
        git: 'https://github.com/usuario/projeto3'
    }
];

const translations = {
    pt: {
        title: 'Portfólio',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código',
        projects: {
            1: {
                title: 'Landing Page Utilizando HTML',
                description: 'Praticar UI/UX, responsividade, manipulação de DOM'
            },
            2: {
                title: 'App Web com JavaScript',
                description: 'Aplicação interativa usando JavaScript vanilla'
            },
            3: {
                title: 'Projeto com Svelte',
                description: 'Aplicação moderna usando framework Svelte'
            }
        }
    },
    en: {
        title: 'Portfolio',
        viewProject: 'View Project',
        viewCode: 'View Code',
        projects: {
            1: {
                title: 'Landing Page Using HTML',
                description: 'Practice UI/UX, responsiveness, DOM manipulation'
            },
            2: {
                title: 'Web App with JavaScript',
                description: 'Interactive application using vanilla JavaScript'
            },
            3: {
                title: 'Svelte Project',
                description: 'Modern application using Svelte framework'
            }
        }
    }
};

export const portfolioTranslations = derived(
    language,
    ($language) => translations[$language]
);

export const projects = derived(
    language,
    ($language) => projectsData.map(project => ({
        ...project,
        title: translations[$language].projects[project.id].title,
        description: translations[$language].projects[project.id].description
    }))
);
