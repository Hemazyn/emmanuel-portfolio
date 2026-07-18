import { describe, it, expect } from "vitest"
import { cn, truncateText, formatDate } from "@/lib/utils"

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("filters falsy values", () => {
    expect(cn("foo", false, undefined, null, "bar")).toBe("foo bar")
  })

  it("returns empty string for no args", () => {
    expect(cn()).toBe("")
  })
})

describe("truncateText", () => {
  it("returns full text when within max length", () => {
    expect(truncateText("hello", 10)).toBe("hello")
  })

  it("truncates and adds ellipsis", () => {
    expect(truncateText("hello world this is long", 10)).toBe("hello worl...")
  })
})

describe("formatDate", () => {
  it("formats a date string", () => {
    const result = formatDate("2024-01-15")
    expect(result).toBe("January 2024")
  })
})
