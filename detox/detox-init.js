const detox = require("detox");
const adapter = require("detox/runners/jest/adapter");
const { reloadApp } = require("expo-detox-hook");

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.init(undefined, { launchApp: false });
  await reloadApp();
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
