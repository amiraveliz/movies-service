import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledContainer from './styles';

import { getFeaturedMovie, getPopularMovies } from '../../slices/movies';
import Loader from '../../components/loader/index';
import FeaturedDetails from './featured-details';
import PopularMovies from './popular-movies';

function Home() {
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const myMovies = useSelector((state) => state.movies.myMovies);
  const { title, backdropFullPath: backgroundImage } = useSelector(
    (state) => state.movies.featuredMovie
  );
  const isLoading = useSelector((state) => state.movies.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getFeaturedMovie());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StyledContainer backgroundImage={backgroundImage}>
      <FeaturedDetails title={title} />
      <PopularMovies popular={popularMovies} myMovies={myMovies} />
    </StyledContainer>
  );
}

export default Home;
