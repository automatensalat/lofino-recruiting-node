import { sampleData } from "../domain/pets";
import express from "express";

const router = express.Router();

router.get("/", function(req, res) {
	// respond with the list of pets
	res.send(sampleData);
});

router.get("/:id", function(req, res) {
	const petId = req.params.id;

	const foundPet = sampleData.find((pet) => petId === pet.id.toString());

	if (foundPet === undefined) {
		res.sendStatus(404);
	} else {
		res.send(foundPet);
	}
});

export const petsRoutes = router;
