var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});


api.get('/goodbye', function () {
    return 'fuck off then';
});