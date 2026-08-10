import { test, expect } from "@playwright/test"

// Bypass the one-time preloader so the page content is immediately stable.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    try {
      sessionStorage.setItem("preloader-seen", "1")
    } catch {
      // ignore storage failures
    }
  })
})

test.describe("Home page", () => {
  test("renders the hero and key sections", async ({ page }) => {
    await page.goto("/")

    await expect(page).toHaveTitle(/Emmanuel Tofunmi/)
    await expect(page.getByRole("heading", { name: /I'm Emmanuel/i })).toBeVisible()
    await expect(page.locator("#projects")).toBeVisible()
    await expect(page.locator("#contact")).toBeVisible()
  })

  test("opens the project modal as an accessible dialog and closes with Escape", async ({ page }) => {
    await page.goto("/")

    await page.locator("#projects").scrollIntoViewIfNeeded()
    // Let framer-motion layout animations settle before clicking.
    await page.waitForTimeout(700)

    const cardTrigger = page.getByRole("button", { name: /View details for/i }).first()
    await cardTrigger.click({ force: true })

    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveAttribute("aria-modal", "true")
    await expect(dialog.getByRole("button", { name: "Close project details" })).toBeVisible()

    await page.keyboard.press("Escape")
    await expect(dialog).not.toBeVisible()
  })

  test("mobile navigation menu opens and closes", async ({ page }) => {
    await page.goto("/")

    const toggle = page.getByLabel("Toggle navigation")
    await expect(toggle).toHaveAttribute("aria-expanded", "false")

    await toggle.click()
    await expect(toggle).toHaveAttribute("aria-expanded", "true")
    // Scope to the overlay <nav> — the footer also links to "Contact".
    await expect(page.getByRole("navigation").getByRole("link", { name: /Contact/ })).toBeVisible()

    await toggle.click()
    await expect(toggle).toHaveAttribute("aria-expanded", "false")
  })

  test("case study accordion expands to reveal the problem and impact", async ({ page }) => {
    await page.goto("/")

    const caseStudies = page.locator("#case-studies")
    await caseStudies.scrollIntoViewIfNeeded()

    await caseStudies.getByRole("button", { name: /TaskFlow/i }).first().click()

    await expect(caseStudies.getByText("The Problem", { exact: true })).toBeVisible()
    await expect(caseStudies.getByText("The Approach", { exact: true })).toBeVisible()
  })
})
