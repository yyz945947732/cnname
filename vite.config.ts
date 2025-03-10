import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/test/**'],
    coverage: {
      provider: 'istanbul',
      reporter: ['cobertura', 'lcov'],
      exclude: ['**/scripts/**', ...coverageConfigDefaults.exclude]
    },
  },
});
