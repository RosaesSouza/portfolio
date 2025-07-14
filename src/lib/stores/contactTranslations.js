import { derived } from 'svelte/store';
import { language } from './languageStore.js';

const translations = {
    pt: {
        title: 'Contatos',
        email: 'E-mail',
        phone: 'Telefone',
        github: 'GitHub',
        linkedin: 'LinkedIn'
    },
    en: {
        title: 'Contact',
        email: 'Email',
        phone: 'Phone',
        github: 'GitHub',
        linkedin: 'LinkedIn'
    }
};

export const contactTranslations = derived(
    language,
    ($language) => translations[$language]
);
