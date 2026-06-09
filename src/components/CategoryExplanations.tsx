import type { Locale } from '../../data/types.js';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE } from '../../data/categories.js';
import { getExplanation, getSubcategoryHtml } from '../lib/categoryExplanations';

interface CategoryExplanationsProps {
  locale: Locale;
  motion: 'normal' | 'reduced';
}

function formatAxisLabel(axis: string) {
  return axis.charAt(0).toUpperCase() + axis.slice(1);
}

export default function CategoryExplanations({ locale, motion }: CategoryExplanationsProps) {
  return (
    <section className="glass-panel fade-card rounded-[28px] p-4 sm:p-5">
      <style>{`
        details summary svg { transition: transform .18s ease; }
        details[open] summary svg { transform: rotate(90deg); }
        summary::-webkit-details-marker { display: none; }
      `}</style>
      <div className="mb-6">
        <p className="eyebrow">Learn</p>
        <h2 className="text-lg font-semibold">Category explanations</h2>
      </div>

      <div className="space-y-4">
        {CATEGORY_SEQUENCE.map((axis, index) => {
          const group = CATEGORY_GROUPS[axis];
          const cap = (group.label?.en ?? axis).replace(/^[a-z]/, (m) => m.toUpperCase());
          const html = getExplanation(axis, locale);

          return (
            <article
              key={axis}
              className="rounded-[24px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
              style={{ animationDelay: motion === 'reduced' ? '0ms' : `${index * 45}ms` }}
            >
              <div className="mb-3">
                <h3 className="text-base font-semibold">{`Category: By ${cap}`}</h3>
                <div
                  className="mt-2 text-sm leading-6 text-[color:var(--panel-text)]"
                  dangerouslySetInnerHTML={{ __html: html }}
                />

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-[color:var(--panel-muted)]">
                  Specifics
                </div>
                <div className="mt-2 space-y-2">
                  {group.options.map((option, idx) => {
                    const label = option.label?.en ?? option.label?.[locale] ?? option.value;
                    const subHtml = getSubcategoryHtml(axis, option.value, label);
                    return (
                      <details
                        key={option.value}
                        open={idx === 0}
                        className="rounded-lg border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-3"
                      >
                        <summary className="cursor-pointer font-medium flex items-center justify-between">
                          <span>{`${formatAxisLabel(axis)}: ${label}`}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
                          </svg>
                        </summary>
                        <div
                          className="mt-2 text-sm leading-6 text-[color:var(--panel-text)]"
                          dangerouslySetInnerHTML={{ __html: subHtml }}
                        />
                      </details>
                    );
                  })}
                </div>
              </div>
              </div>

              {/* Examples chip bar removed — not used in Learn view */}
            </article>
          );
        })}
      </div>
    </section>
  );
}
