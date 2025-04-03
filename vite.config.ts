import { defineConfig } from 'vitest/config';
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  test: {
    include: ['**/test/**'],
    coverage: {
      provider: 'istanbul',
      reporter: ['cobertura', 'lcov'],
      include: ['**/src/**'],
    },
    benchmark: {
      include: ['**/performance/**'],
    },
  },
});
