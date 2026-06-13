import { CONNECTORS } from '../../data/connectors.js';
import { getFunctionCategoryLabel } from '../../data/categories.js';
import type { ConnectorRecord, Locale } from '../../data/types.js';

export type PracticeExerciseKind = 'connector' | 'punctuation';

export interface PracticeExercise {
  id: string;
  kind: PracticeExerciseKind;
  prompt: Record<Locale, string>;
  sentence: Record<Locale, string>;
  answer: string;
  options: string[];
  focus: Record<Locale, string>;
}

export type PracticeDeck = 'core' | 'advanced';

export interface PracticeExerciseBundle {
  core: PracticeExercise[];
  advanced: PracticeExercise[];
}

const ADVANCED_SETS = 50;
const ITEMS_PER_SET = 4;
const ADVANCED_TOTAL_ITEMS = ADVANCED_SETS * ITEMS_PER_SET;
const PARAGRAPH_CONTEXT_EN = [
  'The class discussion moved from simple ideas to deeper analysis.',
  'The project team compared several options before deciding what to do next.',
  'During the meeting, everyone tried to explain their reasoning clearly.',
  'The report was revised carefully to improve coherence and flow.',
];
const PARAGRAPH_CONTEXT_ES = [
  'La discusión de clase pasó de ideas simples a un análisis más profundo.',
  'El equipo del proyecto comparó varias opciones antes de decidir qué hacer después.',
  'Durante la reunión, todos intentaron explicar su razonamiento con claridad.',
  'El informe se revisó con cuidado para mejorar la coherencia y el flujo.',
];

const PUNCTUATION_OPTIONS = [',', ';', ':', '.'];

function uniqueValues(values: string[]) {
  return Array.from(new Set(values));
}

function shuffleDeterministic(values: string[], seedText: string) {
  const result = [...values];
  let seed = 0;

  for (let index = 0; index < seedText.length; index += 1) {
    seed = (seed * 31 + seedText.charCodeAt(index)) >>> 0;
  }

  for (let index = result.length - 1; index > 0; index -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const swapIndex = seed % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function blankText(text: string, target: string) {
  const index = text.toLowerCase().indexOf(target.toLowerCase());
  if (index === -1) {
    return null;
  }

  return {
    before: text.slice(0, index),
    after: text.slice(index + target.length),
  };
}

function pickConnectorOptions(answer: string, pool: ConnectorRecord[], seedText: string) {
  const poolChoices = uniqueValues(pool.map((connector) => connector.connector));
  const decoys = poolChoices.filter((choice) => choice !== answer).slice(0, 3);
  const fallbackDecoys = uniqueValues(CONNECTORS.map((connector) => connector.connector))
    .filter((choice) => choice !== answer && !decoys.includes(choice))
    .slice(0, 3 - decoys.length);

  return shuffleDeterministic([answer, ...decoys, ...fallbackDecoys], seedText).slice(0, 4);
}

function pickAdvancedConnectorOptions(answer: string, pool: ConnectorRecord[], seedText: string, functionCategory: string) {
  const sameFunction = pool
    .filter((connector) => connector.categories.function.includes(functionCategory))
    .map((connector) => connector.connector);
  const functionDecoys = uniqueValues(sameFunction).filter((choice) => choice !== answer).slice(0, 3);
  const fallbackDecoys = uniqueValues(CONNECTORS.map((connector) => connector.connector))
    .filter((choice) => choice !== answer && !functionDecoys.includes(choice))
    .slice(0, 3 - functionDecoys.length);

  return shuffleDeterministic([answer, ...functionDecoys, ...fallbackDecoys], seedText);
}

function pickPunctuationOptions(answer: string, seedText: string) {
  const decoys = PUNCTUATION_OPTIONS.filter((choice) => choice !== answer);
  return shuffleDeterministic([answer, ...decoys], seedText).slice(0, 4);
}

function connectorFocus(connector: ConnectorRecord, locale: Locale) {
  const category = connector.categories.function[0] ?? 'connector';
  const label = getFunctionCategoryLabel(category, locale);
  return locale === 'en' ? `Function: ${label}` : `Función: ${label}`;
}

function punctuationFocus(punctuation: string, locale: Locale) {
  const label = punctuation === ',' ? 'comma' : punctuation === ';' ? 'semicolon' : punctuation === ':' ? 'colon' : 'period';
  return locale === 'en' ? `Punctuation: ${label}` : `Puntuación: ${label}`;
}

function buildConnectorExercise(connector: ConnectorRecord): PracticeExercise | null {
  const example = connector.examples[0];
  if (!example) {
    return null;
  }

  const blankedEn = blankText(example.en, connector.connector);
  if (!blankedEn) {
    return null;
  }

  return {
    id: `connector-${connector.id}`,
    kind: 'connector',
    prompt: {
      en: 'Drag the connector into the blank.',
      es: 'Arrastra el conector al espacio vacío.',
    },
    sentence: {
      en: `${blankedEn.before}_____ ${blankedEn.after}`.replace(/\s+/g, ' ').trim(),
      es: `${blankedEn.before}_____ ${blankedEn.after}`.replace(/\s+/g, ' ').trim(),
    },
    answer: connector.connector,
    options: pickConnectorOptions(connector.connector, CONNECTORS, connector.id),
    focus: {
      en: connectorFocus(connector, 'en'),
      es: connectorFocus(connector, 'es'),
    },
  };
}

function buildPunctuationExercise(connector: ConnectorRecord): PracticeExercise | null {
  const example = connector.examples.find((item) => item.highlights.some((highlight) => highlight.tone === 'punctuation'));
  if (!example) {
    return null;
  }

  const punctuationHighlight = example.highlights.find((highlight) => highlight.tone === 'punctuation');
  if (!punctuationHighlight) {
    return null;
  }

  const blankedEn = blankText(example.en, punctuationHighlight.term);
  if (!blankedEn) {
    return null;
  }

  const answer = punctuationHighlight.term;

  return {
    id: `punctuation-${connector.id}-${answer}`,
    kind: 'punctuation',
    prompt: {
      en: 'Drag the punctuation mark into the blank.',
      es: 'Arrastra el signo de puntuación al espacio vacío.',
    },
    sentence: {
      en: `${blankedEn.before}_____ ${blankedEn.after}`.replace(/\s+/g, ' ').trim(),
      es: `${blankedEn.before}_____ ${blankedEn.after}`.replace(/\s+/g, ' ').trim(),
    },
    answer,
    options: pickPunctuationOptions(answer, `${connector.id}-${answer}`),
    focus: {
      en: punctuationFocus(answer, 'en'),
      es: punctuationFocus(answer, 'es'),
    },
  };
}

function buildParagraphVariants(connector: ConnectorRecord) {
  const functionCategory = connector.categories.function?.[0] ?? 'general';
  const register = connector.categories.register?.[0] ?? 'neutral';

  return connector.examples
    .map((example, index) => {
      const blanked = blankText(example.en, connector.connector);
      if (!blanked) {
        return null;
      }

      const contextIndex = index % PARAGRAPH_CONTEXT_EN.length;
      const contextEn = PARAGRAPH_CONTEXT_EN[contextIndex] ?? PARAGRAPH_CONTEXT_EN[0];
      const contextEs = PARAGRAPH_CONTEXT_ES[contextIndex] ?? PARAGRAPH_CONTEXT_ES[0];

      return {
        idSuffix: `example-${index}`,
        sentence: {
          en: `${contextEn} ${blanked.before}_____ ${blanked.after}`.replace(/\s+/g, ' ').trim(),
          es: `${contextEs} ${blanked.before}_____ ${blanked.after}`.replace(/\s+/g, ' ').trim(),
        },
        prompt: {
          en: 'Choose the connector that best completes this paragraph.',
          es: 'Elige el conector que mejor completa este párrafo.',
        },
        focus: {
          en: `Paragraph link: ${getFunctionCategoryLabel(functionCategory, 'en')} · Register: ${register}`,
          es: `Enlace de párrafo: ${getFunctionCategoryLabel(functionCategory, 'es')} · Registro: ${register}`,
        },
      };
    })
    .filter((variant): variant is {
      idSuffix: string;
      sentence: Record<Locale, string>;
      prompt: Record<Locale, string>;
      focus: Record<Locale, string>;
    } => variant !== null)
    .slice(0, 2);
}

function buildAdvancedParagraphExercises(connectors: ConnectorRecord[]) {
  const exercises: PracticeExercise[] = [];

  for (const connector of connectors) {
    const variants = buildParagraphVariants(connector);
    for (const variant of variants) {
      exercises.push({
        id: `paragraph-${connector.id}-${variant.idSuffix}`,
        kind: 'connector',
        prompt: variant.prompt,
        sentence: variant.sentence,
        answer: connector.connector,
        options: pickAdvancedConnectorOptions(
          connector.connector,
          connectors,
          `${connector.id}-${variant.idSuffix}`,
          connector.categories.function[0] ?? 'other',
        ),
        focus: variant.focus,
      });
    }
  }

  const shuffled = shuffleDeterministic(exercises.map((exercise) => exercise.id), 'advanced-paragraph-order')
    .map((id) => exercises.find((exercise) => exercise.id === id))
    .filter((exercise): exercise is PracticeExercise => exercise !== undefined);

  if (shuffled.length >= ADVANCED_TOTAL_ITEMS) {
    return shuffled.slice(0, ADVANCED_TOTAL_ITEMS);
  }

  // Duplicate deterministic items if the filtered pool is small so advanced mode always offers 50 sets.
  const expanded = [...shuffled];
  let index = 0;
  while (expanded.length < ADVANCED_TOTAL_ITEMS && shuffled.length > 0) {
    const base = shuffled[index % shuffled.length];
    expanded.push({
      ...base,
      id: `${base.id}-r${Math.floor(index / shuffled.length) + 1}`,
      options: shuffleDeterministic(base.options, `${base.id}-r${index}`),
    });
    index += 1;
  }

  return expanded;
}

function isValidExercise(exercise: PracticeExercise) {
  return exercise.options.includes(exercise.answer) && exercise.sentence.en.includes('_____') && exercise.sentence.es.includes('_____');
}

export function buildPracticeExercises(connectors: ConnectorRecord[]): PracticeExercise[] {
  const connectorExercises = connectors.map(buildConnectorExercise).filter((exercise): exercise is PracticeExercise => exercise !== null);
  const punctuationExercises = connectors.map(buildPunctuationExercise).filter((exercise): exercise is PracticeExercise => exercise !== null);

  return [...connectorExercises, ...punctuationExercises].filter(isValidExercise);
}

export function buildPracticeExerciseBundle(connectors: ConnectorRecord[]): PracticeExerciseBundle {
  const core = buildPracticeExercises(connectors);
  const advanced = buildAdvancedParagraphExercises(connectors).filter(isValidExercise);

  return {
    core,
    advanced,
  };
}
