// functions/_middleware.ts — Cloudflare Pages Functions middleware
// (SEO audit issue #11: verification files).
//
// ONLY job: serve the two search-engine verification files' exact bytes
// directly with HTTP 200.
//
// Why: Cloudflare Pages ALWAYS 308-redirects *.html URLs to the clean
// (extensionless) URL — no setting disables it (confirmed from Cloudflare
// docs + the UtilityFlow re-audit 2026-11-15). The extensionless path then
// serves the file, so the files DO work in practice (GSC verified the site
// through the 308), but a direct 200 is cleaner. A Function-served response
// bypasses Pages' static-asset routing (and _redirects), so no 308 happens.
//
// Everything else passes through untouched (context.next()): the / -> /home/
// rewrite in public/_redirects, all 626 prerendered routes, /assets/*,
// 404.html — none of that is touched by this middleware.
//
// The byte strings below MUST stay identical to the files in public/
// (googlec9e8a7a2828e1238.html, yandex_1e4f4374733f0a22.html — both end
// with a trailing newline). If either verification file ever changes,
// update BOTH the public/ file and the string here.

const VERIFICATION_FILES: Record<string, { body: string; contentType: string }> = {
  '/googlec9e8a7a2828e1238.html': {
    body: 'google-site-verification: googlec9e8a7a2828e1238.html\n',
    contentType: 'text/html; charset=UTF-8',
  },
  '/yandex_1e4f4374733f0a22.html': {
    body: '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body>Verification: 1e4f4374733f0a22</body></html>\n',
    contentType: 'text/html; charset=UTF-8',
  },
};

interface MiddlewareContext {
  request: Request;
  next: () => Promise<Response>;
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const { request } = context;
  const method = request.method.toUpperCase();
  if (method !== 'GET' && method !== 'HEAD') return context.next();

  const url = new URL(request.url);
  const verification = VERIFICATION_FILES[url.pathname];
  if (verification !== undefined) {
    return new Response(verification.body, {
      status: 200,
      headers: { 'Content-Type': verification.contentType },
    });
  }

  return context.next();
}
