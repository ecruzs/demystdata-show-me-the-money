import React, { Suspense } from 'react';
import useBalanceSheet from './hooks/useBalanceSheet';

const Section = React.lazy(() => import('./components/Section'));

const App: React.FC = () => {
  const { data, loading, error } = useBalanceSheet();

  if (loading) return <div className="text-center mt-10 text-xl">Loading Balance Sheet...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <div className="sticky top-0 bg-gray-50 z-0 px-2 py-4 mb-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Balance Sheet Report</h1>
      </div>

      <Suspense fallback={<div>Loading sections...</div>}>
        {data.map((sectionData, index) => (
          <Section key={index} section={sectionData.section} rows={sectionData.rows} />
        ))}
      </Suspense>
    </div>
  );
};

export default App;
