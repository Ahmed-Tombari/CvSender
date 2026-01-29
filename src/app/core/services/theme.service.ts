import { signal, computed, effect } from '@angular/core';

// Theme Management
export type Theme = 'light' | 'dark';
const THEME_KEY = 'portfolio-theme';

export const theme = signal<Theme>((localStorage.getItem(THEME_KEY) as Theme) || 'light');

export function toggleTheme() {
  const newTheme = theme() === 'light' ? 'dark' : 'light';
  theme.set(newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
}

function applyTheme(t: Theme) {
  if (t === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Initial application
setTimeout(() => applyTheme(theme()), 0);

// Existing Language Logic (kept for compatibility)
const messages = {
  en: {
    jobTitle: 'Job Application',
    send: 'Send Application',
    sending: 'Sending...',
    success: 'Application sent successfully',
    errorDefault: 'Failed to send application',
    language: 'Language'
  },
  fr: {
    jobTitle: 'Candidature',
    send: 'Envoyer la candidature',
    sending: 'Envoi en cours...',
    success: 'Candidature envoyée avec succès',
    errorDefault: "Échec de l'envoi de la candidature",
    language: 'Langue'
  }
} as const;

export const lang = signal<'en' | 'fr'>('en');

export function setLang(l: 'en' | 'fr') {
  lang.set(l);
}

export function t(key: keyof typeof messages['en']) {
  return computed(() => messages[lang() as 'en' | 'fr']?.[key]);
}
