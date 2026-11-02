import { guides } from '../scripts/guides.mjs';
const languages = ['en', 'fr', 'es', 'de', 'ja', 'ko', 'zh-cn', 'zh-tw'];
const legacy = new Set(['', '/', '/map', '/photos', '/blog', '/blog/post1', '/blog/post2', '/blog/post3', '/privacy', '/terms', '/cookies']);
const independent = new Set(guides.map(g => g.path));
const notFound = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | Port of Honfleur</title></head><body><main><h1>Page not found / Page introuvable</h1><p><a href="/en">Port of Honfleur</a> · <a href="/fr">Port de Honfleur</a></p></main></body></html>';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (['portofhonfleur.com', 'www.portofhonfleur.com'].includes(url.hostname) && (url.protocol !== 'https:' || url.hostname !== 'www.portofhonfleur.com')) {
      url.protocol = 'https:'; url.hostname = 'www.portofhonfleur.com';
      return Response.redirect(url.toString(), 301);
    }
    if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    const path = url.pathname;
    const normalized = path === '/' ? '/' : path.replace(/\/$/, '');
    const withoutIndex = normalized.replace(/\/index\.html$/, '');
    if (independent.has(withoutIndex) && (path.endsWith('/') || path.endsWith('/index.html'))) {
      url.pathname = withoutIndex;
      return Response.redirect(url.toString(), 301);
    }
    if (normalized === '/que-faire-honfleur' || /^\/(en|es|de|ja|ko|zh-cn|zh-tw)\/que-faire-honfleur$/.test(normalized)) {
      url.pathname = '/fr/que-faire-honfleur';
      return Response.redirect(url.toString(), 301);
    }
    if (independent.has(normalized)) {
      const asset = new URL(url); asset.pathname = normalized + '/index.html';
      const response = await env.ASSETS.fetch(new Request(asset, request));
      // Return canonical URLs without a slash, avoiding static-assets index redirects.
      if (response.status === 200) return response;
      if ([301, 302, 307, 308].includes(response.status)) {
        const directory = new URL(url); directory.pathname = normalized + '/';
        return env.ASSETS.fetch(new Request(directory, request));
      }
      return response;
    }
    const match = normalized.match(/^\/([^/]+)(\/.*)?$/);
    let clean = normalized;
    if (match && languages.includes(match[1])) clean = match[2] || '';
    const isFrenchGuide = normalized === '/fr/que-faire-honfleur';
    if (legacy.has(clean) || isFrenchGuide) {
      const shell = new URL(url); shell.pathname = '/index.html'; shell.search = '';
      return env.ASSETS.fetch(new Request(shell, request));
    }
    // Static assets may be requested directly, but arbitrary paths never receive the SPA shell.
    if (path.startsWith('/assets/') || path.startsWith('/guides/') || ['/robots.txt', '/sitemap.xml', '/ads.txt'].includes(path)) {
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) return response;
    }
    return new Response(request.method === 'HEAD' ? null : notFound, { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' } });
  }
};
