import PropTypes from 'prop-types';
import Button from '../../../components/button';
import { StyledContainer, StyledTitle, StyledList } from './styles';
import { ReactComponent as Arrow } from '../../../assets/images/icons/arrow.svg';
import MovieCard from '../../../components/movie-card';

function PopularList({ movies }) {
  return (
    <StyledContainer>
      <div>
        <StyledTitle>
          Ver:&nbsp;
          <Button text="Populares" icon={Arrow} iconEnd variant="transparent" />
        </StyledTitle>
        <StyledList>
          {movies.map((movie) => {
            const {
              title,
              vote_average: rate,
              release_date: release,
              backdrop500FullPath,
            } = movie;
            return (
              <MovieCard
                key={movie.id}
                title={title}
                rate={rate}
                release={release}
                backgroundImage={backdrop500FullPath}
              />
            );
          })}
        </StyledList>
      </div>
    </StyledContainer>
  );
}

PopularList.propTypes = {
  movies: PropTypes.arrayOf(Object),
};

PopularList.defaultProps = {
  movies: [],
};

export default PopularList;
