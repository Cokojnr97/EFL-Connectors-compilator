import type { Locale } from '../../data/types.js';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE } from '../../data/categories.js';

interface CategoryExplanationsProps {
  locale: Locale;
  motion: 'normal' | 'reduced';
}

export default function CategoryExplanations({ locale, motion }: CategoryExplanationsProps) {
  const explanations: Record<string, { en: JSX.Element; es: JSX.Element }> = {
    function: {
      en: (
        <div>
          <p className="mb-2">A connector's function is the semantic relationship it signals between parts of discourse. Common functions include addition, contrast, cause, result, condition, time, illustration, emphasis, and conclusion.</p>
          <h4 className="font-semibold mt-2">Main characteristics</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Links ideas and shows how they relate (reason, contrast, sequence, etc.).</li>
            <li>Guides the reader through logical or temporal flow.</li>
            <li>Can occur within clauses, between clauses, or at sentence boundaries.</li>
          </ul>
          <h4 className="font-semibold mt-2">Examples</h4>
          <ul className="list-inside list-disc mt-1">
            <li><strong>Addition:</strong> and, also, furthermore — "She studies and works."</li>
            <li><strong>Contrast:</strong> but, however — "I wanted to go, but I stayed."</li>
            <li><strong>Cause / Result:</strong> because / therefore — "It rained, so we stayed inside."</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">La función indica la relación semántica que marca el conector: adición, contraste, causa, resultado, condición, tiempo, ilustración, énfasis, conclusión, etc.</p>
          <h4 className="font-semibold mt-2">Características</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Conecta ideas y muestra su relación (razón, contraste, secuencia).</li>
            <li>Guía el flujo lógico o temporal del texto.</li>
          </ul>
        </div>
      ),
    },
    grammar: {
      en: (
        <div>
          <p className="mb-2">Grammatical type describes the structural role a connector plays: coordinating, subordinating, correlative, conjunctive adverb, prepositional, or multi-word phrase.</p>
          <h4 className="font-semibold mt-2">Main Characteristics of Coordinating Conjunctions</h4>
          <ol className="list-decimal list-inside mt-1">
            <li>They connect equal structures — words, phrases, or clauses.</li>
          </ol>

          <p className="mt-2 font-semibold">Examples of equal structures</p>
          <ul className="list-disc list-inside mt-1">
            <li>Word + Word — "She likes tea and coffee."</li>
            <li>Phrase + Phrase — "We can meet after class or before dinner."</li>
            <li>Clause + Clause — "I was tired, but I finished my homework."</li>
          </ul>

          <h4 className="font-semibold mt-2">Coordinating Conjunctions and Punctuation</h4>
          <p className="mt-1">1. Joining two independent clauses — use a comma before the conjunction.</p>
          <p className="mt-1"><em>Structure:</em> Independent clause + comma + coordinating conjunction + independent clause</p>
          <p className="mt-1">Examples: "I wanted to go, but I was busy." "She studied hard, so she passed the test."</p>

          <p className="mt-2">2. Joining words or phrases — usually no comma is needed.</p>
          <p className="mt-1">Examples: "I bought apples and oranges." "We walked slowly but carefully."</p>

          <h4 className="font-semibold mt-2">Coordinating vs. Subordinating</h4>
          <p className="mt-1"><strong>Coordinating:</strong> connect equal ideas. — "I was tired, but I continued working."</p>
          <p className="mt-1"><strong>Subordinating:</strong> connect dependent to independent clause. — "Although I was tired, I continued working."</p>

          <h4 className="font-semibold mt-2">Common mistakes</h4>
          <ul className="list-disc list-inside mt-1">
            <li><strong>Comma splice</strong> — wrong: "I was hungry, I ate pizza." Correct: "I was hungry, so I ate pizza."</li>
            <li><strong>Overusing conjunctions</strong> — prefer concise sequences: "I went home, ate dinner, and went to sleep."</li>
            <li><strong>Confusing so / because</strong> — both can appear but play different roles: "Because I was tired, I slept early." / "I was tired, so I slept early."</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">El tipo gramatical describe la función estructural: coordinante, subordinante, correlativo, adverbio conjuntivo, preposicional o frase multi-palabra.</p>
          <h4 className="font-semibold mt-2">Coordinantes — características principales</h4>
          <p className="mt-1">Unen estructuras equivalentes: palabra + palabra, frase + frase, cláusula + cláusula. Ponen en relación elementos del mismo nivel.</p>
          <h4 className="font-semibold mt-2">Puntuación</h4>
          <p className="mt-1">Cuando unen dos oraciones independientes se usa coma antes del coordinante: "Quise ir, pero estaba ocupado."</p>
          <h4 className="font-semibold mt-2">Errores comunes</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Comma splice: "Tenía hambre, comí pizza." → "Tenía hambre, así que comí pizza."</li>
          </ul>
        </div>
      ),
    },
    punctuation: {
      en: (
        <div>
          <p className="mb-2">Punctuation behavior explains the typical marks used with a connector: comma, semicolon, colon, none, or specific positions that affect punctuation.</p>
          <h4 className="font-semibold mt-2">Key rules</h4>
          <ul className="list-disc list-inside mt-1">
            <li><strong>Comma</strong>: used before coordinating conjunctions that join independent clauses.</li>
            <li><strong>Semicolon</strong>: can separate closely related independent clauses when a connector is absent or to emphasize contrast.</li>
            <li><strong>Colon</strong>: introduces a list or conclusion; not a standard connector marker but important for certain structures.</li>
            <li><strong>None</strong>: many connectors join smaller units and need no special punctuation.</li>
          </ul>
          <h4 className="font-semibold mt-2">Examples</h4>
          <p className="mt-1">Comma: "I wanted to leave, but it was late." Semicolon: "She studied hard; therefore, she passed." No punctuation: "apples and oranges"</p>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Describe las marcas de puntuación habituales con cada conector: coma, punto y coma, dos puntos, o ninguna.</p>
          <p className="mt-1">Ejemplo: coma antes de "but" cuando une oraciones independientes.</p>
        </div>
      ),
    },
    cefr: {
      en: (
        <div>
          <p className="mb-2">CEFR level notes where a connector is typically introduced or expected to be known: A1–C2. This helps teachers sequence instructions and exercises.</p>
          <h4 className="font-semibold mt-2">Teaching tips</h4>
          <ul className="list-disc list-inside mt-1">
            <li>A1–A2: introduce high-frequency coordinating connectors (and, but, because).</li>
            <li>B1–B2: add subordinating structures and conjunctive adverbs (although, however, therefore).</li>
            <li>C1–C2: teach nuance, register, and less frequent rhetorical connectors.</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Nivel MCER indica cuándo suele enseñarse el conector. Útil para secuenciar la enseñanza.</p>
        </div>
      ),
    },
    register: {
      en: (
        <div>
          <p className="mb-2">Register identifies the tone/style where a connector is appropriate: informal, neutral, formal, literary.</p>
          <h4 className="font-semibold mt-2">Notes</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Informal connectors suit speech and casual writing (e.g., "and then").</li>
            <li>Neutral connectors work across most contexts (e.g., "but").</li>
            <li>Formal connectors are preferred in academic prose (e.g., "therefore", "moreover").</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">El registro indica el tono: informal, neutral, formal o literario, y ayuda a elegir formas apropiadas según el contexto.</p>
        </div>
      ),
    },
    position: {
      en: (
        <div>
          <p className="mb-2">Position describes where a connector commonly appears: initial (beginning), medial (inside clause), or final (end).</p>
          <h4 className="font-semibold mt-2">Examples</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Initial: "However, she decided to stay."</li>
            <li>Medial: "She has, however, changed her mind."</li>
            <li>Final: "They argued; the result, however." (rare)</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Posición: inicial, medial o final. Ejemplo: "However, ..." (inicial) o "..., however, ..." (medial).</p>
        </div>
      ),
    },
    structure: {
      en: (
        <div>
          <p className="mb-2">Structure concerns length and form: single-word items (and, but), compounds (nevertheless), or multi-word phrases (on the other hand, as a result).</p>
          <h4 className="font-semibold mt-2">Teaching note</h4>
          <p className="mt-1">Teach shorter, high-frequency forms first; introduce multi-word phrases with clear contextualized examples.</p>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Estructura: palabra única, compuesta o frase multi-palabra. Enseña primero formas cortas y frecuentes.</p>
        </div>
      ),
    },
    frequency: {
      en: (
        <div>
          <p className="mb-2">Frequency signals how often learners meet the connector in real language: high, medium, or low. High-frequency items should be prioritized.</p>
          <h4 className="font-semibold mt-2">Implication</h4>
          <p className="mt-1">High = teach early and recycle often; Low = introduce for advanced learners and explicit instruction.</p>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Frecuencia: alta, media o baja. Las de alta frecuencia deben enseñarse antes y reforzarse.</p>
        </div>
      ),
    },
    rhetorical: {
      en: (
        <div>
          <p className="mb-2">Rhetorical function shows which discourse purpose the connector supports: argumentation, narrative, expository, or persuasive.</p>
          <h4 className="font-semibold mt-2">Examples</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Argumentation: therefore, furthermore.</li>
            <li>Narrative: then, meanwhile.</li>
            <li>Expository: for example, in other words.</li>
            <li>Persuasive: consequently, moreover.</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Función retórica: argumentación, narrativa, exposición o persuasión. Indica para qué tipo de texto es más útil el conector.</p>
        </div>
      ),
    },
    origin: {
      en: (
        <div>
          <p className="mb-2">Origin describes the historical or morphological source: native English, Latin/French borrowings, or hybrid formations. Useful for etymological notes and pronunciation patterns.</p>
          <h4 className="font-semibold mt-2">Notes</h4>
          <ul className="list-disc list-inside mt-1">
            <li>Native items often look short and irregular (and, but).</li>
            <li>Latin/French borrowings can be longer and more formal (therefore, moreover).</li>
          </ul>
        </div>
      ),
      es: (
        <div>
          <p className="mb-2">Origen: nativo, préstamos latinos/franceses o híbridos. Aporta información etimológica y sobre registro.</p>
        </div>
      ),
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
                <h3 className="text-base font-semibold capitalize">{group.label[locale] || group.axis}</h3>
                <div className="mt-2 text-sm leading-6 text-[color:var(--panel-text)]">{explanation[locale] ?? (locale === 'en' ? <p>No explanation available.</p> : <p>No hay explicación disponible.</p>)}</div>
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
