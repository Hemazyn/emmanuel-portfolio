/**
 * Generates src/app/favicon.ico — a real ICO with embedded PNG entries
 * (16x16 and 32x32) matching the ImageResponse-generated icon design.
 *
 * Run with: node scripts/generate-favicon.mjs
 * Requires no dependencies (uses node:zlib only).
 */
import { deflateSync } from "node:zlib"
import { writeFileSync, mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

// --- PNG encoding ---------------------------------------------------------

const CRC_TABLE = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  return table
})()

function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, "ascii")
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type: RGBA
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0 // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw)), chunk("IEND", Buffer.alloc(0))])
}

// --- Drawing ---------------------------------------------------------------

function inRoundedRect(x, y, minX, minY, maxX, maxY, r) {
  if (x < minX || x > maxX || y < minY || y > maxY) return false
  const cx = Math.max(minX + r, Math.min(x, maxX - r))
  const cy = Math.max(minY + r, Math.min(y, maxY - r))
  const dx = x - cx
  const dy = y - cy
  return dx * dx + dy * dy <= r * r
}

function drawIcon(size) {
  const px = Buffer.alloc(size * size * 4)
  const margin = Math.max(1, Math.round(size * 0.08))
  const radius = Math.max(1, Math.round(size * 0.24))
  const minX = margin
  const minY = margin
  const maxX = size - 1 - margin
  const maxY = size - 1 - margin

  // Emerald gradient: #059669 (top) → #10b981 (bottom)
  const cTop = [0x05, 0x96, 0x69]
  const cBottom = [0x10, 0xb9, 0x81]

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4
      let r = 0
      let g = 0
      let b = 0
      let a = 0

      if (inRoundedRect(x, y, minX, minY, maxX, maxY, radius)) {
        const t = (y - minY) / Math.max(1, maxY - minY)
        r = Math.round(cTop[0] + (cBottom[0] - cTop[0]) * t)
        g = Math.round(cTop[1] + (cBottom[1] - cTop[1]) * t)
        b = Math.round(cTop[2] + (cBottom[2] - cTop[2]) * t)
        a = 255

        // White "E" monogram built from bars
        const s = size
        const stemX1 = s * 0.3
        const stemX2 = s * 0.4
        const barX2 = s * 0.72
        const barY1 = s * 0.24
        const barY2 = s * 0.34
        const midY1 = s * 0.46
        const midY2 = s * 0.54
        const botY1 = s * 0.66
        const botY2 = s * 0.76

        const inStem = x >= stemX1 && x <= stemX2 && y >= barY1 && y <= botY2
        const inTop = y >= barY1 && y <= barY2 && x >= stemX1 && x <= barX2
        const inMid = y >= midY1 && y <= midY2 && x >= stemX1 && x <= barX2
        const inBot = y >= botY1 && y <= botY2 && x >= stemX1 && x <= barX2

        if (inStem || inTop || inMid || inBot) {
          r = 255
          g = 255
          b = 255
        }
      }

      px[i] = r
      px[i + 1] = g
      px[i + 2] = b
      px[i + 3] = a
    }
  }

  return encodePNG(size, size, px)
}

// --- ICO assembly -----------------------------------------------------------

function encodeICO(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)

  const entries = []
  let offset = 6 + images.length * 16
  for (const img of images) {
    const e = Buffer.alloc(16)
    e[0] = img.width === 256 ? 0 : img.width
    e[1] = img.height === 256 ? 0 : img.height
    e[2] = 0 // color count
    e[3] = 0 // reserved
    e.writeUInt16LE(1, 4) // planes
    e.writeUInt16LE(32, 6) // bits per pixel
    e.writeUInt32LE(img.png.length, 8)
    e.writeUInt32LE(offset, 12)
    offset += img.png.length
    entries.push(e)
  }

  return Buffer.concat([header, ...entries, ...images.map((img) => img.png)])
}

// --- Main --------------------------------------------------------------------

const here = dirname(fileURLToPath(import.meta.url))
const outDir = join(here, "..", "src", "app")
mkdirSync(outDir, { recursive: true })

const images = [16, 32].map((size) => ({ width: size, height: size, png: drawIcon(size) }))
const ico = encodeICO(images)
const outPath = join(outDir, "favicon.ico")
writeFileSync(outPath, ico)

console.log(`Generated ${outPath} (${ico.length} bytes, ${images.length} sizes)`)
