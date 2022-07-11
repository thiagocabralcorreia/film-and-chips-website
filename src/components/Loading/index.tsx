import BarLoader from 'react-spinners/BarLoader';
import { LoadingContainer } from './styles';

export const Loading = () => {
 
  return (
    <LoadingContainer>
      <BarLoader
        color="#ffc107"
        height={8}
      />
    </LoadingContainer>)
};
