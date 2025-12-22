Deployment

Default deploy command
- Run from project root: `npm run deploy`

What it does
- Builds the Astro site via `npm --prefix astro run build`
- Strips NUL bytes with `node scripts/strip-nulls.mjs`
- Uploads via FTP with `node scripts/deploy-ftp.mjs`

Configuration
- Uses `.env.deploy` for FTP settings (for example `FTP_DEST`)
- To change host/credentials/path, edit `.env.deploy` then rerun `npm run deploy`

Auto deploy on save (watch mode)
- Run from project root: `npm run deploy:watch`
- Watches `astro/src`, `astro/public`, `.env.deploy`, and key Astro config files
- On any change, it waits ~1.5s (debounce) then runs full deploy
- Stop with `Ctrl+C`
