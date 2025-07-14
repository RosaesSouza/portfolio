import { derived } from 'svelte/store';
import { language } from './languageStore.js';

const translations = {
    pt: {
        curriculum: 'Currículo',
        portfolio: 'Portfólio',
        contact: 'Contato'
    },
    en: {
        curriculum: 'Resume',
        portfolio: 'Portfolio', 
        contact: 'Contact'
    }
};

export const navTranslations = derived(
    language,
    ($language) => translations[$language]
);
