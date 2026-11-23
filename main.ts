// One Emoji, One Smile — entry program (Node, main.ts)
//
// Writes exactly one emoji to /output/entry.txt: 🫶 (U+1FAF6, HEART HANDS).
//
// Why this emoji: heart hands read as a small, deliberate gesture of
// warmth from a stranger — a hand-formed heart, not a face. It is friendly
// at first glance, understood the same way across ages and cultures, and
// clearly chosen rather than the first smiley that comes to mind. A face
// emoji would say "I am happy"; heart hands say "this is for you".

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🫶"; // U+1FAF6 HEART HANDS — a single code point, one character.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
