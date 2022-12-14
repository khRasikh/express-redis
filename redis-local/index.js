const app = require("express")();
const createCluster = require("./create-cluster");
const deleteCluster = require("./delete-cluster");
const fetchCluster = require("./fetchCluster");
const dotenv = require("dotenv");
dotenv.config();

app.post("/task", createCluster);
app.delete("/task", deleteCluster);
app.get("/task", fetchCluster);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
