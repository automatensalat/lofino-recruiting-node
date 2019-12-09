import axios from "axios";
import Pet from "../model/Pet";

export async function fetchPets(): Promise<Pet[]> {
  const response = await axios.get("http://localhost:8080/pets");
  return response.data as Pet[];
}

export async function fetchPet(id: number): Promise<Pet> {
  const response = await axios.get(`http://localhost:8080/pets/${id}`);
  return response.data as Pet;
}
