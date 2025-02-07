import React, { useState } from 'react';
import BalanceSheetTable from './BalanceSheetTable';
import { SectionData } from '../interfaces/BalanceSheetInterfaces';

const Section: React.FC<SectionData> = ({ section, rows }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border rounded-lg shadow-md">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 px-4 py-2 font-semibold cursor-pointer flex justify-between items-center"
      >
        <span>
          {section} <span className="text-sm text-gray-500">({rows.length})</span>
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && <BalanceSheetTable rows={rows} />}
    </div>
  );
};

export default Section;
