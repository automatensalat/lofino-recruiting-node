import { petsRoutes } from "./routes/pets";
import express from "express";

const app = express();
const port = 8080;

app.use(function enableCors(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/pets", petsRoutes);
app.get("/hello", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
