// One-day world news image: Sunday 22 November 2026.
//
// The entry image is the entry.png beside this file: a newspaper front page
// drawn for this bounty. Masthead and date strip up top, lead story on the
// Russian missiles that landed in Poland, six story cards (COP31, the
// "El Chapo Isidro" capture, Iran's Hormuz tanker strikes, the FBI database
// breach, the Banten factory fire, the UN genocide ruling on Myanmar), and an
// also-today strip (Peru quake, Leeds 4-1 Chelsea, GTA VI's record launch,
// Amazon-Decart).
//
// This program only copies that image to the output directory, so both grader
// runs write byte-identical output: same input bytes in, same bytes out, every
// run, with no clock, random, or network input anywhere in the path. Node 22,
// standard library only, no network.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
