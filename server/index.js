const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Howdy!");
});

app.listen(1338, () => console.log("Running on PORT 1338"));
