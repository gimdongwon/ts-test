// jest.config.js 
module.exports = {
    testPathIgnorePatterns: [ '<rootDir>/node_modules/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        // '^@App/(.*)$': '<rootDir>/src/$1',
        // '^lib/(.*)$': '<rootDir>/common/$1',
        '^src/(.*)$': '<rootDir>/src/$1',

    },
    testEnvironment: 'jsdom',
    "setupFilesAfterEnv": [
        "<rootDir>/jest.setup.js"
    ],
    globals: {
        "ts-jest": {
          "tsConfig": '<rootDir>/tsconfig.json'
        }
      },
};