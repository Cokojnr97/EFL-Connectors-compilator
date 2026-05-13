import type { Locale } from '../../data/types.js';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE } from '../../data/categories.js';

interface CategoryExplanationsProps {
  locale: Locale;
  motion: 'normal' | 'reduced';
}

export default function CategoryExplanations({ locale, motion }: CategoryExplanationsProps) {
  const explanations: Record<string, { en: string; es: string }> = {
    function: {
      en: 'The semantic role of a connector - what it does in a sentence. Connectors show relationships like cause, contrast, time, or sequence.',
      es: 'El rol semántico de un conector - qué hace en una oración. Los conectores muestran relaciones como causa, contraste, tiempo o secuencia.',
    },
    grammar: {
      en: 'The grammatical category determines how a connector joins clauses. Coordinating connectors join equal clauses; subordinating connectors attach dependent clauses.',
      es: 'La categoría gramatical determina cómo un conector une cláusulas. Los coordinantes unen cláusulas iguales; los subordinantes adjuntan cláusulas dependientes.',
    },
    punctuation: {
      en: 'Punctuation requirements tell you which punctuation marks are needed with each connector. Some require commas, others semicolons, and some none.',
      es: 'Los requisitos de puntuación te dicen qué marcas se necesitan con cada conector. Algunos requieren comas, otros puntos y comas, y algunos ninguno.',
    },
    cefr: {
      en: 'The CEFR level shows the English proficiency stage where a connector is typically taught. A1 is beginner; C2 is mastery.',
      es: 'El nivel MCER muestra la etapa de dominio del inglés donde se enseña típicamente un conector. A1 es principiante; C2 es dominio.',
    },
    register: {
      en: 'Register describes the tone or style: informal (casual speech), neutral (everyday writing), formal (academic/professional), or literary (creative writing).',
      es: 'El registro describe el tono o estilo: informal (lenguaje casual), neutral (escritura cotidiana), formal (académico/profesional), o literario (escritura creativa).',
    },
    position: {
      en: 'Position tells you where the connector typically appears: initial (start of clause), medial (middle), or final (end of clause).',
      es: 'La posición te dice dónde aparece típicamente el conector: inicial (inicio de cláusula), medial (centro), o final (final de cláusula).',
    },
    structure: {
      en: 'Structure describes the form: single-word (one word), compound (two words hyphenated), or multi-word phrases.',
      es: 'La estructura describe la forma: palabra única (una palabra), compuesta (dos palabras separadas), o frases multi-palabra.',
    },
    frequency: {
      en: 'Frequency indicates how often a connector appears in real English: high (very common), medium (moderately common), or low (rare).',
      es: 'La frecuencia indica qué tan a menudo aparece un conector en inglés real: alta (muy común), media (moderadamente común), o baja (rara).',
    },
    rhetorical: {
      en: 'Rhetorical function describes the broader communication purpose: argumentation, narrative, expository, or persuasive writing.',
      es: 'La función retórica describe el propósito comunicativo más amplio: argumentación, narrativa, exposición, o escritura persuasiva.',
    },
    origin: {
      en: 'Origin shows the etymology: native (from Old/Middle English), Latin/French (borrowed), or hybrid (mixed sources).',
      es: 'El origen muestra la etimología: nativo (del inglés antiguo/medio), latino/francés (prestado), o híbrido (fuentes mixtas).',
    },
  };

  return (
    <section className="glass-panel fade-card rounded-[28px] p-4 sm:p-5">
      <div className="mb-6">
        <p className="eyebrow">{locale === 'en' ? 'Learn' : 'Aprender'}</p>
        <h2 className="text-lg font-semibold">
          {locale === 'en' ? 'Category explanations' : 'Explicaciones de categorías'}
        </h2>
      </div>

      <div className="space-y-4">
        {CATEGORY_SEQUENCE.map((axis, index) => {
          const group = CATEGORY_GROUPS[axis];
          const explanation = explanations[axis];

          return (
            <article
              key={axis}
              className="rounded-[24px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
              style={{ animationDelay: motion === 'reduced' ? '0ms' : `${index * 45}ms` }}
            >
              <div className="mb-3">
                <h3 className="text-base font-semibold capitalize">{group.label[locale]}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--panel-muted)]">
                  {explanation[locale]}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--panel-muted)]">
                  {locale === 'en' ? 'Examples:' : 'Ejemplos:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.options.slice(0, 5).map((option) => (
                    <span
                      key={option.value}
                      className="rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)] bg-opacity-30 px-3 py-1 text-xs font-medium text-[color:var(--accent)]"
                    >
                      {option.label[locale]}
                    </span>
                  ))}
                  {group.options.length > 5 && (
                    <span className="rounded-full border border-[color:var(--panel-border)] px-3 py-1 text-xs font-medium text-[color:var(--panel-muted)]">
                      +{group.options.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
