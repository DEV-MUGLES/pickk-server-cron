import { FastifyPluginCallback } from 'fastify';

import { jobData } from '../jobs';

const jobProperty = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    rule: { type: 'string' },
    endPoint: { type: 'string' },
    skip: { type: 'boolean' },
  },
};

export const isParamsContainName = (
  query: unknown
): query is { name: string; [key: string]: any } =>
  query != null && typeof (query as any).name === 'string';

export const jobsRoute: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    method: 'GET',
    url: '/jobs',
    schema: {
      response: {
        200: {
          type: 'array',
          items: jobProperty,
        },
      },
    },
    handler: function (request, reply) {
      reply.send(jobData);
    },
  });

  app.route({
    method: 'GET',
    url: '/jobs/:name',
    schema: {
      response: {
        200: jobProperty,
      },
    },
    handler: function ({ params }, reply) {
      if (!isParamsContainName(params)) {
        reply.code(400).send(new Error('job not found'));
        return;
      }

      const { name } = params;
      const job = jobData.find((data) => data.name === name);
      if (!job) {
        reply.code(404).send(new Error('job not found'));
        return;
      }

      reply.send(job);
    },
  });

  next();
};
