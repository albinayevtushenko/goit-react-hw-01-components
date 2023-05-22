import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionHead,
  TransactionLine,
  LineItem,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <tr>
        <TransactionHead>Type</TransactionHead>
        <TransactionHead>Amount</TransactionHead>
        <TransactionHead>Currency</TransactionHead>
      </tr>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionLine key={id}>
            <LineItem>{type}</LineItem>
            <LineItem>{amount}</LineItem>
            <LineItem>{currency}</LineItem>
          </TransactionLine>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
