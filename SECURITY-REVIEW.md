# Pre-deployment review — October 7, 2026

Scope: Desktop/nicolas-portfolio, its working files, one reachable local Git commit, public assets, browser-facing source, and installed dependency audit. This is a targeted review, not a guarantee that every possible secret or vulnerability is absent. The linked project repositories and hosting-account settings were not audited.

## Findings

- No likely provider tokens, credential assignments, or private-key blocks were detected by the targeted text scan. No environment files, private-key files, or local databases were found in the application directory outside dependency/build folders. No matches were found in the local commit scan.
- The application is a presentation site with client-side project filtering. No application API handlers, authentication, database access, secret environment-variable usage, or raw-HTML injection were found in the reviewed source.
- `public/resume.pdf` contains the owner's email and phone number. It is deliberately linked by the website and will be public. Its metadata includes the author's name and PDF creation software, but no local file paths or embedded attachments were found. Keep only information intended for public distribution in this résumé.
- `public/f18.jpg` is no longer displayed by the homepage, but remains directly downloadable at `/f18.jpg` when deployed. No EXIF, IPTC, or XMP metadata blocks were found. The SVG blueprint and fonts are also intended public assets.
- Dependency audit reports five high-severity package entries arising from a single transitive `braces` denial-of-service advisory in the ESLint development toolchain. Advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. No patched version is listed. The suggested automatic fix downgrades eslint-config-next from Next 16 to Next 14, so it was not applied. This finding is not evidence of credential theft, and no application input is passed to the affected tooling in this site.

## Ignore-file changes

The .gitignore now excludes environment files, common private-key formats, credential directories, local package-manager credentials, databases, backups, editor metadata, dependency folders, build output, logs, deployment-account metadata, and browser-test artifacts. Sanitized .env.example/.env.sample templates remain allowed. Source, package-lock.json, font licenses, and intended public assets remain eligible for version control.

## Deployment boundaries

- `.gitignore` prevents accidental Git additions; it does not encrypt files, remove tracked files/history, or reliably exclude files from an arbitrary deployment upload.
- Never store secrets under `public/`, even if ignored. Next.js serves that directory directly. Never put credentials in client components, source literals, or `NEXT_PUBLIC_` variables.
- This portfolio currently requires no API keys or environment secrets. References to Claude, OpenAI, TwelveData, and other services are descriptions of separate projects, not API integrations in this portfolio.
- Publish a production build through the hosting provider, not a publicly exposed `next dev` process. Keep remote development access limited to trusted devices.
- Before committing, inspect `git diff --cached` and `git status --short`. If a real credential is ever committed, revoke/rotate it; adding it to .gitignore later is insufficient.
