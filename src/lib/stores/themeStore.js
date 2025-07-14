import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// CAPTURAR PREFERÊNCIA DO SISTEMA
function getInitialTheme() {
    if (browser) {
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) {
            return JSON.parse(stored);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
}

export const darkMode = writable(getInitialTheme());

// ALTERAR O TEMA
export function toggleTheme() {
    darkMode.update(current => {
        const newValue = !current;
        if (browser) {
            localStorage.setItem('darkMode', JSON.stringify(newValue));
            if (newValue) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
        return newValue;
    });
}


// APLICA O TEMA INICIAL
if (browser) {
    darkMode.subscribe(isDark => {
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
}
