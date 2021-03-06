import styled from 'styled-components/macro';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

export const HomePage = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  width: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-size: contain;
    flex-direction: column;
    justify-content: center;
  }

  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }

  .background__copy {
    opacity: 0.3;
  }

  .content__title {
    top: 10%;
    font-family: 'metropolis-regular', sans-serif;
    font-size: 1.8rem;
    font-weight: normal;
    mix-blend-mode: screen;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 2rem 0 11rem;
    z-index: 1;
    text-align: center;
    color: ${Colors.white};
    position: relative;
    letter-spacing: 0.2rem;
    span {
      color: ${Colors.madlabPrimary};
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 3rem;
    flex-wrap: nowrap;
    justify-content: space-between;
    .content__title {
      font-size: 2.8rem;
      text-align: left;
      max-width: 600px;
      margin: 0;
    }
  }
`;

export const HomeLeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 100%;
  flex-wrap: wrap;
  min-width: 65%;
  @media screen and (max-width: 768px) {
    min-height: auto;
    text-align: center;
  }
`;

export const HomeRightContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  min-height: 100%;
  flex-wrap: wrap;
  z-index: 1;
  padding-bottom: 3rem;
  padding-right: 3rem;
  text-align: right;
  @media screen and (max-width: 768px) {
    min-height: auto;
    text-align: center;
    padding: 0.8rem;
  }
  .title-blurb {
    font-family: 'metropolis-regular';
    font-size: 1rem;
    display: block;
    float: right;
    line-height: 0.2;
    letter-spacing: 0.1rem;
    color: ${Colors.white};
    z-index: 1;
    margin-bottom: 0.8rem;
    clear: both;
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 0.8rem;
      float: none;
    }
  }
  .desc {
    display: block;
    max-width: 500px;
    float: right;
    font-family: 'metropolis-light';
    font-size: 1rem;
    line-height: 1.8em;
    z-index: 1;
    color: ${Colors.whiteLight};
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 0.8rem;
      float: none;
    }
  }
`;
