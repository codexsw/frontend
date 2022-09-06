const { componentGenerator } = require('./component')
const { pageGenerator } = require('./page')

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator(plop))
  plop.setGenerator('page', pageGenerator(plop))
}
