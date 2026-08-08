#!/usr/bin/env node
// Bootstraps the local, git-ignored config files this app needs to run
// (real personal data + real EmailJS credentials) from their tracked
// `.example` templates — but only if the real file doesn't exist yet.
// Never overwrites an existing file, so it's safe to run on every
// `npm start`/`npm run build`/`npm test` (wired via the pre* npm lifecycle
// hooks in package.json).
//
// data/profile.yaml is the canonical file you edit — YAML for
// readability. It can't be imported directly by component code, though:
// Create React App's ModuleScopePlugin blocks imports from outside src/,
// and CRA has no built-in YAML loader anyway. So this script parses it
// and writes the equivalent JSON to src/config/profile.json, which is
// what the app actually imports. That JSON copy is fully derived —
// always overwritten, never edited by hand.
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

function ensure(exampleRelPath, realRelPath) {
  const example = path.join(__dirname, "..", exampleRelPath);
  const real = path.join(__dirname, "..", realRelPath);

  if (fs.existsSync(real)) return;

  fs.copyFileSync(example, real);
  console.log(
    `[ensure-local-config] created ${realRelPath} from ${exampleRelPath} — edit it with your real data`
  );
}

function syncYamlToJson(yamlRelPath, jsonRelPath) {
  const yamlPath = path.join(__dirname, "..", yamlRelPath);
  const jsonPath = path.join(__dirname, "..", jsonRelPath);
  const data = yaml.load(fs.readFileSync(yamlPath, "utf8"));
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + "\n");
}

ensure("data/profile.example.yaml", "data/profile.yaml");
ensure(".env.example", ".env");

// Always re-sync, even when data/profile.yaml already existed — this is how
// edits to the canonical file reach the app.
syncYamlToJson("data/profile.yaml", "src/config/profile.json");
