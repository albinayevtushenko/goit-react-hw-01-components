import styled from 'styled-components';

export const List = styled.ul`
  max-width: 400px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #dce6e5;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
  }
`;

export const StatusImg = styled.span`
  color: ${props => (props.isOnline ? 'limegreen' : 'red')};
`;

export const NameFriend = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
