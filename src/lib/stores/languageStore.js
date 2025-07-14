import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// CAPTURAR IDIOMA INICIAL
function getInitialLanguage() {
    if (browser) {
        const stored = localStorage.getItem('language');
        if (stored !== null) {
            return stored;
        }
        const browserLang = navigator.language.slice(0, 2);
        return browserLang === 'pt' ? 'pt' : 'en';
    }
    return 'pt';
}

export const language = writable(getInitialLanguage());

// ALTERAR O IDIOMA
export function toggleLanguage() {
    language.update(current => {
        const newValue = current === 'pt' ? 'en' : 'pt';
        if (browser) {
            localStorage.setItem('language', newValue);
        }
        return newValue;
    });
}
