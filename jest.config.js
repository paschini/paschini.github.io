/**
 * @format
 * @type {import('ts-jest').JestConfigWithTsJest} *
 */

export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\.tsx?$': ['ts-jest', {}]
  },
  preset: 'ts-jest',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg'
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
