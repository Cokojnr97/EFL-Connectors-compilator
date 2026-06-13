import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createServer as createViteServer } from 'vite';
import { CATEGORY_SEQUENCE, FUNCTION_SUBCATEGORY_SEQUENCE } from '../data/categories.js';
import { CONNECTORS } from '../data/connectors.js';
import type { Axis, CategorySelection } from '../data/types.js';

const PORT = Number(process.env['PORT'] ?? 3000);
const isProduction = process.env['NODE_ENV'] === 'production';

const app = express();

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
    opinion: [],
    sequence: [],
    comparison: [],
    summary: [],
    place: [],
  };
}

const FILTER_SEQUENCE = [...CATEGORY_SEQUENCE, ...FUNCTION_SUBCATEGORY_SEQUENCE];

function axisMatchesSelection(axis: keyof CategorySelection, selected: string[], categories: CategorySelection) {
  if (selected.length === 0) {
    return true;
  }

  const actual = categories[axis];

  if (axis === 'function') {
    return selected.some((value) => {
      if (CATEGORY_SEQUENCE.includes(axis) && actual.includes(value)) {
        return true;
      }

      if (FUNCTION_SUBCATEGORY_SEQUENCE.includes(value as keyof CategorySelection)) {
        return categories[value as keyof CategorySelection].length > 0;
      }

      return actual.includes(value);
    });
  }

  if (FUNCTION_SUBCATEGORY_SEQUENCE.includes(axis)) {
    return selected.some((value) => value === axis || actual.includes(value));
  }

  return selected.some((value) => actual.includes(value));
}

function parseSelection(raw: unknown): Partial<CategorySelection> {
  if (Array.isArray(raw)) {
    return raw.reduce<Partial<CategorySelection>>((selection, token) => mergeToken(selection, String(token)), {});
  }

  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    if (!trimmed) {
      return {};
    }

    try {
      const parsed = JSON.parse(trimmed) as unknown;
      if (Array.isArray(parsed)) {
        return parsed.reduce<Partial<CategorySelection>>((selection, token) => mergeToken(selection, String(token)), {});
      }
      if (parsed && typeof parsed === 'object') {
        return normalizeSelectionObject(parsed as Record<string, unknown>);
      }
    } catch {
      return parseLegacyTokenList(trimmed);
    }
  }

  if (raw && typeof raw === 'object') {
    return normalizeSelectionObject(raw as Record<string, unknown>);
  }

  return {};
}

function parseLegacyTokenList(raw: string): Partial<CategorySelection> {
  return raw
    .split(',')
    .map((token) => token.trim())
    .filter(Boolean)
    .reduce<Partial<CategorySelection>>((selection, token) => mergeToken(selection, token), {});
}

function normalizeSelectionObject(raw: Record<string, unknown>): Partial<CategorySelection> {
  const selection: Partial<CategorySelection> = {};

  for (const axis of FILTER_SEQUENCE) {
    const value = raw[axis];
    const values = normalizeValue(value);
    if (values.length > 0) {
      selection[axis] = values;
    }
  }

  return selection;
}

function normalizeValue(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((entry) => normalizeValue(entry));
  }

  if (typeof value === 'string') {
    return value
      .split('|')
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  return [];
}

function mergeToken(selection: Partial<CategorySelection>, token: string): Partial<CategorySelection> {
  const [axisPart, valuesPart] = token.split(':');
  if (!axisPart || !valuesPart) {
    return selection;
  }

  const axis = axisPart as Axis;
  if (!FILTER_SEQUENCE.includes(axis)) {
    return selection;
  }

  const values = valuesPart
    .split('|')
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (values.length === 0) {
    return selection;
  }

  const existing = selection[axis] ?? [];
  selection[axis] = Array.from(new Set([...existing, ...values]));
  return selection;
}

function matchesSelection(selection: Partial<CategorySelection>, categories: CategorySelection): boolean {
  return FILTER_SEQUENCE.every((axis) => {
    const expected = selection[axis];
    return axisMatchesSelection(axis, expected ?? [], categories);
  });
}

app.get('/connectors', (req, res) => {
  const selection = parseSelection(req.query['categories']);
  const connectors = CONNECTORS.filter((connector) => matchesSelection(selection, connector.categories));

  res.json({
    total: connectors.length,
    filters: selection,
    connectors,
  });
});

async function start() {
  if (isProduction) {
    const clientDir = path.resolve(process.cwd(), 'dist/client');
    app.use(express.static(clientDir));
    app.use((_request, response) => {
      response.sendFile(path.join(clientDir, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      appType: 'custom',
      server: { middlewareMode: true },
    });

    app.use(vite.middlewares);

    app.use(async (request, response, next) => {
      if (request.originalUrl.startsWith('/connectors')) {
        next();
        return;
      }

      try {
        const template = await fs.readFile(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        const html = await vite.transformIndexHtml(request.originalUrl, template);
        response.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (error) {
        next(error as Error);
      }
    });
  }

  app.listen(PORT, () => {
    // Intentionally concise: the browser will show the actual app URL.
    console.log(`English Connectors server running on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
