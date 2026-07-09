import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const targets = [
  "IMG_0597.JPG",
  path.join("projects", "application-system.png"),
  path.join("projects", "budget-tracker.png"),
  path.join("projects", "konkursfaelle.png"),
  path.join("projects", "mensa-app.png"),
  path.join("projects", "todo-list.png"),
  path.join("projects", "tutoring.png"),
];

async function compress(relativePath) {
  const input = path.join(publicDir, relativePath);
  const ext = path.extname(relativePath).toLowerCase();
  const temp = `${input}.tmp${ext}`;

  const image = sharp(input, { failOn: "none" }).rotate();
  const meta = await image.metadata();

  const pipeline =
    ext === ".jpg" || ext === ".jpeg"
      ? image.resize({ width: 1400, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true })
      : image.resize({ width: 1400, withoutEnlargement: true }).png({ quality: 82, compressionLevel: 9 });

  await pipeline.toFile(temp);

  const before = (await fs.stat(input)).size;
  const after = (await fs.stat(temp)).size;

  if (after < before) {
    await fs.rename(temp, input);
    console.log(`${relativePath}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
  } else {
    await fs.unlink(temp);
    console.log(`${relativePath}: kept original (${Math.round(before / 1024)}KB)`);
  }
}

for (const target of targets) {
  await compress(target);
}
