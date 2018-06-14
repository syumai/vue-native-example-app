var upstreamTransformer = require('metro/src/transformer');
// var vueNaiveScripts = require('vue-native-scripts');
const vueNativeScripts = require('vue-native-custom-transformer-plugin'); // Use custom transformer plugin
var vueExtensions = ['vue'];

module.exports.transform = function({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith('.' + ext))) {
    const transformResult = vueNativeScripts.transform({
      src,
      filename,
      options,
    });
    return transformResult;
  }
  return upstreamTransformer.transform({ src, filename, options });
};
