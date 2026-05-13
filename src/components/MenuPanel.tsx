import { useState } from 'react';
import type { Locale } from '../../data/types.js';
import { SELECT_OPTIONS, UI_COPY } from '../lib/i18n';

interface Settings {
  theme: 'light' | 'dark';
  tone: 'rose' | 'peach' | 'cocoa';
  fontSize: '100%' | '112.5%' | '125%';
  motion: 'normal' | 'reduced';
  locale: Locale;
  viewMode: 'cascade' | 'table';
}

interface MenuPanelProps {
  settings: Settings;
  locale: Locale;
  onChange: (next: Settings) => void;
}

export default function MenuPanel({ settings, locale, onChange }: MenuPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const copy = UI_COPY[locale];

  return (
    <section className="rounded-[24px] border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 sm:px-5 sm:py-4 text-left font-semibold hover:bg-[color:var(--panel-strong)] hover:bg-opacity-50 rounded-[24px] transition-colors flex items-center justify-between"
      >
        <span>{copy.settings}</span>
        <span className={`text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="grid gap-3 border-t border-[color:var(--panel-border)] p-4 sm:grid-cols-2 sm:p-5">
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

          <label className="menu-field">
            <span>{copy.viewMode}</span>
            <select value={settings.viewMode} onChange={(event) => onChange({ ...settings, viewMode: event.target.value as Settings['viewMode'] })}>
              {SELECT_OPTIONS.viewMode.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[locale]}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </section>
  );
}
