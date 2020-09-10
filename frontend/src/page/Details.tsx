import React, { useState, useEffect } from "react";
import Pet from "../model/Pet";
import { fetchPet } from "../service/petService";
import Rating from "../components/Rating/Rating";
import { Attribution } from "../components/Attribution/Attribution";

interface Props {
  match: any;
}

export default function Home(props: Props) {
  const petId = props.match.params.id;

  const [pet, setPet] = useState<Pet | undefined>(undefined);

  useEffect(() => {
    async function fetchPetFromProps() {
      const fetchedPet = await fetchPet(petId);
      setPet(fetchedPet);
    }
    fetchPetFromProps();
  }, [petId]);

  if (!pet) {
    return <>Loading...</>;
  }

  // TODO: add rate button

  const { name, species, imageUrl } = pet;
  return (
    <>
      <article>
        <h2>
          {name}
          <Rating pet={pet} />
        </h2>
        <img src={imageUrl} alt={`${name} the ${species}`} />
      </article>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
