import type { Locale } from '../../data/types.js';

export const UI_COPY: Record<Locale, {
  appTitle: string;
  appSubtitle: string;
  connectorResults: string;
  noMatches: string;
  clearFilters: string;
  resetSettings: string;
  filters: string;
  settings: string;
  theme: string;
  tone: string;
  fontSize: string;
  motion: string;
  language: string;
  mode: string;
  accent: string;
  summaryPrefix: string;
  loading: string;
  activeFilters: string;
}> = {
  en: {
    appTitle: 'English Connectors',
    appSubtitle: 'Explore connectors by meaning, grammar, punctuation, register, and use.',
    connectorResults: 'Matching connectors',
    noMatches: 'No connectors match those filters yet.',
    clearFilters: 'Clear filters',
    resetSettings: 'Reset settings',
    filters: 'Category filters',
    settings: 'Customization',
    theme: 'Theme',
    tone: 'Tone preset',
    fontSize: 'Font size',
    motion: 'Animation speed',
    language: 'Language',
    mode: 'Mode',
    accent: 'Accent',
    summaryPrefix: 'showing',
    loading: 'Loading connectors...',
    activeFilters: 'active filters',
  },
  es: {
    appTitle: 'Conectores en inglés',
    appSubtitle: 'Explora conectores por significado, gramática, puntuación, registro y uso.',
    connectorResults: 'Conectores que coinciden',
    noMatches: 'Todavía no hay conectores con esos filtros.',
    clearFilters: 'Borrar filtros',
    resetSettings: 'Restablecer ajustes',
    filters: 'Filtros por categoría',
    settings: 'Personalización',
    theme: 'Tema',
    tone: 'Tono',
    fontSize: 'Tamaño de fuente',
    motion: 'Velocidad de animación',
    language: 'Idioma',
    mode: 'Modo',
    accent: 'Acento',
    summaryPrefix: 'mostrando',
    loading: 'Cargando conectores...',
    activeFilters: 'filtros activos',
  },
};

export const SELECT_OPTIONS = {
  theme: [
    { value: 'light', label: { en: 'Light', es: 'Claro' } },
    { value: 'dark', label: { en: 'Dark', es: 'Oscuro' } },
  ],
  tone: [
    { value: 'rose', label: { en: 'Soft rose', es: 'Rosa suave' } },
    { value: 'peach', label: { en: 'Peach cream', es: 'Crema melocotón' } },
    { value: 'cocoa', label: { en: 'Cocoa blush', es: 'Rubor cacao' } },
  ],
  fontSize: [
    { value: '100%', label: { en: 'Normal', es: 'Normal' } },
    { value: '112.5%', label: { en: 'Large', es: 'Grande' } },
    { value: '125%', label: { en: 'Extra large', es: 'Muy grande' } },
  ],
  motion: [
    { value: 'normal', label: { en: 'Normal', es: 'Normal' } },
    { value: 'reduced', label: { en: 'Reduced motion', es: 'Movimiento reducido' } },
  ],
  locale: [
    { value: 'en', label: { en: 'English', es: 'Inglés' } },
    { value: 'es', label: { en: 'Spanish', es: 'Español' } },
  ],
} as const;
