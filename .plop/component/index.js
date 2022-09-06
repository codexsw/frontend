const { toKebabCase } = require('../helpers')

module.exports.componentGenerator = (plop) => {
  const prompts = [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component Name (in PascalCase form)',
    },
    {
      type: 'input',
      name: 'componentFolder',
      message: 'Component Folder (in kebab-case form, empty to create new)',
    },
  ]
  const actions = ({ componentName, componentFolder }) => {
    return [
      {
        type: 'add',
        path: `../src/${!componentFolder ? 'component/' : ''}${
          componentFolder || toKebabCase(componentName)
        }/${componentName}.tsx`,
        templateFile: 'component/templates/component.tsx.hbs',
      },
      ...(componentName.endsWith('View')
        ? [
            {
              type: 'add',
              path: `../src/${!componentFolder ? 'component/' : ''}${
                componentFolder || toKebabCase(componentName)
              }/${componentName}.stories.tsx`,
              templateFile: 'component/templates/component.stories.tsx.hbs',
            },
          ]
        : []),
      {
        type: 'add',
        path: `../src/${!componentFolder ? 'component/' : ''}${
          componentFolder || toKebabCase(componentName)
        }/index.ts`,
        skipIfExists: true,
        templateFile: 'component/templates/index.ts.hbs',
      },
    ]
  }

  return {
    description: 'Component Generator',
    prompts,
    actions,
  }
}
