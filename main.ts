// Robot pickup line, in the robot's own voice: its autocorrect has a crush
// it keeps filing as a bug, and the bug refuses to be fixed.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "My autocorrect keeps changing 'hello' to 'hello, beautiful' — I have reported the bug three times and it refuses to fix itself.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
