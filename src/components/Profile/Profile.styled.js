import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  border: 1px solid grey;
  width: 350px;
  border-radius: 10px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
  }
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const CardInfo = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardFoto = styled.img`
  border-radius: 50%;
`;

export const CardTitle = styled.p`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

export const CardText = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  color: gray;
`;

export const StatList = styled.ul`
  display: flex;
  background-color: whitesmoke;
  border-top: 1px solid lightgrey;
  margin: 0px;
  padding: 0px;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 24px;
  color: grey;
  text-align: center;
`;

export const StatsCount = styled.span`
  font-weight: 800;
  color: black;
  margin-top: 5px;
`;
