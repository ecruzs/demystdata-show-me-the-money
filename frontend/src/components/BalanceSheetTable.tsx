import React from 'react';

interface Row {
  Title: string;
  Amount: number;
}

interface BalanceSheetTableProps {
  rows: Row[];
}

const BalanceSheetTable: React.FC<BalanceSheetTableProps> = ({ rows }) => {
  return (
    <table border={1} style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.Title}</td>
            <td>{row.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BalanceSheetTable;
