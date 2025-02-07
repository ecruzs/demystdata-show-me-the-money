import React from 'react';
import useBalanceSheet from './hooks/useBalanceSheet';

const App: React.FC = () => {
  const { data, loading, error } = useBalanceSheet();

  if (loading) return <div className="text-center mt-10 text-xl">Loading Balance Sheet...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Balance Sheet Report</h1>
      {data.map((sectionData, index) => (
        <div key={index} className="mb-6 border rounded-lg shadow-sm">
          <div className="bg-gray-200 px-4 py-2 font-semibold">
            {sectionData.section}
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Current Period</th>
                <th className="border border-gray-300 px-4 py-2">Previous Period</th>
              </tr>
            </thead>
            <tbody>
              {sectionData.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{row.Cells?.[0]?.Value}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.Cells?.[1]?.Value}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.Cells?.[2]?.Value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default App;
