import { defineConfig, configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    exclude: [...configDefaults.exclude, "e2e/**", "playwright-report/**", "test-results/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/app/**",
        "src/data/**",
        "src/lib/animations.ts",
        "public/**",
        "**/*.test.*",
        "**/*.spec.*",
        "next-env.d.ts",
      ],
      // Quality gates on the components we deliberately test — prevents
      // regressions without blocking on untested sections. Extend these as
      // coverage grows.
      thresholds: {
        "./src/components/ui/ProjectModal.tsx": { lines: 70, functions: 50 },
        "./src/components/layout/Navbar.tsx": { lines: 80, functions: 70 },
        "./src/components/ui/SectionBackground.tsx": { lines: 100, functions: 100 },
        "./src/components/layout/ThemeProvider.tsx": { lines: 100, functions: 100 },
        "./src/hooks/useScrollspy.ts": { lines: 65, functions: 75 },
      },
    },
  },
})
