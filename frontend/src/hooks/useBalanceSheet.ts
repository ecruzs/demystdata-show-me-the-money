import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface Cell {
  Value: string;
}

interface Row {
  RowType: string;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

interface Report {
  Rows: Row[];
}

const extractRows = (rows: Row[]): { section: string; rows: Row[] }[] => {
  const result: { section: string; rows: Row[] }[] = [];

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
  const [data, setData] = useState<{ section: string; rows: Row[] }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ Reports: Report[] }>('http://localhost:3001/balancesheet');
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
