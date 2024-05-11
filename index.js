const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  return { test: "Hello World Luiz" };
});

const bootstrap = async () => {
  try {
    await fastify.listen({ port: 8090, host: "0.0.0.0" });
    fastify.log.info(`Servidor rodando em: ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

bootstrap();
