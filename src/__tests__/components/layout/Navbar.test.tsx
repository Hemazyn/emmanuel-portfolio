import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from "@/components/layout/Navbar"
import { ThemeProvider } from "@/components/layout/ThemeProvider"

function renderNavbar() {
  return render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )
}

describe("Navbar", () => {
  it("renders the menu toggle and accessible theme buttons", () => {
    renderNavbar()

    expect(screen.getByLabelText("Toggle navigation")).toBeInTheDocument()
    expect(screen.getByLabelText(/Set theme to light/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Set theme to dark/i)).toBeInTheDocument()
  })

  it("opens and closes the mobile menu", () => {
    renderNavbar()

    const toggle = screen.getByLabelText("Toggle navigation")
    expect(toggle).toHaveAttribute("aria-expanded", "false")

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByRole("link", { name: /Contact/ })).toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })
})
