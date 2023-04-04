module.exports = {
  description: "Create an react component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called? (e.g. 'Button', 'InputField', etc.)",
      default: "Unknown",
    },
    {
      type: "input",
      name: "path",
      message: "Path relative to src/lib/components folder, e.g. common/components",
      default: "",
    },
  ],
  actions: ({ path }) => {
    // Generate index.js and index.test.js
    return [
      {
        type: "addMany",
        destination: "src/lib/components/{{pascalCase path}}/{{pascalCase name}}",
        templateFiles: "plop-templates/component/*.hbs",
        base: "plop-templates/component",
      },
      // // run prettier over generated files
      {
        type: "format",
        path: `src/lib/components/${path}/`,
        suffix: "",
      },
    ]
  },
}
