import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Report, Row, SectionData } from '../interfaces/BalanceSheetInterfaces';

const extractRows = (rows: Row[]): SectionData[] => {
  const result: SectionData[] = [];

  rows.forEach((row) => {
    if (row.RowType === 'Section' && row.Rows) {
      result.push({
        section: row.Title || 'Untitled Section',
        rows: row.Rows.filter((subRow) => subRow.RowType === 'Row'),
      });
    }
  });

  return result;
};

const useBalanceSheet = () => {
  const [data, setData] = useState<SectionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ Reports: Report[] }>(
          `${import.meta.env.VITE_API_URL}/balancesheet`
        );
        const reportRows = response.data.Reports[0].Rows;
        const extractedRows = extractRows(reportRows);
        setData(extractedRows);
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          setError(`Failed to fetch balance sheet data: ${err.message}`);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useBalanceSheet;
