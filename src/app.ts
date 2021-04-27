import fastify from 'fastify';
import { config } from 'dotenv';

import { fastifyCron } from './plugins';
import { jobsRoute } from './routes';

config();

export const buildFastify = () => {
  const app = fastify({ logger: false });

  app.get('/', async () => {
    return 'Hello Cron!';
  });

  app.register(fastifyCron);
  app.register(jobsRoute);

  return app;
};

buildFastify().listen(process.env.PORT || 8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
