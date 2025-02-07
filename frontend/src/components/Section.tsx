import React, { useState } from 'react';
import BalanceSheetTable from './BalanceSheetTable';
import { SectionData } from '../interfaces/BalanceSheetInterfaces';

const Section: React.FC<SectionData> = ({ section, rows }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 px-4 py-2 font-semibold cursor-pointer flex justify-between items-center"
      >
        <span>
          {section} <span className="text-sm text-gray-500">({rows.length})</span>
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'} transition-max-height duration-300 ease-in-out`}>
        {isOpen && <BalanceSheetTable rows={rows} />}
      </div>
    </div>
  );
};

export default Section;
