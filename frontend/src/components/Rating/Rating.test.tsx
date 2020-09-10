import TestRenderer from "react-test-renderer";
import Rating from "./Rating";
import React from "react";
import Pet from "../../model/Pet";

describe(Rating, () => {
  it("renders average rating and rating count", () => {
    const pet = {
      ratings: [5, 2, 3, 2]
    } as Pet;

    const element = TestRenderer.create(<Rating pet={pet} />);

    const span = element.root.findByProps({ id: "rating-span" });
    expect(span!.children[0]).toBe("3.0 / 5 (4 ratings)");
  });
});
