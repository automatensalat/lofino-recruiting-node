import React from "react";
import Pet from "../../model/Pet";

interface Props {
  pet: Pet;
}

export default function (props: Props) {
  const ratings = props.pet.ratings;

  // TODO: calculate average and number of ratings from props

  const ratingCount = "?";
  const average = "?";
  return (
    <span id="rating-span">{`${average} / 5 (${ratingCount} ratings)`}</span>
  );
}
