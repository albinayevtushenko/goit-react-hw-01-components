import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export default function FriendsList({ friends }) {
  return (
    <List>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            />
          </li>
        );
      })}
    </List>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
