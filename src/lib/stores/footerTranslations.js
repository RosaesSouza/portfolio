import { derived } from 'svelte/store';
import { language } from './languageStore.js';

const translations = {
  pt: {
    copyright: "©{year} Gabriel Rosaes de Souza"
  },
  en: {
    copyright: "©{year} Gabriel Rosaes de Souza"
  }
};

export const footerTranslations = derived(
  language,
  ($language) => translations[$language]
);
