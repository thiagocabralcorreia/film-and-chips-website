import { MovieItemSchema } from '../../features/movies/movieSlice';
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
  data: MovieItemSchema;
};

export const MovieCard = ({ data }: MovieCardSchema) => {
 
  return (
    <Card>
      <CardLink to={`/movie/${data.id}`}>
        <div>
          <CardTop>
            <CardPoster src={data.image} alt={data.title} />
          </CardTop>
          <CardInfo>
              <CardTitle>{data.title}</CardTitle>
              <CardTYear>{data.year}</CardTYear>
          </CardInfo>
          </div>
      </CardLink>
    </Card>
  );
};
