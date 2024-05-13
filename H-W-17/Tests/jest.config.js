/** @type {import('ts-jest').JestConfigWithTsJest} */
import 'jest-expect-message';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/Jest_tests/*.spec.ts'],
  files: ["node_modules/jest-expect-message/types/index.d.ts"],
  setupFilesAfterEnv: ['<rootDir>/node_modules/jest-expected-message/dist/index.js'],

}
