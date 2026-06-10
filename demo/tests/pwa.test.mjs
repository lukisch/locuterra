import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');

function read(rel) {
  return readFileSync(resolve(root, rel), 'utf-8');
}
function exists(rel) {
  return existsSync(resolve(root, rel));
}
function readJSON(rel) {
  return JSON.parse(read(rel));
}

// --- manifest.webmanifest ---

test('manifest ist valides JSON', () => {
  assert.doesNotThrow(() => readJSON('public/manifest.webmanifest'));
});

test('manifest enthält name', () => {
  assert.ok(readJSON('public/manifest.webmanifest').name);
});

test('manifest enthält short_name ≤ 12 Zeichen', () => {
  const m = readJSON('public/manifest.webmanifest');
  assert.ok(m.short_name);
  assert.ok(m.short_name.length <= 12, `short_name "${m.short_name}" ist länger als 12 Zeichen`);
});

test('manifest hat display: standalone', () => {
  assert.equal(readJSON('public/manifest.webmanifest').display, 'standalone');
});

test('manifest hat start_url mit /locuterra/', () => {
  const su = readJSON('public/manifest.webmanifest').start_url;
  assert.ok(su && su.startsWith('/locuterra'), `start_url "${su}" enthält kein /locuterra/`);
});

test('manifest hat 192px icon (any)', () => {
  const icons = readJSON('public/manifest.webmanifest').icons;
  const icon = icons.find((i) => i.sizes === '192x192' && i.purpose === 'any');
  assert.ok(icon, 'Kein 192px any-Icon gefunden');
});

test('manifest hat 512px icon (any)', () => {
  const icons = readJSON('public/manifest.webmanifest').icons;
  const icon = icons.find((i) => i.sizes === '512x512' && i.purpose === 'any');
  assert.ok(icon, 'Kein 512px any-Icon gefunden');
});

test('manifest hat maskable icon', () => {
  const icons = readJSON('public/manifest.webmanifest').icons;
  const icon = icons.find((i) => i.purpose === 'maskable');
  assert.ok(icon, 'Kein maskable-Icon gefunden');
});

test('manifest hat theme_color', () => {
  assert.ok(readJSON('public/manifest.webmanifest').theme_color);
});

// --- Icon-Dateien ---

test('Icon-192.png existiert', () => {
  assert.ok(exists('public/icons/Icon-192.png'), 'public/icons/Icon-192.png fehlt');
});

test('Icon-512.png existiert', () => {
  assert.ok(exists('public/icons/Icon-512.png'), 'public/icons/Icon-512.png fehlt');
});

test('Icon-maskable-192.png existiert', () => {
  assert.ok(exists('public/icons/Icon-maskable-192.png'), 'public/icons/Icon-maskable-192.png fehlt');
});

test('Icon-maskable-512.png existiert', () => {
  assert.ok(exists('public/icons/Icon-maskable-512.png'), 'public/icons/Icon-maskable-512.png fehlt');
});

// --- Service Worker ---

test('sw.js existiert', () => {
  assert.ok(exists('public/sw.js'), 'public/sw.js fehlt');
});

test('sw.js enthält skipWaiting', () => {
  assert.ok(read('public/sw.js').includes('skipWaiting'), 'sw.js: skipWaiting fehlt');
});

test('sw.js enthält clients.claim', () => {
  assert.ok(read('public/sw.js').includes('clients.claim'), 'sw.js: clients.claim fehlt');
});

test('sw.js enthält CACHE_NAME', () => {
  assert.ok(read('public/sw.js').includes('CACHE_NAME'), 'sw.js: CACHE_NAME fehlt');
});

test('sw.js enthält locuterra scope', () => {
  assert.ok(read('public/sw.js').includes('/locuterra'), 'sw.js: /locuterra-Scope fehlt');
});

// --- layout.tsx ---

test('layout.tsx enthält manifest-Verweis', () => {
  assert.ok(
    read('src/app/layout.tsx').includes('manifest.webmanifest'),
    'layout.tsx: manifest-Link fehlt'
  );
});

test('layout.tsx enthält Viewport-Export mit themeColor', () => {
  const content = read('src/app/layout.tsx');
  assert.ok(content.includes('Viewport'), 'layout.tsx: Viewport-Import fehlt');
  assert.ok(content.includes('themeColor'), 'layout.tsx: themeColor fehlt');
});

test('layout.tsx importiert SwRegister', () => {
  assert.ok(
    read('src/app/layout.tsx').includes('SwRegister'),
    'layout.tsx: SwRegister-Import fehlt'
  );
});

// --- SwRegister.tsx ---

test('SwRegister.tsx existiert', () => {
  assert.ok(exists('src/components/SwRegister.tsx'), 'src/components/SwRegister.tsx fehlt');
});

test('SwRegister.tsx ist use client', () => {
  assert.ok(
    read('src/components/SwRegister.tsx').includes("'use client'"),
    'SwRegister.tsx: use client fehlt'
  );
});

test('SwRegister.tsx registriert /locuterra/sw.js', () => {
  assert.ok(
    read('src/components/SwRegister.tsx').includes('/locuterra/sw.js'),
    'SwRegister.tsx: /locuterra/sw.js-Pfad fehlt'
  );
});

// --- PWA_POLICY.md ---

const pwaPolicy = resolve(root, '..', 'PWA_POLICY.md');

test('PWA_POLICY.md existiert', () => {
  assert.ok(existsSync(pwaPolicy), 'PWA_POLICY.md fehlt im Projektordner');
});

test('PWA_POLICY.md enthält Abschnitt Web Push', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Web Push') || c.includes('Push-Benachrichtigung'),
    'Kein Web-Push-Abschnitt in PWA_POLICY.md');
});

test('PWA_POLICY.md enthält Abschnitt Offline', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Offline'), 'Kein Offline-Abschnitt in PWA_POLICY.md');
});

test('PWA_POLICY.md enthält Abschnitt Standort', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Standort') || c.includes('Geolocation'),
    'Kein Standort-Abschnitt in PWA_POLICY.md');
});

test('PWA_POLICY.md enthält Abschnitt Consent/Einwilligung', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Consent') || c.includes('Einwilligung'),
    'Kein Consent-Abschnitt in PWA_POLICY.md');
});

// --- SCREENMAP.md ---

const screenmap = resolve(root, '..', 'SCREENMAP.md');

test('SCREENMAP.md existiert', () => {
  assert.ok(existsSync(screenmap), 'SCREENMAP.md fehlt im Projektordner');
});

test('SCREENMAP.md enthält alle 5 Hauptrouten', () => {
  const c = readFileSync(screenmap, 'utf-8');
  for (const route of ['/orte', '/gruppen', '/ressourcen', '/kanaele', '/nachrichten']) {
    assert.ok(c.includes(route), `SCREENMAP.md: Route "${route}" fehlt`);
  }
});

test('SCREENMAP.md erwähnt Mobile-Navigation', () => {
  const c = readFileSync(screenmap, 'utf-8');
  assert.ok(c.includes('Navigation') || c.includes('Bottom-Bar') || c.includes('nav'),
    'SCREENMAP.md: Kein Abschnitt zur mobilen Navigation');
});

// --- kanaele/[id] Route ---

test('kanaele/[id]/page.tsx existiert', () => {
  assert.ok(
    exists('src/app/kanaele/[id]/page.tsx'),
    'demo/src/app/kanaele/[id]/page.tsx fehlt'
  );
});

test('kanaele/[id]/page.tsx enthält generateStaticParams', () => {
  assert.ok(
    read('src/app/kanaele/[id]/page.tsx').includes('generateStaticParams'),
    'kanaele/[id]/page.tsx: generateStaticParams fehlt'
  );
});

test('kanaele/[id]/page.tsx enthält getChannel', () => {
  assert.ok(
    read('src/app/kanaele/[id]/page.tsx').includes('getChannel'),
    'kanaele/[id]/page.tsx: getChannel-Import fehlt'
  );
});
