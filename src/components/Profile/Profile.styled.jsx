import styled from '@emotion/styled';

export const Card = styled.div`
  padding-top: 24px;
  text-align: center;
  width: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const Name = styled.p`
  font-weight: 900;
`;
export const Nickname = styled.p`
  font-size: 32px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  background-color: #d8d8d8;
  margin: 0;
  padding: 30px 60px;
`;
export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
`;