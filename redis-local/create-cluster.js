const redis = require("redis");
const cluster = redis.createClient();

async function createCluster() {
  await cluster.connect();
  try {
    cluster.set("cluster Two", "value Two").then((e) => {
      console.log({ success: true, message: e });
    });
  } catch {
    throw new Error();
  }
}

module.exports = createCluster;
