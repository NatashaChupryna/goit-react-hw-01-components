import styled from '@emotion/styled';

export const Table = styled.table`
  width: 1000px;
  text-align: center;
  box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
    rgb(0 0 0 / 30%) 0px 30px 60px -30px,
    rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
    
`;
export const TableHead = styled.th`
  padding: 20px 0;
  background-color: #dedede;
  border: 1px solid rgb(191 191 191);
`;
export const TableRow = styled.tr`
  border: 1px solid black;
  padding: 20px 10px;

  &:nth-child(2n) {
    background-color: #dedede;
  }
`;

export const TableData = styled.td`
    padding: 10px 15px;
        border: 1px solid rgb(191 191 191);
    
`