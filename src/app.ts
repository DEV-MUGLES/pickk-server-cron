import fastify from 'fastify';

import { fastifyCron } from './plugins';
import { jobsRoute } from './routes';

export const buildFastify = () => {
  const instance = fastify({ logger: false });

  instance.get('/', async () => {
    return 'Hello Cron!';
  });

  instance.register(fastifyCron);
  instance.register(jobsRoute);

  return instance;
};

buildFastify().listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
