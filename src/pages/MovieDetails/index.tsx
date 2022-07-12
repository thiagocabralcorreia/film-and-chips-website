import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CastCard } from '../../components/CastCard';
import { MovieCard } from '../../components/MovieCard';
import { Slider } from '../../components/Slider';
import { AppDispatch } from '../../features/store';
import { Loading } from '../../components/Loading';

import {
  getSelectedMovie,
  fetchAsyncMovieDetails,
  removeAsyncMovieDetails
} from '../../features/movies/movieSlice';

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
  MarginRight
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
        <Loading />
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
          <MovieSectionTitle><span> | </span>CAST & CREW</MovieSectionTitle>
          <Slider>
            {data.actorList.map((star) => {
              return (
                <MarginRight>
                  <CastCard key={star.id} star={star} />
                </MarginRight>
              )
            })
            }
          </Slider>
          <MovieSectionTitle><span> | </span>RECOMMENDATIONS</MovieSectionTitle>
          <Slider>
            {data.similars.map((movie) => {
              return (
                <MarginRight>
                  <MovieCard key={movie.id} data={movie} />
                </MarginRight>
              )
            })
            }
          </Slider>
        </>
      )}
    </MovieContainer>
  )
};

export default MovieDetails;
