"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const rootArgument = process.argv.slice(2).find((argument) => !argument.startsWith("--"));
const root = path.resolve(rootArgument || process.cwd());
const readmePath = path.join(root, "README.md");
const startMarker = "<!-- AUTO-SYNC:START -->";
const endMarker = "<!-- AUTO-SYNC:END -->";
const trackedExtensions = new Set([
  ".html", ".js", ".css", ".md", ".json", ".yml", ".yaml",
  ".svg", ".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"
]);

function statePath() {
  const key = crypto.createHash("sha256").update(root.toLowerCase()).digest("hex").slice(0, 16);
  return path.join(os.tmpdir(), "nada-elsebaee-project-sync-" + key + ".json");
}

function collectFiles(directory, relativeDirectory, files) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
    if (entry.name === ".git" || entry.name === ".github" || entry.name === "node_modules") return;
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      collectFiles(absolutePath, relativePath, files);
    } else if (trackedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(relativePath);
    }
  });
}

function createSnapshot() {
  const files = [];
  collectFiles(root, "", files);
  return files.sort().reduce((snapshot, relativePath) => {
    const absolutePath = path.join(root, relativePath);
    let content = fs.readFileSync(absolutePath);
    if (relativePath.split(path.sep).join("/") === "README.md") {
      content = content.toString("utf8");
      content = content.replace(
        new RegExp(escapeRegExp(startMarker) + "[\\s\\S]*?" + escapeRegExp(endMarker)),
        startMarker + "\n<!-- Auto-generated sync details omitted from change detection. -->\n" + endMarker
      );
    }
    snapshot[relativePath.split(path.sep).join("/")] = crypto.createHash("sha256").update(content).digest("hex");
    return snapshot;
  }, {});
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function writeState(snapshot) {
  fs.writeFileSync(statePath(), JSON.stringify(snapshot, null, 2), "utf8");
}

function renderSyncBlock(date, changedFiles) {
  const localTimestamp = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(date);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local timezone";
  const fileList = changedFiles.length
    ? changedFiles.map((file) => "`" + file + "`").join(", ")
    : "Baseline initialized; no source edits recorded yet.";
  return [
    startMarker,
    "- Last sync (local time): `" + localTimestamp + " " + timeZone + "`",
    "- Last sync (UTC): `" + date.toISOString() + "`",
    "- Files detected in the latest sync: " + fileList,
    "- Retention: latest sync only; each update replaces this record instead of accumulating an old log.",
    "- This hook detects changed website source/assets; assistants must still update the project facts and open-item sections when those change.",
    endMarker
  ].join("\n");
}

function updateReadme(date, changedFiles) {
  const readme = fs.readFileSync(readmePath, "utf8");
  const block = renderSyncBlock(date, changedFiles);
  const start = readme.indexOf(startMarker);
  const end = readme.indexOf(endMarker);

  if (start !== -1 && end !== -1 && end > start) {
    const endAfterMarker = end + endMarker.length;
    const updated = readme.slice(0, start) + block + readme.slice(endAfterMarker);
    if (updated !== readme) fs.writeFileSync(readmePath, updated, "utf8");
    return;
  }

  const heading = "## Automatic source-change tracking\n\n";
  const insertion = heading + block + "\n\n";
  const validationHeading = "## Validation workflow";
  const validationIndex = readme.indexOf(validationHeading);
  const updated = validationIndex === -1
    ? readme.trimEnd() + "\n\n" + insertion
    : readme.slice(0, validationIndex) + insertion + readme.slice(validationIndex);
  fs.writeFileSync(readmePath, updated, "utf8");
}

function initialize() {
  if (!fs.existsSync(readmePath)) throw new Error("README.md was not found in " + root);
  writeState(createSnapshot());
  updateReadme(new Date(), []);
  process.stdout.write("Project reference sync initialized.\n");
}

function sync() {
  if (!fs.existsSync(readmePath)) throw new Error("README.md was not found in " + root);
  const current = createSnapshot();
  const savedStatePath = statePath();
  if (!fs.existsSync(savedStatePath)) {
    writeState(current);
    updateReadme(new Date(), []);
    process.stderr.write("Project reference sync initialized; future source edits will be recorded.\n");
    return;
  }

  const previous = JSON.parse(fs.readFileSync(savedStatePath, "utf8"));
  const changedFiles = Array.from(new Set([
    ...Object.keys(previous),
    ...Object.keys(current)
  ])).filter((file) => previous[file] !== current[file]).sort();

  if (changedFiles.length === 0) return;
  const timestamp = new Date();
  writeState(current);
  updateReadme(timestamp, changedFiles);
  process.stderr.write("Project reference synced: " + changedFiles.join(", ") + "\n");
}

try {
  if (process.argv.includes("--initialize")) {
    initialize();
  } else if (process.argv.includes("--sync")) {
    sync();
  } else {
    process.stdin.resume();
    process.stdin.on("end", () => {
      try {
        sync();
        process.stdout.write("{}\n");
      } catch (error) {
        process.stderr.write("Project reference sync failed: " + error.message + "\n");
        process.stdout.write(JSON.stringify({ systemMessage: "Project reference sync failed: " + error.message }) + "\n");
        process.exitCode = 1;
      }
    });
  }
} catch (error) {
  process.stderr.write("Project reference sync failed: " + error.message + "\n");
  process.exitCode = 1;
}
