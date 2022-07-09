import { MovieItemSchema } from '../../types';
import {
  Card,
  CardLink,
  CardTop,
  CardPoster,
  CardInfo,
  CardTitle,
  CardTYear
} from './styles';

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
            {data?.year && <CardTYear>{data.year}</CardTYear>}
            {data?.description && <CardTYear>{data.description}</CardTYear>}
          </CardInfo>
        </div>
      </CardLink>
    </Card>
  );
};
