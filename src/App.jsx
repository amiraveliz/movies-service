import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledContainer from './style';
import Theme from './theme';
import { getFeaturedMovie, getPopularMovies } from './slices/movies';

function App() {
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const featuredMovie = useSelector((state) => state.movies.featuredMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getFeaturedMovie());
  }, [dispatch]);

  console.log(popularMovies, featuredMovie, '### movies');

  return (
    <Theme>
      <StyledContainer>
        <h1>Liteflix</h1>
      </StyledContainer>
    </Theme>
  );
}

export default App;
