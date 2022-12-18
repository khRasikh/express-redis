const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();

async function createCluster() {
  const cluster = redis.createClient({
    host: process.env.REDIS_URL,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
  });

  await cluster.connect();
  try {
    cluster.set("cluster four", "value four").then((e) => {
      console.log({ success: true, message: e });
    });
  } catch {
    throw new Error();
  }
}

module.exports = createCluster;
