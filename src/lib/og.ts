import { readFileSync } from "node:fs"

/**
 * Shared helper for loading the Inter font for ImageResponse-generated
 * images (opengraph-image, icon, apple-icon).
 *
 * The fonts are TTF files checked into src/assets/fonts — satori's bundled
 * OpenType parser does not support woff2, so fonts must be TTF/OTF.
 */

export interface OgFont {
  name: string
  data: ArrayBuffer
  weight: 400 | 500 | 700 | 800
  style: "normal"
}

// Static `new URL` literals — the bundler can trace these and rewrite them to
// the emitted asset paths at build time. Dynamic paths cannot be traced and
// would silently fall back to the default font in production builds.
const FONT_BOLD_URL = new URL("../assets/fonts/Inter-700.ttf", import.meta.url)
const FONT_REGULAR_URL = new URL("../assets/fonts/Inter-400.ttf", import.meta.url)

function loadLocalFont(url: URL, weight: OgFont["weight"]): OgFont | null {
  try {
    const buf = readFileSync(url)
    return {
      name: "Inter",
      data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer,
      weight,
      style: "normal",
    }
  } catch {
    // Fall back to the bundled default font rather than failing generation.
    return null
  }
}

export function loadInterFont(weights: Array<400 | 500 | 700 | 800> = [400, 700]): OgFont[] {
  const fonts: OgFont[] = []
  if (weights.includes(700)) {
    const bold = loadLocalFont(FONT_BOLD_URL, 700)
    if (bold) fonts.push(bold)
  }
  if (weights.includes(400)) {
    const regular = loadLocalFont(FONT_REGULAR_URL, 400)
    if (regular) fonts.push(regular)
  }
  return fonts
}
