module.exports = {
    roots: ['<rootDir>'],
    setupFiles: ['<rootDir>/__tests__/setup.js'],
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)'
    ],
    testPathIgnorePatterns: [
        '/node_modules/', '<rootDir>/__tests__/setup.js'
    ]
};
