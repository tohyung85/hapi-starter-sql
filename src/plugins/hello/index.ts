const packageJson = require('./package.json');

export function register(server, options, next) {
  server.route({
    method: 'GET',
    path: '/hello',
    config: {
      tags: ['api'],
      handler: (req, reply) => {
        reply('Hello World!');
      }
    }
  });

  next();
};

exports.register.attributes = {
  pkg: packageJson
};
