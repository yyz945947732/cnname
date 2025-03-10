import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src'],
    coverage: {
      provider: 'istanbul',
      reporter: ['cobertura', 'lcov'],
    },
  },
});
