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
  viewMode: string;
  accent: string;
  summaryPrefix: string;
  loading: string;
  activeFilters: string;
  eligibleWords: string;
  cascade: string;
  table: string;
  learn: string;
  learnSubtitle: string;
  categoryExplanations: string;
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
    viewMode: 'View mode',
    accent: 'Accent',
    summaryPrefix: 'Showing',
    loading: 'Loading connectors...',
    activeFilters: 'active filters',
    eligibleWords: 'eligible words',
    cascade: 'Cascade',
    table: 'Table',
    learn: 'Learn',
    learnSubtitle: 'Understand connector categories and classifications',
    categoryExplanations: 'Category explanations',
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
    viewMode: 'Modo de vista',
    accent: 'Acento',
    summaryPrefix: 'Mostrando',
    loading: 'Cargando conectores...',
    activeFilters: 'filtros activos',
    eligibleWords: 'palabras elegibles',
    cascade: 'Cascada',
    table: 'Tabla',
    learn: 'Aprender',
    learnSubtitle: 'Comprende las categorías de conectores y clasificaciones',
    categoryExplanations: 'Explicaciones de categorías',
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
  viewMode: [
    { value: 'cascade', label: { en: 'Cascade', es: 'Cascada' } },
    { value: 'table', label: { en: 'Table', es: 'Tabla' } },
  ],
} as const;
