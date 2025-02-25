import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';

export const StyledLogo = styled(Logo)`
  width: 161px;
  height: 55px;
  fill: ${(props) => props.theme.primary};
`;

export default StyledLogo;
