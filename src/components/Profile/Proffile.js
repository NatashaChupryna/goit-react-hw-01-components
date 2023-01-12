import PropTypes from 'prop-types';
import { FaMapPin } from '@react-icons/all-files/fa/FaMapPin';
import {
  Card,
  Name,
  StatisticList,
  StatisticListItem,
  Nickname,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Nickname>@{tag}</Nickname>
        <p>
          {' '}
          <FaMapPin /> {location}
        </p>
      </div>

      <StatisticList>
        <StatisticListItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatisticListItem>
        <StatisticListItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatisticListItem>
        <StatisticListItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatisticListItem>
      </StatisticList>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
