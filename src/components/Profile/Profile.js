import PropTypes from 'prop-types';
import {
  ProfileCard,
  CardInfo,
  CardFoto,
  CardTitle,
  CardText,
  StatList,
  StatsItem,
  StatsCount,
} from './Profile.styled';

export default function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileCard key={tag}>
      <CardInfo>
        <CardFoto src={avatar} alt={username} width="160" />
        <CardTitle>{username}</CardTitle>
        <CardText>@{tag}</CardText>
        <CardText>{location}</CardText>
      </CardInfo>
      <StatList>
        <StatsItem>
          <span>Followers </span>
          <StatsCount>{followers}</StatsCount>
        </StatsItem>
        <StatsItem>
          <span>Views </span>
          <StatsCount>{views}</StatsCount>
        </StatsItem>
        <StatsItem>
          <span>Likes </span>
          <StatsCount>{likes}</StatsCount>
        </StatsItem>
      </StatList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
