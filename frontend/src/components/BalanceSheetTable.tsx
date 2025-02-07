import React from 'react';
import { Row } from '../interfaces/BalanceSheetInterfaces';

interface BalanceSheetTableProps {
  rows: Row[];
}

const BalanceSheetTable: React.FC<BalanceSheetTableProps> = ({ rows }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 table-fixed">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2">Current Period</th>
          <th className="border border-gray-300 px-4 py-2">Previous Period</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 truncate">{row.Cells?.[0]?.Value}</td>
            <td className="border border-gray-300 px-4 py-2">{row.Cells?.[1]?.Value}</td>
            <td className="border border-gray-300 px-4 py-2">{row.Cells?.[2]?.Value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BalanceSheetTable;
