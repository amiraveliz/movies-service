import PropTypes from 'prop-types';
import { StyledContainer, StyledTitle, StyledList } from './styles';
import MovieCard from '../../../components/movie-card';
import Dropdown from '../../../components/dropdown';

function PopularList({ movies }) {
  return (
    <StyledContainer>
      <div>
        <StyledTitle>
          Ver:&nbsp;
          <Dropdown
            options={[
              { id: 'popular', label: 'Populares' },
              { id: 'myList', label: 'Mi lista' },
            ]}
            defaultOption={{ id: 'popular', label: 'Populares' }}
          />
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
