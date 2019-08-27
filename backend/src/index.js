const petsRoutes = require("./routes/pets");
const express = require("express");

const app = express();
const port = 8080;

app.use("/pets", petsRoutes);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
