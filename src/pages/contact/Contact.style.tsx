import styled from 'styled-components/macro';
import { slideInLeft, slideOutLeft } from '../../components/slider/Slider';
import { Colors } from '../../lib/theme/Colors';

export const ContactContainer = styled.div`
  background-color: ${Colors.black};

  color: white;
  min-height: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  overflow-y: scroll;
  width: 100%;
  padding: 3rem;
  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }
  @media screen and (max-width: 768px) {
    padding-top: 4rem;
    min-height: auto;
    text-align: center;
  }
`;

export const ContactLeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 100%;
  flex-wrap: wrap;
  width: 50%;
  @media screen and (max-width: 768px) {
    min-height: auto;
    text-align: center;
  }
`;

export const ContactRightContainer = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 100%;
  flex-wrap: wrap;
  z-index: 1;
  padding-bottom: 3rem;
`;
