import type { Locale } from '../../data/types.js';
import { SELECT_OPTIONS, UI_COPY } from '../lib/i18n';

interface Settings {
  theme: 'light' | 'dark';
  tone: 'rose' | 'peach' | 'cocoa';
  fontSize: '100%' | '112.5%' | '125%';
  motion: 'normal' | 'reduced';
  locale: Locale;
}

interface MenuPanelProps {
  settings: Settings;
  locale: Locale;
  onChange: (next: Settings) => void;
}

export default function MenuPanel({ settings, locale, onChange }: MenuPanelProps) {
  const copy = UI_COPY[locale];

  return (
    <section className="grid gap-3 rounded-[24px] border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] p-4 backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-5">
      <label className="menu-field">
        <span>{copy.theme}</span>
        <select value={settings.theme} onChange={(event) => onChange({ ...settings, theme: event.target.value as Settings['theme'] })}>
          {SELECT_OPTIONS.theme.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[locale]}
            </option>
          ))}
        </select>
      </label>

      <label className="menu-field">
        <span>{copy.tone}</span>
        <select value={settings.tone} onChange={(event) => onChange({ ...settings, tone: event.target.value as Settings['tone'] })}>
          {SELECT_OPTIONS.tone.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[locale]}
            </option>
          ))}
        </select>
      </label>

      <label className="menu-field">
        <span>{copy.fontSize}</span>
        <select value={settings.fontSize} onChange={(event) => onChange({ ...settings, fontSize: event.target.value as Settings['fontSize'] })}>
          {SELECT_OPTIONS.fontSize.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[locale]}
            </option>
          ))}
        </select>
      </label>

      <label className="menu-field">
        <span>{copy.motion}</span>
        <select value={settings.motion} onChange={(event) => onChange({ ...settings, motion: event.target.value as Settings['motion'] })}>
          {SELECT_OPTIONS.motion.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[locale]}
            </option>
          ))}
        </select>
      </label>

      <label className="menu-field">
        <span>{copy.language}</span>
        <select value={settings.locale} onChange={(event) => onChange({ ...settings, locale: event.target.value as Locale })}>
          {SELECT_OPTIONS.locale.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label[locale]}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
