import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getSelectedMovie,
  fetchAsyncMovieDetails,
  removeAsyncMovieDetails
} from '../../features/movies/movieSlice';
import { AppDispatch } from '../../features/store';

import {
  MovieContainer,
  MovieGrid,
  MovieTitle,
  MovieNumbers,
  MovieNumericalData,
  MoviePlot,
  MovieInfo,
  LoadingContainer
} from './styles';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(imdbID));    
    return () => {
      dispatch(removeAsyncMovieDetails());
    }
  }, [dispatch, imdbID]);
  
  return (
    <MovieContainer>
      {Object.keys(data).length === 0 ? (
        <LoadingContainer>
          <p>Loading...</p>
        </LoadingContainer>
      ) : (
        <MovieGrid>
          <div>
            <MovieTitle>{data.Title.toUpperCase()}</MovieTitle>
            <MovieNumbers>
              <MovieNumericalData>
                IMDB Rating: {data.imdbRating}
              </MovieNumericalData>
              <MovieNumericalData>
                <span>|</span>IMDB Votes: {data.imdbVotes}
              </MovieNumericalData>
              <MovieNumericalData>
                <span>|</span>Runtime: {data.Runtime}
              </MovieNumericalData>
              <MovieNumericalData>
                <span>|</span>Year: {data.Year}
              </MovieNumericalData>
            </MovieNumbers>
            <MoviePlot>{data.Plot}</MoviePlot>
            <div>
              <MovieInfo>
                <span>Director</span>
                <span>{data.Director}</span>
              </MovieInfo>
              <MovieInfo>
                <span>Cast</span>
                <span>{data.Actors}</span>
              </MovieInfo>
              <MovieInfo>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </MovieInfo>
              <MovieInfo>
                <span>Languages</span>
                <span>{data.Language}</span>
              </MovieInfo>
              <MovieInfo>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </MovieInfo>
            </div>
          </div>
          <div>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </MovieGrid>
      )}
    </MovieContainer>
  )
};

export default MovieDetails;
