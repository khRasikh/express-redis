const redis = require("redis");
const cluster = redis.createClient();

module.exports = async (req, rep) => {
  let result;
  await cluster.connect();
  await cluster
    .get("testKey", (request, reply) => {
      console.log(reply);
    })
    .then((e) => {
      console.log(e);
      result = e;
    });
  rep.send(result);
};
