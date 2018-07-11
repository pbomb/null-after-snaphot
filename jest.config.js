const jestConfig = require('kcd-scripts/config').jest;

jestConfig.snapshotSerializers = jestConfig.snapshotSerializers || [];
jestConfig.snapshotSerializers.push('jest-glamor-react');

module.exports = jestConfig;
