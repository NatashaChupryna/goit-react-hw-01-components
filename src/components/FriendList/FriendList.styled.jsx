import styled from '@emotion/styled';

export const FriendtList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  gap: 25px;
  padding: 30px;
  background-color: #dedede;
  width: 1200px;
`;
export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 240px;
  background-color: white;
  padding: 10px 15px;
  box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
    rgb(0 0 0 / 30%) 0px 30px 60px -30px,
    rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
`;

export const UserOnline = styled.span`
  background-color: green;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const UserOffline = styled.span`
  background-color: red;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
