import React from "react";
import Pet from "../../model/Pet";

import "./PetCard.css";
import Rating from "../Rating/Rating";

interface Props {
  pet: Pet;
}

export default function PetCard(props: Props) {
  const { name, imageUrl } = props.pet;

  return (
    <section className="pet-card">
      <h2>
        {name} <Rating pet={props.pet} />
      </h2>

      <img className="pet-card--img" src={imageUrl} alt="The pet" />
    </section>
  );
}
