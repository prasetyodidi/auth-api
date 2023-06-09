const createServer = require('./Infrastructures/http/createServer');
const container = require('./Infrastructures/container');

const start = async () => {
  const server = await createServer(container);
  await server.start();
  /* eslint-disable no-console */
  console.log(`server start at ${server.info.uri}`);
};

start();
