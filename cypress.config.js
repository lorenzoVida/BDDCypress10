const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'ruswao',
  reporter: 'reporters/custom.js',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    async setupNodeEvents(on, config){
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config; 
    },
    specPattern: "**/*/*.feature"
    //specPattern:cypress/e2e/features/*.feature
  },
});
