import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedMovie, fetchAsyncMovieDetails } from '../../features/movies/movieSlice';
import { AppDispatch } from '../../features/store';

import {
  MovieContainer,
  MovieGrid,
  MovieTitle,
  MovieRating,
  MoviePlot,
  MovieInfo,
  Icon,
} from './styles';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(imdbID));    
    console.log('movieDetail', data)
  }, [dispatch, imdbID]);
  
  return (
    <MovieContainer>
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <MovieGrid>
          <div>
              <MovieTitle>{data.Title.toUpperCase()}</MovieTitle>
              <MovieRating>
                <span>
                  <Icon className='fa fa-star'></Icon>IMDB Rating: {data.imdbRating}
                </span>
                <span>
                  <Icon className='fa fa-thumbs-up'></Icon>IMDB Votes: {data.imdbVotes}
                </span>
                <span>
                  <Icon className='fa fa-film'></Icon>Runtime: {data.Runtime}
                </span>
                <span>
                  <Icon className='fa fa-calendar'></Icon>Year: {data.Year}
                </span>
            </MovieRating>
            <MoviePlot>{data.Plot}</MoviePlot>
            <div>
              <MovieInfo>
                <span>Director</span>
                <span>{data.Director}</span>
              </MovieInfo>
              <MovieInfo>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </MovieInfo>
              <MovieInfo>
                <span>Generes</span>
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
