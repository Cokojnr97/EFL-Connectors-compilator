export type Locale = 'en' | 'es';

export type Axis =
  | 'function'
  | 'grammar'
  | 'punctuation'
  | 'cefr'
  | 'register'
  | 'position'
  | 'structure'
  | 'frequency'
  | 'rhetorical'
  | 'origin';

export interface CategoryOption {
  value: string;
  label: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface CategoryGroup {
  axis: Axis;
  label: Record<Locale, string>;
  hint: Record<Locale, string>;
  options: CategoryOption[];
}

export interface CategorySelection {
  function: string[];
  grammar: string[];
  punctuation: string[];
  cefr: string[];
  register: string[];
  position: string[];
  structure: string[];
  frequency: string[];
  rhetorical: string[];
  origin: string[];
}

export interface ExampleHighlight {
  term: string;
  tone: 'connector' | 'punctuation' | 'support';
}

export interface ConnectorExample {
  en: string;
  es: string;
  highlights: ExampleHighlight[];
}

export interface ConnectorRecord {
  id: string;
  connector: string;
  explanation: Record<Locale, string>;
  examples: ConnectorExample[];
  categories: CategorySelection;
}
