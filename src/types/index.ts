export interface IMovie {
  _id: string;
  title: string;
  overview: string;
  releaseDate: string;
  runtime: string;
  genres: string[];
  backdrop: string;
  backdropWithText?: string;
}

export interface ICollection {
  _id: string;
  name: string;
  movies: IMovie[];
}
