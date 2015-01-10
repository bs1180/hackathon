var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080 });
/*
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './',
      listing: true,
      index: true
    }
  }
});
*/
server.route({
  method: 'GET',
  path: '/api/questions.json',
  handler: function(request, reply) {
    reply.file('./questions.json');
  }
});

server.register(
{
  register: require('./../cme-community-api'),
  options: {}
}
, {
  routes: {
    prefix: '/api'
  }},
  function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err);
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
