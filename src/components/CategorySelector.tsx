import type { CategorySelection, Locale } from '../../data/types.js';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE, FUNCTION_SUBCATEGORY_SEQUENCE } from '../../data/categories.js';

interface CategorySelectorProps {
  locale: Locale;
  motion: 'normal' | 'reduced';
  selection: CategorySelection;
  eligibleConnectors: number;
  onChange: (next: CategorySelection) => void;
  onClear: () => void | Promise<void>;
}

function toggleSelection(selection: CategorySelection, axis: keyof CategorySelection, value: string): CategorySelection {
  const current = selection[axis];
  const nextValues = current.includes(value) ? current.filter((entry) => entry !== value) : [...current, value];

  return {
    ...selection,
    [axis]: nextValues,
  };
}

export default function CategorySelector({ locale, selection, eligibleConnectors, onChange, onClear, motion }: CategorySelectorProps) {
  const bannerText = locale === 'en' 
    ? `${eligibleConnectors} eligible ${eligibleConnectors === 1 ? 'word' : 'words'}`
    : `${eligibleConnectors} ${eligibleConnectors === 1 ? 'palabra' : 'palabras'} elegible${eligibleConnectors === 1 ? '' : 's'}`;

  return (
    <section className="glass-panel rounded-[28px] p-4 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Filters</p>
          <h2 className="text-lg font-semibold">{locale === 'en' ? 'Category selection' : 'Selección de categorías'}</h2>
        </div>
        <button type="button" className="pill-button" onClick={() => void onClear()}>
          {locale === 'en' ? 'Reset' : 'Reiniciar'}
        </button>
      </div>

      {Object.values(selection).some((v) => v.length > 0) && (
        <div className="mb-4 rounded-lg border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)] bg-opacity-20 px-4 py-3">
          <p className="text-sm font-medium text-[color:var(--accent)]">{bannerText}</p>
        </div>
      )}

      <div className="space-y-4">
        {CATEGORY_SEQUENCE.map((axis, index) => {
          const group = CATEGORY_GROUPS[axis];
          const values = selection[axis];
          return (
            <article
              key={axis}
              className="rounded-[24px] border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
              style={{ animationDelay: motion === 'reduced' ? '0ms' : `${index * 45}ms` }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{group.label[locale]}</h3>
                  <p className="text-sm text-[color:var(--panel-muted)]">{group.hint[locale]}</p>
                </div>
                <span className="rounded-full border border-[color:var(--panel-border)] px-3 py-1 text-xs font-medium text-[color:var(--panel-muted)]">
                  {values.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const active = values.includes(option.value);
                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => onChange(toggleSelection(selection, axis, option.value))}
                      className="chip-button"
                      data-active={active}
                      title={option.description[locale]}
                    >
                      <span className="font-medium">{option.label[locale]}</span>
                    </button>
                  );
                })}
                {axis === 'function' && FUNCTION_SUBCATEGORY_SEQUENCE.map((subAxis) => {
                  const active = values.includes(subAxis);
                  const subGroup = CATEGORY_GROUPS[subAxis];

                  return (
                    <button
                      key={subAxis}
                      type="button"
                      aria-pressed={active}
                      onClick={() => onChange(toggleSelection(selection, axis, subAxis))}
                      className="chip-button"
                      data-active={active}
                      title={subGroup.hint[locale]}
                    >
                      <span className="font-medium">{subGroup.label[locale]}</span>
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
