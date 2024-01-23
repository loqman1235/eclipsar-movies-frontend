import Svg from "../components/Icons/Svg";
import { ICollection, IMovie } from "../types";

export const menuLinks = [
  {
    path: "/",
    icon: <Svg icon="home" color="var(--secondary-color)" size={20} />,
    text: "Home",
  },
  {
    path: "/discover",
    icon: <Svg icon="discover" color="var(--secondary-color)" size={20} />,
    text: "Discover",
  },
  {
    path: "/soon",
    icon: <Svg icon="clock" color="var(--secondary-color)" size={20} />,
    text: "Coming Soon",
  },
];

export const libraryLinks = [
  {
    path: "/favorites",
    icon: <Svg icon="heart" color="var(--secondary-color)" size={20} />,
    text: "Favorites",
  },
  {
    path: "/collection-1",
    icon: <Svg icon="folder" color="var(--secondary-color)" size={20} />,
    text: "Collection #1",
  },
  {
    path: "/collection-2",
    icon: <Svg icon="folder" color="var(--secondary-color)" size={20} />,
    text: "Collection #2",
  },
];

export const categoryLinks = [
  {
    path: "/movies",
    icon: <Svg icon="movie" color="var(--secondary-color)" size={20} />,
    text: "Movies",
  },
  {
    path: "/tvshows",
    icon: <Svg icon="tv" color="var(--secondary-color)" size={20} />,
    text: "TV Shows",
  },
  {
    path: "/anime",
    icon: <Svg icon="play-rect" color="var(--secondary-color)" size={20} />,
    text: "Anime",
  },
];

export const generalLinks = [
  {
    path: "/settings",
    icon: <Svg icon="settings" color="var(--secondary-color)" size={20} />,
    text: "Settings",
  },
  {
    icon: <Svg icon="logout" color="var(--secondary-color)" size={20} />,
    text: "Logout",
  },
];

export const navLinks = [
  {
    text: "Movies",
    path: "/",
  },
  {
    text: "TV Shows",
    path: "/tvshows",
  },
  {
    text: "Anime",
    path: "/anime",
  },
];

export const heroCarouselData: IMovie[] = [
  {
    _id: "1",
    title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/iNgn9LP0iMuLSnWqolivcY3Y7F6.jpg",
  },
  {
    _id: "2",
    title: "Thanksgiving", //
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/meRwi0lVzv7cMnLNJKoZY59krMp.jpg",
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

export const collectionsData: ICollection[] = [
  {
    _id: "1",
    name: "Must Watch Action",
    movies: [
      {
        _id: "1",
        title: "The Equalizer 3",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/jojfdfuhh8pWVn5G0HmPspv3sja.jpg",
        backdropWithText:
          "https://image.tmdb.org/t/p/original/bQ4mX2lxnpDBnlKkj0nd1TNIJsk.jpg",
      },
      {
        _id: "2",
        title: "The Bricklayer",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/rsG3b17WzUaMKCgHjMRPNaBlfcM.jpg",
      },
      {
        _id: "3",
        title: "Dead for a Dollar",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/sfrXFuVWcWpfjrbL8X7aCMCHfrf.jpg",
      },
      {
        _id: "4",
        title: "The Creator",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/nZQcowL2neIM5sMLiZiaUN0rPf1.jpg",
      },
      {
        _id: "5",
        title: "Freelance",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/ow5z2yWnSb5J2wQWAgGYbO0nBcw.jpg",
      },
    ],
  },

  {
    _id: "2",
    name: "Laugh Out Loud Comedies Cache",
    movies: [
      {
        _id: "1",
        title: "Wonka",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/95ldoFNgoYinCn9K4D7JoIHDv4g.jpg",
      },
      {
        _id: "2",
        title: "Trolls Band Together",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/c6msiFybhohrgaBYxfR5gyDkn6L.jpg",
      },
      {
        _id: "3",
        title: "The Family Plan",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/2R8VCFxHjcFbMwWepWd9QBH1AyF.jpg",
      },
      {
        _id: "4",
        title: "Ruby Gillman, Teenage Kraken",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/iu9bgjga2YymekAmUAMqU83IHFZ.jpg",
      },
      {
        _id: "5",
        title: "Chicken Run",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/aTydnWgZ32m41DnTIb7paXsLBs8.jpg",
      },
    ],
  },

  {
    _id: "3",
    name: "Heart-Pounding Horror Haven",
    movies: [
      {
        _id: "1",
        title: "Thanksgiving",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/enCrVL80z58zNRF4AhZ9Unq8R4s.jpg",
      },
      {
        _id: "2",
        title: "The Nun II",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/tzqegi5m05VEFGmUX4Uk9xsSE1P.jpg",
      },
      {
        _id: "3",
        title: "Night Swim",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/bgkhfC1U9FVgYU0QYf7N6M2ADfH.jpg",
      },
      {
        _id: "4",
        title: "A Quiet Place Part II",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/tJRSV7UsuLb65svcEASDFmt4k30.jpg",
      },
      {
        _id: "5",
        title: "The Boogyman",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/bVrKmBSiv1OZHQjRLEke0wOYqaO.jpg",
      },
    ],
  },
];
