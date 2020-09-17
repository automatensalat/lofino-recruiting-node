import axios from "axios";
import Pet from "../model/Pet";

export async function fetchPets(): Promise<Pet[]> {
  const response = await axios.get("http://localhost:8080/pets");
  return (response.data as any[]).map(convertToPet);
}

export async function fetchPet(id: number): Promise<Pet> {
  const response = await axios.get(`http://localhost:8080/pets/${id}`);
  return convertToPet(response.data);
}

function convertToPet(payload: object): Pet {
  const pet = payload as Pet;
  // deserialize `date` string to Date
  pet.ratings.forEach((r) => (r.date = new Date(r.date)));
  return pet;
}
