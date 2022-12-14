const redis = require("redis");
const cluster = redis.createClient();

const deleteCluster = async () => {
  await cluster.connect();
  cluster.del("cluster One").then(() => console.log("Deleted!"));
};

module.exports = deleteCluster;
