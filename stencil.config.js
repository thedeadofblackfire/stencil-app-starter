exports.config = {
  //namespace: 'app',
  outputTargets: [
    { type: 'dist' },
    { type: 'www' }
  ]
};
/*
exports.config = {
  namespace: 'dynacare-pro',
  outputTargets: [
    { type: 'dist' },
    { type: 'www' }
  ]
};
*/

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
