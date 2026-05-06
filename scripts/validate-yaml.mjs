import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const roots = ["templates", "evals"];
const files = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    if (entry.isFile() && path.endsWith(".yaml")) files.push(path);
  }
}

for (const root of roots) walk(root);

for (const file of files) {
  const text = readFileSync(file, "utf8");
  if (!text.includes(":")) {
    throw new Error(`YAML-like file has no key/value content: ${file}`);
  }
  console.log(`checked yaml-like file: ${file}`);
}

