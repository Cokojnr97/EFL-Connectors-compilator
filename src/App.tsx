import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { CATEGORY_GROUPS, CATEGORY_SEQUENCE } from '../data/categories.js';
import { CONNECTORS } from '../data/connectors.js';
import type { CategorySelection, ConnectorRecord, Locale } from '../data/types.js';
import CategorySelector from './components/CategorySelector';
import CategoryExplanations from './components/CategoryExplanations';
import ConnectorCard from './components/ConnectorCard';
import MenuPanel from './components/MenuPanel';
import { UI_COPY } from './lib/i18n';

type ThemeMode = 'light' | 'dark';
type TonePreset = 'rose' | 'peach' | 'cocoa';
type FontScale = '100%' | '112.5%' | '125%';
type MotionMode = 'normal' | 'reduced';
type ViewMode = 'cascade' | 'table';

const DEFAULT_SETTINGS = {
  theme: 'light' as ThemeMode,
  tone: 'rose' as TonePreset,
  fontSize: '100%' as FontScale,
  motion: 'normal' as MotionMode,
  locale: 'en' as Locale,
  viewMode: 'cascade' as ViewMode,
};

const TONE_MAP: Record<TonePreset, Record<ThemeMode, {
  page: string;
  panel: string;
  panelStrong: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentSoft: string;
  shadow: string;
}>> = {
  rose: {
    light: {
      page: 'linear-gradient(145deg, #fff8f6 0%, #f8ddd8 42%, #f7efea 100%)',
      panel: 'rgba(255, 250, 248, 0.72)',
      panelStrong: 'rgba(255, 247, 244, 0.9)',
      border: 'rgba(148, 68, 78, 0.16)',
      text: '#4d232d',
      muted: '#7e4954',
      accent: '#b04453',
      accentSoft: '#f6c7cf',
      shadow: '0 24px 80px rgba(140, 58, 69, 0.12)',
    },
    dark: {
      page: 'linear-gradient(145deg, #231317 0%, #351f27 50%, #26161d 100%)',
      panel: 'rgba(42, 26, 32, 0.78)',
      panelStrong: 'rgba(55, 33, 41, 0.92)',
      border: 'rgba(255, 199, 206, 0.14)',
      text: '#f7dfdf',
      muted: '#d8a8b1',
      accent: '#f08b9b',
      accentSoft: '#54303a',
      shadow: '0 24px 90px rgba(0, 0, 0, 0.36)',
    },
  },
  peach: {
    light: {
      page: 'linear-gradient(145deg, #fff9f3 0%, #f8e0cf 40%, #fbf2ea 100%)',
      panel: 'rgba(255, 251, 248, 0.72)',
      panelStrong: 'rgba(255, 248, 241, 0.9)',
      border: 'rgba(155, 97, 64, 0.16)',
      text: '#4a2d22',
      muted: '#805746',
      accent: '#bf6044',
      accentSoft: '#f6cfbe',
      shadow: '0 24px 80px rgba(150, 92, 61, 0.12)',
    },
    dark: {
      page: 'linear-gradient(145deg, #241611 0%, #38241d 50%, #281a14 100%)',
      panel: 'rgba(44, 29, 24, 0.8)',
      panelStrong: 'rgba(58, 37, 30, 0.92)',
      border: 'rgba(255, 214, 192, 0.14)',
      text: '#f8e4da',
      muted: '#d7b29f',
      accent: '#ef9d72',
      accentSoft: '#5f3727',
      shadow: '0 24px 90px rgba(0, 0, 0, 0.36)',
    },
  },
  cocoa: {
    light: {
      page: 'linear-gradient(145deg, #fff7f5 0%, #ecd8d4 42%, #f8f0ed 100%)',
      panel: 'rgba(255, 250, 248, 0.72)',
      panelStrong: 'rgba(255, 246, 243, 0.9)',
      border: 'rgba(110, 77, 83, 0.16)',
      text: '#4b3034',
      muted: '#7d5960',
      accent: '#9f5360',
      accentSoft: '#e7c3c8',
      shadow: '0 24px 80px rgba(116, 77, 80, 0.12)',
    },
    dark: {
      page: 'linear-gradient(145deg, #21181a 0%, #332527 50%, #241c1d 100%)',
      panel: 'rgba(41, 30, 32, 0.8)',
      panelStrong: 'rgba(53, 40, 42, 0.92)',
      border: 'rgba(255, 210, 214, 0.14)',
      text: '#f7e1e4',
      muted: '#d4b1b5',
      accent: '#e18b98',
      accentSoft: '#56373b',
      shadow: '0 24px 90px rgba(0, 0, 0, 0.36)',
    },
  },
} as const;

function createEmptySelection(): CategorySelection {
  return {
    function: [],
    grammar: [],
    punctuation: [],
    cefr: [],
    register: [],
    position: [],
    structure: [],
    frequency: [],
    rhetorical: [],
    origin: [],
  };
}

function buildFilterQuery(selection: CategorySelection): string {
  const payload = Object.fromEntries(Object.entries(selection).filter(([, values]) => values.length > 0));
  return encodeURIComponent(JSON.stringify(payload));
}

function getThemeVars(theme: ThemeMode, tone: TonePreset): CSSProperties {
  const palette = TONE_MAP[tone][theme];
  return {
    ['--page-bg' as string]: palette.page,
    ['--panel-bg' as string]: palette.panel,
    ['--panel-strong' as string]: palette.panelStrong,
    ['--panel-border' as string]: palette.border,
    ['--panel-text' as string]: palette.text,
    ['--panel-muted' as string]: palette.muted,
    ['--accent' as string]: palette.accent,
    ['--accent-soft' as string]: palette.accentSoft,
    ['--panel-shadow' as string]: palette.shadow,
  } as CSSProperties;
}

function countEligibleConnectors(selection: CategorySelection): number {
  return CONNECTORS.filter((connector) => {
    return CATEGORY_SEQUENCE.every((axis) => {
      const selected = selection[axis];
      if (selected.length === 0) {
        return true;
      }
      return selected.some((value) => connector.categories[axis].includes(value));
    });
  }).length;
}

export default function App() {
  const [selection, setSelection] = useState<CategorySelection>(createEmptySelection());
  const [connectors, setConnectors] = useState<ConnectorRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [showEducational, setShowEducational] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = settings.fontSize;
    document.documentElement.lang = settings.locale;
  }, [settings.fontSize, settings.locale]);

  useEffect(() => {
    const controller = new AbortController();
    const loadConnectors = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/connectors?categories=${buildFilterQuery(selection)}`, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = (await response.json()) as { connectors: ConnectorRecord[] };
        setConnectors(payload.connectors);
      } catch (loadError) {
        if ((loadError as Error).name !== 'AbortError') {
          setError(loadError instanceof Error ? loadError.message : 'Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    loadConnectors();

    return () => controller.abort();
  }, [selection]);

  const copy = UI_COPY[settings.locale];
  const activeCount = Object.values(selection).reduce((count, values) => count + values.length, 0);
  const shellStyle = {
    ...getThemeVars(settings.theme, settings.tone),
  } as CSSProperties;

  const eligibleConnectors = countEligibleConnectors(selection);

  return (
    <div style={shellStyle} className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <header className="glass-panel fade-card flex flex-col gap-4 p-5 lg:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{copy.appTitle}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{copy.appTitle}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--panel-muted)] sm:text-base">{copy.appSubtitle}</p>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <div className="glass-panel inline-flex rounded-2xl px-4 py-3 text-sm text-[color:var(--panel-muted)]">
              <span className="font-semibold text-[color:var(--panel-text)]">{activeCount}</span>&nbsp;{copy.activeFilters}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowEducational(true)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${showEducational ? 'bg-[color:var(--accent)] text-white' : 'border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] text-[color:var(--panel-text)]'}`}
              >
                {copy.learn}
              </button>
              <button
                type="button"
                onClick={() => setShowEducational(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${!showEducational ? 'bg-[color:var(--accent)] text-white' : 'border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] text-[color:var(--panel-text)]'}`}
              >
                {copy.explore}
              </button>
            </div>
          </div>
        </div>
        <MenuPanel settings={settings} locale={settings.locale} onChange={setSettings} />
      </header>

      {showEducational ? (
        <CategoryExplanations />
      ) : (
        <main className="grid gap-6 lg:grid-cols-[minmax(320px,420px)_1fr]">
          <aside className="fade-card lg:sticky lg:top-6 lg:self-start">
            <CategorySelector
              locale={settings.locale}
              motion={settings.motion}
              selection={selection}
              onChange={setSelection}
              onClear={() => setSelection(createEmptySelection())}
              eligibleConnectors={eligibleConnectors}
            />
          </aside>

          <section className="flex min-w-0 flex-col gap-4">
            <div className="glass-panel fade-card flex flex-col gap-3 px-5 py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">{copy.connectorResults}</p>
                  <h2 className="text-xl font-semibold">{copy.summaryPrefix} {connectors.length}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelection(createEmptySelection())}
                  className="pill-button self-start sm:self-auto"
                >
                  {copy.clearFilters}
                </button>
              </div>
              <div className="text-sm text-[color:var(--panel-muted)]">
                {CATEGORY_SEQUENCE.map((axis) => {
                  const values = selection[axis];
                  if (values.length === 0) {
                    return null;
                  }
                  const labels = values.map((value) => {
                    const option = CATEGORY_GROUPS[axis].options.find((item) => item.value === value);
                    return option?.label[settings.locale] ?? value;
                  });
                  return (
                    <span key={axis} className="mr-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] px-3 py-1 text-xs font-medium text-[color:var(--panel-text)]">
                      <span>{CATEGORY_GROUPS[axis].label[settings.locale]}:</span>
                      <span className="opacity-80">{labels.join(', ')}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {loading ? (
              <div className="glass-panel fade-card p-6 text-sm text-[color:var(--panel-muted)]">{copy.loading}</div>
            ) : error ? (
              <div className="glass-panel fade-card p-6 text-sm text-red-700">{error}</div>
            ) : connectors.length === 0 ? (
              <div className="glass-panel fade-card p-6 text-sm text-[color:var(--panel-muted)]">{copy.noMatches}</div>
            ) : settings.viewMode === 'table' ? (
              <div className="glass-panel fade-card overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-[color:var(--panel-border)]">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-[color:var(--panel-text)]">{copy.connectorColumn}</th>
                      <th className="px-4 py-3 text-left font-semibold text-[color:var(--panel-text)]">{copy.functionColumn}</th>
                      <th className="px-4 py-3 text-left font-semibold text-[color:var(--panel-text)]">{copy.grammarColumn}</th>
                      <th className="px-4 py-3 text-left font-semibold text-[color:var(--panel-text)]">{copy.registerColumn}</th>
                      <th className="px-4 py-3 text-left font-semibold text-[color:var(--panel-text)]">{copy.cefrColumn}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {connectors.map((connector) => (
                      <tr key={connector.id} className="border-b border-[color:var(--panel-border)] transition-colors hover:bg-[color:var(--accent-soft)] hover:bg-opacity-20">
                        <td className="px-4 py-3 font-medium text-[color:var(--panel-text)]">{connector.connector}</td>
                        <td className="px-4 py-3 text-[color:var(--panel-muted)]">{connector.categories.function.join(', ')}</td>
                        <td className="px-4 py-3 text-[color:var(--panel-muted)]">{connector.categories.grammar.join(', ')}</td>
                        <td className="px-4 py-3 text-[color:var(--panel-muted)]">{connector.categories.register.join(', ')}</td>
                        <td className="px-4 py-3 text-[color:var(--panel-muted)]">{connector.categories.cefr.join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid gap-4">
                {connectors.map((connector, index) => (
                  <ConnectorCard
                    key={connector.id}
                    connector={connector}
                    locale={settings.locale}
                    motion={settings.motion}
                    index={index}
                  />
                ))}
              </div>
            )}
          </section>
        </main>
      )}
    </div>
  );
}
