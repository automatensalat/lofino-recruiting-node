import React, { useState, useEffect } from "react";
import Pet from "../model/Pet";
import { fetchPet } from "../service/petService";
import Rating from "../components/Rating/Rating";

interface Props {
  match: any;
}

export default function Home(props: Props) {
  const petId = props.match.params.id;

  const [pet, setPet] = useState<Pet | undefined>(undefined);
  useEffect(() => {
    (async () => {
      setPet(await fetchPet(petId));
    })();
  }, [petId]);

  if (!pet) {
    return null;
  }

  const { name, imageUrl } = pet;

  return (
    <article>
      <h2>
        {name}
        <Rating pet={pet} />
      </h2>
      <img src={imageUrl} alt="The pet" />
    </article>
  );
}
