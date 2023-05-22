import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { ListItem, StatusImg, NameFriend } from './FriendList.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <ListItem>
      <StatusImg isOnline={isOnline}>
        <GrStatusGoodSmall />
      </StatusImg>
      <img src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
