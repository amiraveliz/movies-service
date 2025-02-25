import PropTypes from 'prop-types';
import { ReactComponent as Play } from '../../../assets/images/icons/play.svg';
import { ReactComponent as Plus } from '../../../assets/images/icons/plus.svg';
import Button from '../../../components/button/index';

import {
  StyledContainer,
  StyledActions,
  StyledSubtitle,
  StyledTitle,
} from './styles';

function FeaturedDetails({ title }) {
  return (
    <StyledContainer>
      <StyledSubtitle>
        ORIGINAL DE<span>&nbsp;ASTRAL CINE</span>
      </StyledSubtitle>
      <StyledTitle>{title}</StyledTitle>
      <StyledActions>
        <Button text="Reproducir" icon={Play} />
        <Button text="Mi lista" icon={Plus} variant="outlined" />
      </StyledActions>
    </StyledContainer>
  );
}

FeaturedDetails.propTypes = {
  title: PropTypes.string,
};

FeaturedDetails.defaultProps = {
  title: '',
};

export default FeaturedDetails;
