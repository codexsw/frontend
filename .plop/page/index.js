const { toKebabCase } = require('../helpers')

module.exports.pageGenerator = (plop) => {
  const prompts = [
    {
      type: 'input',
      name: 'pageName',
      message: 'Page Name (in PascalCase form)',
    },
    {
      type: 'input',
      name: 'pageFolder',
      message: 'Page Folder (in kebab-case form)',
    },
  ]
  const actions = ({ pageName, pageFolder }) => {
    const paths = pageFolder.split('/')
    const sameAsName = paths[paths.length - 1] === toKebabCase(pageName)

    const pagePath = sameAsName
      ? `../src/pages/${pageFolder}/index.tsx`
      : `../src/pages/${pageFolder}/${toKebabCase(pageName)}.tsx`

    return [
      {
        type: 'add',
        path: pagePath,
        templateFile: 'page/templates/page.tsx.hbs',
      },
    ]
  }

  return {
    description: 'Page Generator',
    prompts,
    actions,
  }
}
