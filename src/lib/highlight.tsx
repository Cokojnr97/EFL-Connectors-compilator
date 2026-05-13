import type { ReactNode } from 'react';
import type { ExampleHighlight } from '../../data/types.js';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const HIGHLIGHT_CLASS: Record<ExampleHighlight['tone'], string> = {
  connector: 'highlight-connector',
  punctuation: 'highlight-punctuation',
  support: 'highlight-support',
};

export function renderHighlightedText(text: string, highlights: ExampleHighlight[]): ReactNode[] {
  if (highlights.length === 0) {
    return [text];
  }

  const uniqueTerms = Array.from(new Set(highlights.map((highlight) => highlight.term))).sort((left, right) => right.length - left.length);
  const pattern = new RegExp(`(${uniqueTerms.map(escapeRegExp).join('|')})`, 'gi');
  const toneByTerm = new Map(highlights.map((highlight) => [highlight.term.toLowerCase(), highlight.tone]));

  return text.split(pattern).filter(Boolean).map((segment, index) => {
    const tone = toneByTerm.get(segment.toLowerCase());
    if (!tone) {
      return <span key={`${segment}-${index}`}>{segment}</span>;
    }

    return (
      <span key={`${segment}-${index}`} className={HIGHLIGHT_CLASS[tone]}>
        {segment}
      </span>
    );
  });
}
