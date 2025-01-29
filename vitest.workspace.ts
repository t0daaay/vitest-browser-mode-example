import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "browser",
      include: ["src/**/*.browser.spec.ts"],
      setupFiles: ["vitest-browser-vue"],
      browser: {
        enabled: true,
        provider: "playwright",
        instances: [{ browser: "chromium" }],
      },
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "happydom",
      include: ["src/**/*.happydom.spec.ts"],
      environment: "happy-dom",
    },
  },
]);
