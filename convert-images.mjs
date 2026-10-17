
import sharp from 'sharp'
import { readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const MAX_WIDTH = 256

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)

    if (statSync(p).isDirectory()) {
      walk(p)
    } else if (/\.(png|jpe?g)$/i.test(p)) {
      const out = p.replace(/\.(png|jpe?g)$/i, '.webp')

      if (existsSync(out)) continue

      sharp(p)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(out)
        .then(() => console.log('OK', p))
        .catch(err => console.error('ERREUR', p, err))
    }
  }
}
// Change path if needed
walk('public/images')

// "node convert-images.mjs" command to run the script.