module.exports = {
    testEnvironment: 'node', // Set the test environment to Node.js
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Specify the pattern for test files
    moduleFileExtensions: ['js', 'json'], // Add file extensions that Jest should recognize
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    verbose: true, // Enable verbose output for test results
  };