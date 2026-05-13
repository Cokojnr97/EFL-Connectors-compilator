import type { ConnectorRecord, Locale } from '../../data/types.js';
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

export default function ConnectorCard({ connector, locale, motion, index }: ConnectorCardProps) {
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

        <div className="flex flex-wrap gap-2">
          {CATEGORY_SEQUENCE.map((axis) => (
            <span key={axis} className="tag-chip">
              {formatCategory(axis, connector.categories[axis], locale)}
            </span>
          ))}
        </div>

        <div className="grid gap-3">
          {connector.examples.map((example, exampleIndex) => (
            <div key={`${connector.id}-${exampleIndex}`} className="rounded-[22px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--panel-muted)]">
                {locale === 'en' ? 'Example' : 'Ejemplo'} {exampleIndex + 1}
              </div>
              <p className="text-sm leading-7 sm:text-base">{renderHighlightedText(locale === 'en' ? example.en : example.es, example.highlights)}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
