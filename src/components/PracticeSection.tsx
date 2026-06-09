import { useEffect, useState } from 'react';
import type { ConnectorRecord, Locale } from '../../data/types.js';
import { buildPracticeExerciseBundle, type PracticeExercise } from '../lib/practiceExercises';
import { UI_COPY } from '../lib/i18n';
import { showPracticeFeedback } from '../lib/alerts';

interface PracticeSectionProps {
  connectors: ConnectorRecord[];
  locale: Locale;
  motion: 'normal' | 'reduced';
}

const PAGE_SIZE = 4;

function formatKind(kind: PracticeExercise['kind'], locale: Locale) {
  if (kind === 'connector') {
    return locale === 'en' ? 'Connector' : 'Conector';
  }

  return locale === 'en' ? 'Punctuation' : 'Puntuación';
}

function clampPage(page: number, totalPages: number) {
  if (totalPages <= 1) {
    return 0;
  }

  return Math.max(0, Math.min(page, totalPages - 1));
}

function SetNav({
  page,
  totalPages,
  onSelectPage,
  locale,
}: {
  page: number;
  totalPages: number;
  onSelectPage: (nextPage: number) => void;
  locale: Locale;
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--panel-muted)]">
        {locale === 'en' ? 'Jump to set' : 'Ir al conjunto'}
      </span>
      <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
        {Array.from({ length: totalPages }, (_, index) => {
          const active = index === page;
          return (
            <button
              key={`set-${index}`}
              type="button"
              onClick={() => onSelectPage(index)}
              className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${active ? 'border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--panel-text)]' : 'border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] text-[color:var(--panel-muted)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--panel-text)]'}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PracticeCard({ exercise, locale, motion }: { exercise: PracticeExercise; locale: Locale; motion: 'normal' | 'reduced' }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelected(null);
    setSubmitted(false);
  }, [exercise.id]);

  const isCorrect = selected === exercise.answer;
  const statusText = !submitted
    ? ''
    : isCorrect
      ? locale === 'en'
        ? 'Correct.'
        : 'Correcto.'
      : locale === 'en'
        ? 'Try again.'
        : 'Inténtalo otra vez.';

  const beforeBlank = exercise.sentence[locale].split('_____')[0] ?? '';
  const afterBlank = exercise.sentence[locale].split('_____')[1] ?? '';

  return (
    <article
      className="rounded-[28px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
      style={{ animationDelay: motion === 'reduced' ? '0ms' : '0ms' }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow">{formatKind(exercise.kind, locale)}</p>
            <h3 className="text-lg font-semibold tracking-tight">{locale === 'en' ? 'Complete the blank' : 'Completa el espacio'}</h3>
          </div>
          <div className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] px-3 py-1 text-xs font-medium text-[color:var(--panel-muted)]">
            {exercise.focus[locale]}
          </div>
        </div>

        <p className="text-sm leading-6 text-[color:var(--panel-muted)]">{exercise.prompt[locale]}</p>

        <p className="rounded-[22px] border border-dashed border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] px-4 py-4 text-base leading-7 text-[color:var(--panel-text)]">
          <span>{beforeBlank}</span>
          <span
            onDrop={(event) => {
              event.preventDefault();
              const dropped = event.dataTransfer.getData('text/plain');
              if (exercise.options.includes(dropped)) {
                setSelected(dropped);
              }
            }}
            onDragOver={(event) => event.preventDefault()}
            className={`mx-1 inline-flex min-w-[7rem] items-center justify-center rounded-xl border px-3 py-1.5 text-sm font-semibold transition-colors ${selected ? 'border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--panel-text)]' : 'border-dashed border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] text-[color:var(--panel-muted)]'}`}
          >
            {selected ?? (locale === 'en' ? 'Drop here' : 'Suelta aquí')}
          </span>
          <span>{afterBlank}</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {exercise.options.map((option) => {
            const active = option === selected;
            return (
              <button
                key={option}
                type="button"
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.setData('text/plain', option);
                }}
                onClick={() => setSelected(option)}
                className={`tag-chip cursor-grab active:cursor-grabbing ${active ? 'ring-2 ring-[color:var(--accent)] ring-offset-2 ring-offset-[color:var(--panel-strong)]' : ''}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => {
              if (!selected) {
                void showPracticeFeedback(locale, 'empty');
                return;
              }

              const correct = selected === exercise.answer;
              setSubmitted(true);
              void showPracticeFeedback(locale, correct ? 'correct' : 'incorrect');
            }}
            className="pill-button"
          >
            {locale === 'en' ? 'Check answer' : 'Comprobar respuesta'}
          </button>
          <button
            type="button"
            onClick={() => {
              setSelected(null);
              setSubmitted(false);
            }}
            className="rounded-full border border-[color:var(--panel-border)] px-4 py-2 text-sm font-medium text-[color:var(--panel-text)] transition-colors hover:bg-[color:var(--accent-soft)] hover:bg-opacity-40"
          >
            {locale === 'en' ? 'Reset' : 'Reiniciar'}
          </button>
          {submitted && (
            <span className={`text-sm font-medium ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
              {statusText}
            </span>
          )}
        </div>

        {submitted && !isCorrect && (
          <p className="text-sm text-[color:var(--panel-muted)]">
            {locale === 'en' ? 'Correct answer:' : 'Respuesta correcta:'} <span className="font-semibold text-[color:var(--panel-text)]">{exercise.answer}</span>
          </p>
        )}

      </div>
    </article>
  );
}

function PracticeDeck({
  title,
  items,
  locale,
  motion,
  page,
  onNextPage,
  onSelectPage,
}: {
  title: string;
  items: PracticeExercise[];
  locale: Locale;
  motion: 'normal' | 'reduced';
  page: number;
  onNextPage: () => void;
  onSelectPage: (nextPage: number) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const safePage = clampPage(page, totalPages);
  const currentItems = items.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="glass-panel fade-card rounded-[28px] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">{title}</p>
          <h2 className="text-xl font-semibold">
            {locale === 'en' ? 'Set' : 'Conjunto'} {safePage + 1} / {totalPages}
          </h2>
        </div>
        <button
          type="button"
          onClick={onNextPage}
          className="pill-button self-start sm:self-auto"
          disabled={items.length === 0}
        >
          {locale === 'en' ? 'Next set' : 'Siguiente conjunto'}
        </button>
      </div>
      <SetNav page={safePage} totalPages={totalPages} onSelectPage={onSelectPage} locale={locale} />

      {currentItems.length === 0 ? (
        <p className="mt-4 text-sm text-[color:var(--panel-muted)]">
          {locale === 'en' ? 'No exercises are available for this slice yet.' : 'Todavía no hay ejercicios disponibles para este conjunto.'}
        </p>
      ) : (
        <div className="mt-4 grid gap-4">
          {currentItems.map((exercise) => (
            <PracticeCard key={exercise.id} exercise={exercise} locale={locale} motion={motion} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function PracticeSection({ connectors, locale, motion }: PracticeSectionProps) {
  const copy = UI_COPY[locale];
  const exerciseBundle = buildPracticeExerciseBundle(connectors);
  const connectorExercises = exerciseBundle.core.filter((exercise) => exercise.kind === 'connector');
  const punctuationExercises = exerciseBundle.core.filter((exercise) => exercise.kind === 'punctuation');
  const advancedParagraphExercises = exerciseBundle.advanced;
  const [connectorPage, setConnectorPage] = useState(0);
  const [punctuationPage, setPunctuationPage] = useState(0);
  const [advancedPage, setAdvancedPage] = useState(0);

  useEffect(() => {
    setConnectorPage(0);
    setPunctuationPage(0);
    setAdvancedPage(0);
  }, [connectors]);

  return (
    <section className="glass-panel fade-card rounded-[28px] p-4 sm:p-5">
      <div className="mb-6">
        <p className="eyebrow">{copy.practice}</p>
        <h2 className="text-lg font-semibold">{copy.practiceSubtitle}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--panel-muted)]">{copy.practiceInstructions}</p>
      </div>

      {connectors.length === 0 ? (
        <div className="rounded-[24px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-5 text-sm text-[color:var(--panel-muted)]">
          {copy.noMatches}
        </div>
      ) : (
        <div className="space-y-6">
          <PracticeDeck
            title={copy.connectorDrills}
            items={connectorExercises}
            locale={locale}
            motion={motion}
            page={connectorPage}
            onNextPage={() => setConnectorPage((value) => (connectorExercises.length === 0 ? 0 : (value + 1) % Math.max(1, Math.ceil(connectorExercises.length / PAGE_SIZE))))}
            onSelectPage={setConnectorPage}
          />
          <PracticeDeck
            title={copy.punctuationDrills}
            items={punctuationExercises}
            locale={locale}
            motion={motion}
            page={punctuationPage}
            onNextPage={() => setPunctuationPage((value) => (punctuationExercises.length === 0 ? 0 : (value + 1) % Math.max(1, Math.ceil(punctuationExercises.length / PAGE_SIZE))))}
            onSelectPage={setPunctuationPage}
          />
          <PracticeDeck
            title={copy.advancedParagraphDrills}
            items={advancedParagraphExercises}
            locale={locale}
            motion={motion}
            page={advancedPage}
            onNextPage={() => setAdvancedPage((value) => (advancedParagraphExercises.length === 0 ? 0 : (value + 1) % Math.max(1, Math.ceil(advancedParagraphExercises.length / PAGE_SIZE))))}
            onSelectPage={setAdvancedPage}
          />
        </div>
      )}
    </section>
  );
}
