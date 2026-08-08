#!/usr/bin/env node
// Bootstraps the local, git-ignored config files this app needs to run
// (real personal data + real EmailJS credentials) from their tracked
// `.example` templates — but only if the real file doesn't exist yet.
// Never overwrites an existing file, so it's safe to run on every
// `npm start`/`npm run build`/`npm test` (wired via the pre* npm lifecycle
// hooks in package.json).
const fs = require("fs");
const path = require("path");

function ensure(exampleRelPath, realRelPath) {
  const example = path.join(__dirname, "..", exampleRelPath);
  const real = path.join(__dirname, "..", realRelPath);

  if (fs.existsSync(real)) return;

  fs.copyFileSync(example, real);
  console.log(
    `[ensure-local-config] created ${realRelPath} from ${exampleRelPath} — edit it with your real data`
  );
}

ensure("src/config/profile.example.json", "src/config/profile.json");
ensure(".env.example", ".env");
