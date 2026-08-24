import { readFileSync } from "node:fs"

/**
 * Shared helper for loading fonts for ImageResponse-generated
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

// ─── Static `new URL` literals ───
// The bundler can trace these and rewrite them to emitted asset paths at
// build time. Dynamic paths cannot be traced and would silently fall back
// to the default font in production builds.

// Inter
const INTER_BOLD_URL = new URL("../assets/fonts/Inter-700.ttf", import.meta.url)
const INTER_REGULAR_URL = new URL("../assets/fonts/Inter-400.ttf", import.meta.url)

// VT323 (display / headings)
const VT323_REGULAR_URL = new URL("../assets/fonts/VT323-Regular.ttf", import.meta.url)

// Source Serif 4 (body)
const SOURCE_SERIF_REGULAR_URL = new URL("../assets/fonts/SourceSerif4-Regular.ttf", import.meta.url)
const SOURCE_SERIF_BOLD_URL = new URL("../assets/fonts/SourceSerif4-Bold.ttf", import.meta.url)

// JetBrains Mono (mono / labels)
const JETBRAINS_REGULAR_URL = new URL("../assets/fonts/JetBrainsMono-Regular.ttf", import.meta.url)
const JETBRAINS_MEDIUM_URL = new URL("../assets/fonts/JetBrainsMono-Medium.ttf", import.meta.url)

function loadLocalFont(url: URL, name: string, weight: OgFont["weight"]): OgFont | null {
  try {
    const buf = readFileSync(url)
    return {
      name,
      data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer,
      weight,
      style: "normal",
    }
  } catch {
    // Fall back to the bundled default font rather than failing generation.
    return null
  }
}

/**
 * Load the Inter font (legacy — used by icon / apple-icon).
 */
export function loadInterFont(weights: Array<400 | 500 | 700 | 800> = [400, 700]): OgFont[] {
  const fonts: OgFont[] = []
  if (weights.includes(700)) {
    const bold = loadLocalFont(INTER_BOLD_URL, "Inter", 700)
    if (bold) fonts.push(bold)
  }
  if (weights.includes(400)) {
    const regular = loadLocalFont(INTER_REGULAR_URL, "Inter", 400)
    if (regular) fonts.push(regular)
  }
  return fonts
}

/**
 * Load the full brutalist font stack for OG images.
 * Returns VT323 (display), Source Serif 4 (body), and JetBrains Mono (mono).
 */
export function loadBrutalistFonts(): OgFont[] {
  const fonts: OgFont[] = []

  const vt323 = loadLocalFont(VT323_REGULAR_URL, "VT323", 400)
  if (vt323) fonts.push(vt323)

  const sourceSerif = loadLocalFont(SOURCE_SERIF_REGULAR_URL, "Source Serif 4", 400)
  if (sourceSerif) fonts.push(sourceSerif)

  const sourceSerifBold = loadLocalFont(SOURCE_SERIF_BOLD_URL, "Source Serif 4", 700)
  if (sourceSerifBold) fonts.push(sourceSerifBold)

  const jetbrains = loadLocalFont(JETBRAINS_REGULAR_URL, "JetBrains Mono", 400)
  if (jetbrains) fonts.push(jetbrains)

  const jetbrainsMedium = loadLocalFont(JETBRAINS_MEDIUM_URL, "JetBrains Mono", 500)
  if (jetbrainsMedium) fonts.push(jetbrainsMedium)

  return fonts
}
