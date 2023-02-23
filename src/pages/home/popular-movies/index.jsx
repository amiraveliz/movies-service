import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledContainer, StyledTitle, StyledList } from './styles';
import MovieCard from '../../../components/movie-card';
import Dropdown from '../../../components/dropdown';

const WATCH_OPTIONS = [
  { id: 'popular', label: 'Populares' },
  { id: 'myList', label: 'Mis películas' },
];

function PopularList({ popular, myMovies }) {
  const [watchList, setWatchList] = useState(popular);

  const handleUpdateWatchList = (option) => {
    let list;
    switch (option.id) {
      case 'myList':
        list = myMovies;
        break;
      default:
        list = popular;
        break;
    }
    setWatchList(list);
  };

  return (
    <StyledContainer>
      <div>
        <StyledTitle>
          Ver:&nbsp;
          <Dropdown
            options={WATCH_OPTIONS}
            defaultOption={WATCH_OPTIONS[0]}
            onChange={handleUpdateWatchList}
          />
        </StyledTitle>
        <StyledList>
          {watchList.map((movie) => {
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
  popular: PropTypes.arrayOf(Object),
  myMovies: PropTypes.arrayOf(Object),
};

PopularList.defaultProps = {
  popular: [],
  myMovies: [],
};

export default PopularList;
