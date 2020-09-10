import express from "express";
import { loadPet, loadPets } from "../repository/petsRepository";

const router = express.Router();

router.get("/", async function(req, res) {
	// respond with the list of pets
	const pets = await loadPets();
	res.send(pets);
});

router.get("/:id", async function(req, res) {
	const petId = req.params.id;

	try {
		const pet = await loadPet(Number.parseInt(petId, 10));
		res.send(pet);
	} catch (error) {
		console.log(error);
		res.sendStatus(404);
	}
});

export const petsRoutes = router;
