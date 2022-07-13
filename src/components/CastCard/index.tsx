import { CastSchema } from '../../types';
import {
  CardCast,
  CardCastTop,
  CardCastPortrait,
  CardCastInfo,
  CardCastName,
  CardCastAsCharacter
} from './styles';

interface CastCardSchema {
  star: CastSchema
}

export const CastCard = ({ star }: CastCardSchema) => {
 
  return (
    <CardCast>
      <div>
        <CardCastTop>
          <CardCastPortrait src={star.image} alt={star.name} />
        </CardCastTop>
        <CardCastInfo>
          <CardCastName>{star.name}</CardCastName>
          {star.asCharacter && <CardCastAsCharacter>as {star.asCharacter}</CardCastAsCharacter>}
        </CardCastInfo>
      </div>
    </CardCast>
  );
};
