import PropTypes from 'prop-types';
import {
  Table,
  TableRow,
  TableBody,
  TableData,
  TableHead,
} from './TransactionHistory.styled.jsx';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TableBody key={id}>
            <TableRow>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          </TableBody>
        );
      })}
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
