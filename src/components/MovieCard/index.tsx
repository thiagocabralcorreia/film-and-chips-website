import {
  Card,
  CardLink,
  CardTop,
  CardPoster,
  CardInfo,
  CardTitle,
  CardTYear
} from './styles';

export interface MovieDataSchema {
    imdbID: string,
    Poster: string | undefined,
    Title: string,
    Year: number,
    Type: 'movie',
};

export interface MovieCardSchema {
  data: MovieDataSchema;
};

export const MovieCard = ({ data }: MovieCardSchema) => {
 
  return (
    <Card>
      <CardLink to={`/movie/${data.imdbID}`}>
        <div>
          <CardTop>
            <CardPoster src={data.Poster} alt={data.Title} />
          </CardTop>
          <CardInfo>
              <CardTitle>{data.Title}</CardTitle>
              <CardTYear>{data.Year}</CardTYear>
          </CardInfo>
          </div>
      </CardLink>
    </Card>
  );
};
