const { override, addDecoratorsLegacy, addLessLoader } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentname: '[local]--[hash:base64:5]'
    }
  })
)