/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require("./plop-templates/component/index.cjs")
const path = require("path")
const { execSync } = require("child_process")

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator)
  plop.setActionType("format", (answers, config) => {
    const folderPath = `${path.join(
      config.path,
      plop.getHelper("pascalCase")(`${answers.name}${config.suffix}`),
      "**",
      "**.{ts,tsx}"
    )}`

    execSync(`npm run format -- "${folderPath}"`)
  })
}
