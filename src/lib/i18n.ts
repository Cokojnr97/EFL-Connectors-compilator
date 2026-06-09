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
  practice: string;
  practiceSubtitle: string;
  practiceInstructions: string;
  connectorDrills: string;
  punctuationDrills: string;
  advancedParagraphDrills: string;
  nextSet: string;
  resetCard: string;
  correctAnswer: string;
  tryAgain: string;
  showAnswer: string;
  cascade: string;
  table: string;
  learn: string;
  explore: string;
  learnSubtitle: string;
  categoryExplanations: string;
  connectorColumn: string;
  functionColumn: string;
  grammarColumn: string;
  registerColumn: string;
  cefrColumn: string;
}> = {
  en: {
    appTitle: 'English Connectors',
    appSubtitle: 'Explore connectors by meaning, grammar, punctuation, register, use, and practice drills.',
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
    practice: 'Practice',
    practiceSubtitle: 'Review connectors and punctuation with drag-and-drop fill-in exercises.',
    practiceInstructions: 'Drag a chip into each blank, then check your answer. Use Next set to keep cycling through the deck.',
    connectorDrills: 'Connector drills',
    punctuationDrills: 'Punctuation drills',
    advancedParagraphDrills: 'Advanced paragraph drills (50 sets)',
    nextSet: 'Next set',
    resetCard: 'Reset card',
    correctAnswer: 'Correct answer',
    tryAgain: 'Try again',
    showAnswer: 'Show answer',
    cascade: 'Cascade',
    table: 'Table',
    learn: 'Learn',
    explore: 'Explore',
    learnSubtitle: 'Understand connector categories and classifications',
    categoryExplanations: 'Category explanations',
    connectorColumn: 'Connector',
    functionColumn: 'Function',
    grammarColumn: 'Grammar',
    registerColumn: 'Register',
    cefrColumn: 'CEFR',
  },
  es: {
    appTitle: 'Conectores en inglés',
    appSubtitle: 'Explora conectores por significado, gramática, puntuación, registro, uso y ejercicios de práctica.',
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
    practice: 'Práctica',
    practiceSubtitle: 'Repasa conectores y puntuación con ejercicios de arrastrar y completar.',
    practiceInstructions: 'Arrastra una ficha hasta cada espacio y comprueba tu respuesta. Usa el siguiente conjunto para seguir avanzando por la lista.',
    connectorDrills: 'Ejercicios de conectores',
    punctuationDrills: 'Ejercicios de puntuación',
    advancedParagraphDrills: 'Ejercicios avanzados de párrafo (50 conjuntos)',
    nextSet: 'Siguiente conjunto',
    resetCard: 'Reiniciar tarjeta',
    correctAnswer: 'Respuesta correcta',
    tryAgain: 'Inténtalo otra vez',
    showAnswer: 'Mostrar respuesta',
    cascade: 'Cascada',
    table: 'Tabla',
    learn: 'Aprender',
    explore: 'Explorar',
    learnSubtitle: 'Comprende las categorías de conectores y clasificaciones',
    categoryExplanations: 'Explicaciones de categorías',
    connectorColumn: 'Conector',
    functionColumn: 'Función',
    grammarColumn: 'Gramática',
    registerColumn: 'Registro',
    cefrColumn: 'CEFR',
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
    { value: 'aqua', label: { en: 'Light blue', es: 'Azul claro' } },
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
