/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.{ts,tsx,js,jsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(gif|jpg|jpeg|png|svg|webp|avif)$': '<rootDir>/__mocks__/fileMock.ts',
    '^next/image$': '<rootDir>/__mocks__/next-image.tsx',
    '^next/link$': '<rootDir>/__mocks__/next-link.tsx',
    '^next/navigation$': '<rootDir>/__mocks__/next-navigation.ts',
    '^next/router$': '<rootDir>/__mocks__/next-router.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/'],
};

