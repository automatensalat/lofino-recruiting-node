export interface Pet {
	id: number;
	name: string;
	species: string;
	birthdate: Date;
	imageUrl: string;
	ratings: number[];
}

// initialize sample data
export const sampleData = [
	pet(
		0,
		"Mambo",
		"dog",
		new Date(2012, 6, 3),
		"https://abload.de/img/mamboy5j6z.jpg",
		[5, 5, 4, 5, 2, 3]
	),
	pet(
		1,
		"Ms Pancakes",
		"cat",
		new Date(2017, 3, 14),
		"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gr%C3%BCne_Augen_einer_Katze.JPG/180px-Gr%C3%BCne_Augen_einer_Katze.JPG",
		[2, 2, 4, 3]
	),
	pet(
		2,
		"Archibald",
		"parrot",
		new Date(1987, 11, 6),
		"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Graupapagei.jpg/180px-Graupapagei.jpg",
		[3, 5, 3, 2, 5]
	),
	pet(
		3,
		"Bubbles",
		"dog",
		new Date(2010, 6, 3),
		"https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg",
		[3, 1, 5, 4, 2, 3]
	),
	pet(
		4,
		"Charles",
		"dog",
		new Date(2009, 12, 24),
		"https://images.dog.ceo/breeds/malinois/n02105162_5800.jpg",
		[2, 4, 3, 4]
	),
	pet(
		5,
		"Rose and Helena",
		"parrot",
		new Date(2003, 2, 17),
		"https://upload.wikimedia.org/wikipedia/commons/c/cc/Rosakakadu_ts3.jpg",
		[3, 1, 4, 2, 4]
	),
];

function pet(
	id: number,
	name: string,
	species: string,
	age: Date,
	imageUrl: string,
	ratings: number[]
) {
	return {
		id,
		name,
		species,
		age,
		imageUrl,
		ratings,
	};
}
