#!/usr/bin/env node
// Bootstraps the local, git-ignored config files this app needs to run
// (real personal data + real EmailJS credentials) from their tracked
// `.example` templates — but only if the real file doesn't exist yet.
// Never overwrites an existing file, so it's safe to run on every
// `npm start`/`npm run build`/`npm test` (wired via the pre* npm lifecycle
// hooks in package.json).
//
// data/profile.json is the canonical file you edit. It can't be imported
// directly by component code, though — Create React App's ModuleScopePlugin
// blocks imports from outside src/. So this script also syncs it into
// src/config/profile.json, which is what the app actually imports. That
// synced copy is fully derived — always overwritten, never edited by hand.
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

function sync(sourceRelPath, destRelPath) {
  const source = path.join(__dirname, "..", sourceRelPath);
  const dest = path.join(__dirname, "..", destRelPath);
  fs.copyFileSync(source, dest);
}

ensure("data/profile.example.json", "data/profile.json");
ensure(".env.example", ".env");

// Always re-sync, even when data/profile.json already existed — this is how
// edits to the canonical file reach the app.
sync("data/profile.json", "src/config/profile.json");
