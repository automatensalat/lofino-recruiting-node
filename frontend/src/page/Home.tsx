import React, { useState, useEffect } from "react";
import Pet from "../model/Pet";
import PetList from "../components/PetList/PetList";
import { fetchPets } from "../service/petService";

export default function Home() {
  const [pets, setPets] = useState<Pet[]>([]);
  useEffect(() => {
    (async () => {
      setPets(await fetchPets());
    })();
  }, []);

  return (
    <article>
      <p>
        Look at all those cute pets{" "}
        <span role="img" aria-label="heart emoji">
          😍
        </span>
      </p>
      <PetList pets={pets} />
    </article>
  );
}
