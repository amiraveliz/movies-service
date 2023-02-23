import PropTypes from 'prop-types';
import {
  StyledCard,
  StyledTitle,
  StyledRate,
  StyledRelease,
  StyledPlayIcon,
} from './styles';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';

function MovieCard({ title, backgroundImage, rate, release }) {
  const releaseYear = new Date(release).getFullYear().toString();
  return (
    <StyledCard backgroundImage={backgroundImage}>
      <StyledTitle>{title}</StyledTitle>
      <StyledPlayIcon />
      {rate && (
        <StyledRate>
          <Star />
          &nbsp;{rate}
        </StyledRate>
      )}
      {release && <StyledRelease>{releaseYear}</StyledRelease>}
    </StyledCard>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  rate: PropTypes.number,
  release: PropTypes.string,
};

MovieCard.defaultProps = {
  rate: undefined,
  release: undefined,
};

export default MovieCard;
