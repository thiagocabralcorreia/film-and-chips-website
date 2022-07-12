export interface MovieCardSchema {
  data: MovieItemSchema;
};

export interface MovieItemSchema {
    id: string,
    image: string,
    title: string,
    year?: number,
    description?: string,
};

export interface MovieSchema {
  errorMessage: string | '',
  items?: MovieItemSchema[],
  results?: MovieItemSchema[]
};

export interface CastSchema {
  id: string,
  image: string,
  name: string,
  asCharacter: string
};

export interface SelectedMovieSchema {
  id: string,
  image: string,
  title: string,
  contentRating: string,
  year: string,
  genres: string,
  runtimeStr: string,
  directors: string,
  writers: string,
  plot: string,
  imDbRating: string,
  languages: string,
  actorList: CastSchema[],
  similars: MovieItemSchema[]
};

export interface MoviesSchema {
  movies: {
    movies: MovieSchema,
    searchedMovies: MovieSchema,
    selectedMovie: SelectedMovieSchema,
    loading: boolean
  }
};
