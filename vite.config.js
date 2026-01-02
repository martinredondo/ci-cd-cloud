import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    reporters: ['json'],
    outputFile: 'test.json',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80
      },
      exclude: [
        'node_modules/',
        'vite.config.ts',
        'vitest.config.ts',
        'src/**/*.d.ts',
        'src/**/__mocks__/**',
        'src/**/stories/**',
        'src/test/**'

      ],
      include: [
        'src/components/**.jsx'
      ]
    },
    testTimeout: 30000,
  },
});
