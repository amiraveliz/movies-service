import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledContainer from './styles';

import { getFeaturedMovie } from '../../slices/movies';
import Loader from '../../components/loader/index';
import FeaturedDetails from './featured-details';

function Home() {
  // const popularMovies = useSelector((state) => state.movies.popularMovies);
  const { title, backdropFullPath: backgroundImage } = useSelector(
    (state) => state.movies.featuredMovie
  );
  const isLoading = useSelector((state) => state.movies.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPopularMovies());
    dispatch(getFeaturedMovie());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StyledContainer backgroundImage={backgroundImage}>
      <FeaturedDetails title={title} />
    </StyledContainer>
  );
}

export default Home;
