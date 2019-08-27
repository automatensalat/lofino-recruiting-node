// initialize sample data
const pets = [
  pet(0, "Mambo", "dog", 3, "https://abload.de/img/mamboy5j6z.jpg", [5, 5, 4, 5, 2, 3]),
  pet(1, "Ms Pancakes", "cat", 6,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gr%C3%BCne_Augen_einer_Katze.JPG/180px-Gr%C3%BCne_Augen_einer_Katze.JPG",
    [2, 2, 4, 3]
  ),
  pet(2, "Archibald", "parrot", 15,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Graupapagei.jpg/180px-Graupapagei.jpg",
    [3, 5, 3, 2, 5]
  )
];

function pet(id, name, species, age, imageUrl, ratings) {
  return {
    id,
    name,
    species,
    age,
    imageUrl,
    ratings
  };
}

module.exports = pets;
