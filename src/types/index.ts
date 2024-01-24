export interface IMedia {
  _id: string;
  title: string;
  overview?: string;
  releaseDate?: string;
  runtime?: string;
  genres: string[];
  backdrop?: string;
  backdropWithText?: string;
  poster: string;
}

export interface ICollection {
  _id: string;
  name: string;
  movies: IMedia[];
}
