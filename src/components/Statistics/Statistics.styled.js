import styled from 'styled-components';
import { getRandomHexColor } from './GetRandomHexColor';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 520px;
  margin-top: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
  }
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: #dce6e5;
`;
export const Title = styled.h2`
  color: black;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  width: 96px;
  color: white;
  text-shadow: 1px 1px 2px #0a0000, 0 0 1em #0e14ad, 0 0 0.2em #21041e;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Parcentage = styled.span`
  font-size: 24px;
  font-weight: 500;
`;
