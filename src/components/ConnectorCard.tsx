import { useState } from 'react';
import type { ConnectorExample, ConnectorRecord, Locale } from '../../data/types.js';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE } from '../../data/categories.js';
import { renderHighlightedText } from '../lib/highlight';

interface ConnectorCardProps {
  connector: ConnectorRecord;
  locale: Locale;
  motion: 'normal' | 'reduced';
  index: number;
}

function formatCategory(axis: keyof ConnectorRecord['categories'], values: string[], locale: Locale): string {
  const group = CATEGORY_GROUPS[axis];
  const labels = values.map((value) => group.options.find((option) => option.value === value)?.label[locale] ?? value);
  return `${group.label[locale]}: ${labels.join(', ')}`;
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildExample(en: string, es: string, term: string, extraHighlights: ConnectorExample['highlights'] = []): ConnectorExample {
  return {
    en,
    es,
    highlights: [{ term, tone: 'connector' }, ...extraHighlights],
  };
}

function buildSupplementalExamples(connector: ConnectorRecord): ConnectorExample[] {
  const term = connector.connector;
  const termCapitalized = capitalize(term);
  const primaryFunction = connector.categories.function[0];

  switch (connector.id) {
    case 'and':
      return [
        buildExample('The teacher explained the rule, and the class practiced it.', 'La profesora explicó la regla, y la clase la practicó.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('We packed notebooks and pens.', 'Empacamos cuadernos y bolígrafos.', term),
        buildExample('She listened and took notes.', 'Escuchó y tomó notas.', term),
        buildExample('The plan was simple and clear.', 'El plan era simple y claro.', term),
      ];
    case 'but':
      return [
        buildExample('The room was small but comfortable.', 'La habitación era pequeña pero cómoda.', term),
        buildExample('I wanted to help, but I was late.', 'Quería ayudar, pero llegué tarde.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('The task was hard but possible.', 'La tarea era difícil pero posible.', term),
        buildExample('She was tired but kept going.', 'Estaba cansada pero siguió adelante.', term),
      ];
    case 'so':
      return [
        buildExample('The train was late, so we waited.', 'El tren llegó tarde, así que esperamos.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('The room was cold, so she closed the window.', 'La habitación estaba fría, así que cerró la ventana.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('He forgot the notes, so he went back.', 'Olvidó las notas, así que regresó.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('We were ready, so the lesson started early.', 'Estábamos listos, así que la clase empezó temprano.', term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'because':
      return [
        buildExample('We stayed inside because it was raining.', 'Nos quedamos dentro porque estaba lloviendo.', term),
        buildExample('He improved because he practiced daily.', 'Mejoró porque practicaba a diario.', term),
        buildExample('The test felt easier because we reviewed the notes.', 'El examen pareció más fácil porque repasamos las notas.', term),
        buildExample('I paused because the instructions were unclear.', 'Me detuve porque las instrucciones no estaban claras.', term),
      ];
    case 'if':
      return [
        buildExample('If you need help, ask me.', 'Si necesitas ayuda, pregúntame.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('We will leave if the weather improves.', 'Saldremos si mejora el tiempo.', term),
        buildExample('If the answer is unclear, check it again.', 'Si la respuesta no está clara, revísala otra vez.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('You can join us if you arrive on time.', 'Puedes unirte a nosotros si llegas a tiempo.', term),
      ];
    case 'when':
      return [
        buildExample('When the bell rings, the class starts.', 'Cuando suena el timbre, empieza la clase.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('I feel calmer when I finish the work.', 'Me siento más tranquilo cuando termino el trabajo.', term),
        buildExample('We talk quietly when the baby sleeps.', 'Hablamos en voz baja cuando el bebé duerme.', term),
        buildExample('The room gets brighter when the sun rises.', 'La habitación se ilumina cuando sale el sol.', term),
      ];
    case 'although':
      return [
        buildExample('Although the task was hard, we finished it.', 'Aunque la tarea era difícil, la terminamos.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('She kept smiling although she was tired.', 'Siguió sonriendo aunque estaba cansada.', term),
        buildExample('Although the plan changed, we stayed calm.', 'Aunque el plan cambió, mantuvimos la calma.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('The lesson was long although it was useful.', 'La clase fue larga aunque fue útil.', term),
      ];
    case 'whereas':
      return [
        buildExample('The first summary was brief, whereas the second was detailed.', 'El primer resumen era breve, mientras que el segundo era detallado.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('He prefers reading, whereas she prefers speaking.', 'Él prefiere leer, mientras que ella prefiere hablar.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('The old version was slow, whereas the new one is fast.', 'La versión antigua era lenta, mientras que la nueva es rápida.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('The left path is quiet, whereas the right path is busy.', 'El camino de la izquierda es tranquilo, mientras que el de la derecha está lleno de gente.', term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'on-the-other-hand':
      return [
        buildExample('The first option is cheap; on the other hand, the second is faster.', 'La primera opción es barata; por otro lado, la segunda es más rápida.', term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample('She likes silence; on the other hand, her brother likes music.', 'A ella le gusta el silencio; por otro lado, a su hermano le gusta la música.', term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample('The old computer is heavy; on the other hand, it is reliable.', 'La computadora antigua es pesada; por otro lado, es confiable.', term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample('The plan is simple; on the other hand, it may take longer.', 'El plan es sencillo; por otro lado, puede tardar más.', term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
      ];
    case 'as-well-as':
      return [
        buildExample('The course includes reading as well as writing.', 'El curso incluye lectura así como escritura.', term),
        buildExample('We invited teachers as well as students.', 'Invitamos a profesores así como a estudiantes.', term),
        buildExample('The workshop covers grammar as well as pronunciation.', 'El taller cubre gramática así como pronunciación.', term),
        buildExample('The bag holds notebooks as well as markers.', 'La bolsa guarda cuadernos así como marcadores.', term),
      ];
    case 'instead':
      return [
        buildExample('I wanted coffee, but I chose tea instead.', 'Quería café, pero elegí té en su lugar.', term),
        buildExample('She did not guess; instead, she checked the notes.', 'No adivinó; en su lugar, revisó las notas.', term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample('We did not drive; instead, we walked.', 'No conducimos; en su lugar, caminamos.', term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample('He stayed quiet instead of arguing.', 'Se quedó callado en lugar de discutir.', term),
      ];
    case 'not-only-but-also':
      return [
        buildExample('The lesson was not only useful but also enjoyable.', 'La lección no solo fue útil, sino también agradable.', term),
        buildExample('She was not only prepared but also confident.', 'No solo estaba preparada, sino también segura.', term),
        buildExample('The app is not only fast but also simple.', 'La aplicación no solo es rápida, sino también sencilla.', term),
        buildExample('The report was not only clear but also concise.', 'El informe no solo fue claro, sino también conciso.', term),
      ];
    default:
      break;
  }

  switch (primaryFunction) {
    case 'addition':
      return [
        buildExample(`${termCapitalized}, the plan saved time.`, `${termCapitalized}, el plan ahorró tiempo.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`${termCapitalized}, the notes were easy to review.`, `${termCapitalized}, las notas fueron fáciles de repasar.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`The teacher added one more idea; ${term}, the class understood the point.`, `La profesora añadió otra idea; ${term}, la clase entendió el punto.`, term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample(`${termCapitalized}, we kept the discussion moving.`, `${termCapitalized}, mantuvimos la conversación en marcha.`, term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'contrast':
      return [
        buildExample(`${termCapitalized}, the result was different.`, `${termCapitalized}, el resultado fue diferente.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`The first answer was simple; ${term}, the second was detailed.`, `La primera respuesta fue simple; ${term}, la segunda fue detallada.`, term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample(`The room was quiet, ${term} the hallway was noisy.`, `La habitación estaba en silencio, ${term} el pasillo era ruidoso.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`She was tired, ${term} she kept going.`, `Estaba cansada, ${term} siguió adelante.`, term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'cause':
      return [
        buildExample(`We stayed inside ${term} it was raining.`, `Nos quedamos dentro ${term} estaba lloviendo.`, term),
        buildExample(`He improved ${term} he practiced daily.`, `Mejoró ${term} practicaba a diario.`, term),
        buildExample(`The test felt easier ${term} we reviewed the notes.`, `El examen pareció más fácil ${term} repasamos las notas.`, term),
        buildExample(`I paused ${term} the instructions were unclear.`, `Me detuve ${term} las instrucciones no estaban claras.`, term),
      ];
    case 'result':
      return [
        buildExample(`The bus was late, ${term} we left early.`, `El autobús llegó tarde, ${term} salimos temprano.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`The evidence was strong; ${term}, the claim was accepted.`, `La evidencia era sólida; ${term}, la afirmación fue aceptada.`, term, [{ term: ';', tone: 'punctuation' }, { term: ',', tone: 'punctuation' }]),
        buildExample(`The class was prepared, ${term} the presentation went smoothly.`, `La clase estaba preparada, ${term} la presentación salió bien.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`The file was missing, ${term} we searched again.`, `Faltaba el archivo, ${term} buscamos otra vez.`, term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'condition':
      return [
        buildExample(`${termCapitalized} you need help, ask me.`, `${termCapitalized} necesitas ayuda, pregúntame.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`We will leave ${term} the weather improves.`, `Saldremos ${term} mejore el tiempo.`, term),
        buildExample(`The lesson changes ${term} the class becomes noisy.`, `La clase cambia ${term} el grupo se pone ruidoso.`, term),
        buildExample(`You can join us ${term} you arrive on time.`, `Puedes unirte a nosotros ${term} llegas a tiempo.`, term),
      ];
    case 'time':
      return [
        buildExample(`${termCapitalized} the bell rings, the class starts.`, `${termCapitalized} suena el timbre, empieza la clase.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`I feel calmer ${term} I finish the work.`, `Me siento más tranquilo ${term} termino el trabajo.`, term),
        buildExample(`We talk quietly ${term} the baby sleeps.`, `Hablamos en voz baja ${term} el bebé duerme.`, term),
        buildExample(`The room gets brighter ${term} the sun rises.`, `La habitación se ilumina más ${term} sale el sol.`, term),
      ];
    case 'illustration':
      return [
        buildExample(`${termCapitalized}, some students read before bed.`, `${termCapitalized}, algunos estudiantes leen antes de dormir.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`${termCapitalized}, the teacher might show one model answer.`, `${termCapitalized}, la profesora podría mostrar una respuesta modelo.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`${termCapitalized}, a short summary can help memory.`, `${termCapitalized}, un resumen breve puede ayudar a la memoria.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`${termCapitalized}, you can underline the main idea.`, `${termCapitalized}, puedes subrayar la idea principal.`, term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'emphasis':
      return [
        buildExample(`${termCapitalized}, the results were impressive.`, `${termCapitalized}, los resultados fueron impresionantes.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`The plan was ${term} effective.`, `El plan fue ${term} efectivo.`, term),
        buildExample(`The evidence was ${term} convincing.`, `La evidencia fue ${term} convincente.`, term),
        buildExample(`${termCapitalized}, the point is clear.`, `${termCapitalized}, el punto está claro.`, term, [{ term: ',', tone: 'punctuation' }]),
      ];
    case 'conclusion':
      return [
        buildExample('In conclusion, the lesson was useful.', 'En conclusión, la clase fue útil.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('To sum up, the class understood the main idea.', 'Para resumir, la clase entendió la idea principal.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('In conclusion, the project met its goals.', 'En conclusión, el proyecto cumplió sus objetivos.', term, [{ term: ',', tone: 'punctuation' }]),
        buildExample('To sum up, the summary was accurate.', 'Para resumir, el resumen fue preciso.', term, [{ term: ',', tone: 'punctuation' }]),
      ];
    default:
      return [
        buildExample(`${termCapitalized}, the class reviewed the rule again.`, `${termCapitalized}, la clase repasó la regla otra vez.`, term, [{ term: ',', tone: 'punctuation' }]),
        buildExample(`We used ${term} to link the ideas more smoothly.`, `Usamos ${term} para enlazar las ideas con más fluidez.`, term),
        buildExample(`The sentence feels natural when ${term} fits the meaning.`, `La oración suena natural cuando ${term} encaja con el significado.`, term),
        buildExample(`Students can notice how ${term} changes the rhythm of the sentence.`, `Los estudiantes pueden notar cómo ${term} cambia el ritmo de la oración.`, term),
      ];
  }
}

export default function ConnectorCard({ connector, locale, motion, index }: ConnectorCardProps) {
  const [tagsOpen, setTagsOpen] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);
  const supplementalExamples = buildSupplementalExamples(connector);
  const allExamples = [...connector.examples, ...supplementalExamples];

  return (
    <article className="glass-panel rounded-[30px] p-5 sm:p-6" style={{ animationDelay: motion === 'reduced' ? '0ms' : `${index * 65}ms` }}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow">Connector</p>
            <h3 className="text-2xl font-semibold tracking-tight">{connector.connector}</h3>
          </div>
          <div className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] px-3 py-1 text-xs font-medium text-[color:var(--panel-muted)]">
            {connector.categories.cefr.join(' / ')}
          </div>
        </div>

        <p className="max-w-4xl text-sm leading-6 text-[color:var(--panel-text)] sm:text-base">
          {connector.explanation[locale]}
        </p>

        <div className="rounded-[26px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)]/70">
          <button
            type="button"
            onClick={() => setTagsOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            aria-expanded={tagsOpen}
          >
            <span className="text-sm font-semibold text-[color:var(--panel-text)]">
              {locale === 'en' ? 'Tags' : 'Etiquetas'}
            </span>
            <span className={`text-lg leading-none text-[color:var(--panel-muted)] transition-transform ${tagsOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {tagsOpen && (
            <div className="border-t border-[color:var(--panel-border)] px-4 py-4">
              <div className="flex flex-wrap gap-2">
                {CATEGORY_SEQUENCE.map((axis) => (
                  <span key={axis} className="tag-chip">
                    {formatCategory(axis, connector.categories[axis], locale)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="rounded-[26px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)]/70">
          <button
            type="button"
            onClick={() => setExamplesOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            aria-expanded={examplesOpen}
          >
            <span className="text-sm font-semibold text-[color:var(--panel-text)]">
              {locale === 'en' ? `Examples (${allExamples.length})` : `Ejemplos (${allExamples.length})`}
            </span>
            <span className={`text-lg leading-none text-[color:var(--panel-muted)] transition-transform ${examplesOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {examplesOpen && (
            <div className="border-t border-[color:var(--panel-border)] px-4 py-4">
              <div className="mt-4 grid gap-3">
                {allExamples.map((example, exampleIndex) => (
                  <div key={`${connector.id}-${exampleIndex}`} className="rounded-[22px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--panel-muted)]">
                      {locale === 'en' ? 'Example' : 'Ejemplo'} {exampleIndex + 1}
                    </div>
                    <p className="text-sm leading-7 sm:text-base">{renderHighlightedText(locale === 'en' ? example.en : example.es, example.highlights)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
