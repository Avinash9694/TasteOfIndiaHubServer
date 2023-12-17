const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv"); // Use require instead of import

dotenv.config();

const chefData = require("./ChefData/chef.json");

const app = new express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to recipes hub");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const ChefData = chefData.filter((data) => data.id == id);
  res.send(ChefData);
});

app.listen(port, () => {
  console.log(`Server is listening at ${port} `);
});
