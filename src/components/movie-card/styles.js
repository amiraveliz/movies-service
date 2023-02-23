import styled from 'styled-components';
import PlayMovie from '../../assets/images/icons/play-movie.svg';
import PlayMovieHover from '../../assets/images/icons/play-movie-hover.svg';
import Breakpoints from '../../global-styles/breakpoints';

export const StyledTitle = styled.span`
  text-align: center;
  display: block;
  padding-top: 95px;
  max-width: 160px;
  margin: 0 auto;
  transition: all 100ms ease-in-out;
  @media (max-width: ${Breakpoints.screenMd}) {
    text-align: center;
  }
`;

export const StyledRate = styled.span`
  display: none;
  position: absolute;
  bottom: 6px;
  left: 16px;
`;

export const StyledRelease = styled.span`
  display: none;
  position: absolute;
  bottom: 6px;
  right: 16px;
`;

export const StyledPlayIcon = styled.span`
  background-image: url(${PlayMovie});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${Breakpoints.screenMd}) {
    text-align: center;
    max-width: 100%;
    top: 43%;
  }

  &:hover {
    background-image: url(${PlayMovieHover});
    cursor: pointer;
  }
`;

export const StyledCard = styled.div`
  font-size: 16px;
  position: relative;
  width: 210px;
  height: 130px;
  border-radius: 4px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 22.78%,
      #000000 122.69%
    ),
    url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 8px;
  transition: all 1s ease-in-out;
  animation: fade-in-slide-up 5s forwards ease-in-out;

  @keyframes fade-in-slide-up {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background-image: linear-gradient(
        0deg,
        rgba(36, 36, 36, 0.7),
        rgba(36, 36, 36, 0.7)
      ),
      url(${(props) => props.backgroundImage});
  }

  &:hover ${StyledTitle} {
    transform: translate(20%, -32%);
    max-width: 146px;
    text-align: left;
    transition: all 400ms ease-in-out;
    @media (max-width: ${Breakpoints.screenMd}) {
      position: absolute;
      bottom: 32px;
      left: 18px;
      max-width: 300px;
      transform: initial;
    }
  }

  &:hover ${StyledRelease} {
    display: block;
  }

  &:hover ${StyledRate} {
    display: block;
  }

  &:hover ${StyledPlayIcon} {
    top: 50%;
    left: 32px;
    @media (max-width: ${Breakpoints.screenMd}) {
      top: 77%;
    }
    @media (max-width: ${Breakpoints.screenSm}) {
      top: 65%;
    }
    @media (max-width: ${Breakpoints.screenXs}) {
      top: 50%;
    }
  }

  @media (max-width: ${Breakpoints.screenMd}) {
    width: 100%;
    height: 100%;
    aspect-ratio: 15 / 10;
    display: flex;
    align-items: center;
  }
`;
