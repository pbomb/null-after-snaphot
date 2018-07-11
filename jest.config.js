const jestConfig = require('kcd-scripts/config').jest;

jestConfig.snapshotSerializers = jestConfig.snapshotSerializers || [];
jestConfig.snapshotSerializers.push('jest-glamor-react');
jestConfig.setupTestFrameworkScriptFile =
  '<rootDir>src/jest/setupTestFramework.js';

module.exports = jestConfig;
