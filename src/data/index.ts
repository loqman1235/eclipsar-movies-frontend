interface IHeroCarouselData {
  _id: string;
  title: string;
  overview: string;
  releaseDate: string;
  runtime: string;
  genres: string[];
  backdrop: string;
}

export const heroCarouselData: IHeroCarouselData[] = [
  {
    _id: "1",
    title: "Thanksgiving",
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/meRwi0lVzv7cMnLNJKoZY59krMp.jpg",
  },
  {
    _id: "2",
    title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/iNgn9LP0iMuLSnWqolivcY3Y7F6.jpg",
  },
  {
    _id: "3",
    title: "The Beekeeper",
    overview:
      "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    releaseDate: "2024",
    runtime: "1h 45m",
    genres: ["Action", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
  },
  {
    _id: "4",
    title: "Oppenheimer",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  },
];
