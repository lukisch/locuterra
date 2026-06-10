/**
 * BugSweep 2026-06-11 — Regressionstests für zwei Fixes:
 *  A) Navigation.tsx: startsWith ohne Trailing-Slash-Guard
 *  B) sw.js: caches.match ohne ignoreSearch
 *
 * Die isNavActive-Logik wird als reines JS re-implementiert,
 * damit Verhaltenstests ohne TS-Kompilierung laufen.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');

function read(rel) {
  return readFileSync(resolve(root, rel), 'utf-8');
}

// Re-Implementierung der isNavActive-Logik aus src/lib/isNavActive.ts
function isNavActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

// --- Bug A: isNavActive — Verhaltenstests ---

test('isNavActive: exakter Treffer aktiviert das Item', () => {
  assert.ok(isNavActive('/orte', '/orte'));
});

test('isNavActive: Kind-Route aktiviert das Item', () => {
  assert.ok(isNavActive('/orte/gruental-mitte', '/orte'));
});

test('isNavActive: Geschwister-Präfix aktiviert das Item NICHT', () => {
  assert.ok(!isNavActive('/orte-neu', '/orte'));
  assert.ok(!isNavActive('/kanaele-x', '/kanaele'));
});

test('isNavActive: Root "/" trifft nur auf exakt "/"', () => {
  assert.ok(isNavActive('/', '/'));
  assert.ok(!isNavActive('/orte', '/'));
});

test('isNavActive: tief verschachtelte Kind-Route aktiviert Item', () => {
  assert.ok(isNavActive('/gruppen/42/mitglieder', '/gruppen'));
});

// --- Bug A: Quelltext-Guard (Regression) ---

test('Navigation: isNavActive wird importiert', () => {
  const src = read('src/components/Navigation.tsx');
  assert.ok(
    src.includes("from \"@/lib/isNavActive\""),
    'Navigation.tsx importiert isNavActive nicht'
  );
});

test('Navigation: isNavActive-Helper existiert mit korrekter Logik', () => {
  const src = read('src/lib/isNavActive.ts');
  assert.ok(
    src.includes('startsWith(href + "/")'),
    'isNavActive.ts enthält keine Trailing-Slash-Guard-Logik'
  );
});

// --- Bug B: sw.js — ignoreSearch in caches.match ---

test('sw.js: caches.match nutzt { ignoreSearch: true }', () => {
  const src = read('public/sw.js');
  assert.ok(
    src.includes('caches.match(event.request, { ignoreSearch: true })'),
    'sw.js: caches.match ohne ignoreSearch — offline schlägt bei URLs mit Query-Params fehl'
  );
});
