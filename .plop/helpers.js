module.exports.toKebabCase = (s) =>
  s.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()
