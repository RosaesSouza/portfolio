import { derived } from 'svelte/store';
import { language } from './languageStore.js';

const translations = {
  pt: {
    title: "Desenvolvedor Junior",
    profileAlt: "Imagem de perfil do Gabriel Rosaes de Souza",
    themeToggle: "Alternar tema",
    languageToggle: "Alternar idioma"
  },
  en: {
    title: "Junior Developer", 
    profileAlt: "Profile image of Gabriel Rosaes de Souza",
    themeToggle: "Toggle theme",
    languageToggle: "Toggle language"
  }
};

export const headerTranslations = derived(
  language,
  ($language) => translations[$language]
);
