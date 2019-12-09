import React from "react";
import Pet from "../../model/Pet";

interface Props {
  pet: Pet;
}

export default (props: Props) => {
  const rating = "?";
  return <span>{rating} / 5</span>;
};
