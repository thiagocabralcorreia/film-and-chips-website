import { ReactNode } from 'react';
import { ListContainer, ListTitle, ListMovies } from './styles';

interface MoviesListProps {
  title: string,
  children: JSX.Element[] | JSX.Element | undefined
}

export const MoviesList = ({ title, children }: MoviesListProps) => {
  return (
    <ListContainer>
        <ListTitle>{title}</ListTitle>
        <ListMovies>{children}</ListMovies>
    </ListContainer>
  )
};
