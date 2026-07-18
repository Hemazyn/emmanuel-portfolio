import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import SectionBackground from "@/components/ui/SectionBackground"

describe("SectionBackground", () => {
  it("renders the container with base classes", () => {
    const { container } = render(<SectionBackground />)
    const outer = container.firstChild as HTMLElement
    expect(outer.className).toContain("pointer-events-none")
    expect(outer.className).toContain("absolute")
    expect(outer.className).toContain("inset-0")
  })

  it("renders with grid variant", () => {
    const { container } = render(<SectionBackground />)
    const inner = container.querySelector('[class*="grid-pattern"]')
    expect(inner).toBeTruthy()
  })

  it("renders with dots variant", () => {
    const { container } = render(<SectionBackground variant="dots" />)
    const inner = container.querySelector('[class*="dot-pattern"]')
    expect(inner).toBeTruthy()
  })

  it("applies custom className to the outer div", () => {
    const { container } = render(<SectionBackground className="custom-class" />)
    const outer = container.firstChild as HTMLElement
    expect(outer.className).toContain("custom-class")
  })
})
