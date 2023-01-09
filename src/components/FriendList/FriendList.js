import PropTypes from 'prop-types';
import { FriendtList, FriendsListItem, UserOnline, UserOffline } from './FriendList.styled';


export default function FriendList({friends}) {
    return <FriendtList>{friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendsListItem>
        {isOnline ? <UserOnline /> : <UserOffline />}
         <img src={avatar} alt="User avatar" width="60" />
            <p>{name}</p>
          </FriendsListItem>
        );
    })}</FriendtList>;
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};