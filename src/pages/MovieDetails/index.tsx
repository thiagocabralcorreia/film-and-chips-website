import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CastCard } from '../../components/CastCard';
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
  MovieContentRating,
  MovieNumericalData,
  MoviePlot,
  MovieInfo,
  MoviePoster,
  MovieSectionTitle,
  MovieCast,
  LoadingContainer
} from './styles';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(id));
    return () => {
      dispatch(removeAsyncMovieDetails());
    }
  }, [dispatch, id]);
  
  return (
    <MovieContainer>
      {Object.keys(data).length === 0 ? (
        <LoadingContainer>
          <p>Loading...</p>
        </LoadingContainer>
      ) : (
        <>
          <MovieGrid>
            <MoviePoster src={data.image} alt={data.title} />
            <div>
              <MovieTitle>{data.title.toUpperCase()}</MovieTitle>
              <MovieNumbers>
                {
                  data?.contentRating && (
                    <MovieContentRating>
                      {data.contentRating}
                    </MovieContentRating>
                  )
                }
                {
                  data?.imDbRating && (
                    <MovieNumericalData>
                      IMDB Rating: {data?.imDbRating} <span>|</span>
                    </MovieNumericalData>
                  )
                }
                <MovieNumericalData>
                  Runtime: {data.runtimeStr}
                </MovieNumericalData>
                <MovieNumericalData>
                  <span>|</span>Year: {data.year}
                </MovieNumericalData>
              </MovieNumbers>
              <MoviePlot>{data.plot}</MoviePlot>
              <div>
                <MovieInfo>
                  <span>Director</span>
                  <span>{data.directors}</span>
                </MovieInfo>
                <MovieInfo>
                  <span>Writer</span>
                  <span>{data.writers}</span>
                </MovieInfo>
                <MovieInfo>
                  <span>Genres</span>
                  <span>{data.genres}</span>
                </MovieInfo>
                <MovieInfo>
                  <span>Languages</span>
                  <span>{data.languages}</span>
                </MovieInfo>
              </div>
            </div>
          </MovieGrid>
          <MovieSectionTitle><span> | </span>CAST</MovieSectionTitle>
          <MovieCast>
            {data.actorList.map((star) => {
              return <CastCard key={star.id} star={star} />
            })
            }
          </MovieCast>
        </>
      )}
    </MovieContainer>
  )
};

export default MovieDetails;
