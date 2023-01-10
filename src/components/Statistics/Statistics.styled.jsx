import styled from '@emotion/styled';
import getRandomColor from '../utils/randomColor';

export const StatisticsSection = styled.section`
  width: 600px;
  padding: 30px 60px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  /* background-color: ${getRandomColor()}; */
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DataSpan = styled.span`
  text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
`;