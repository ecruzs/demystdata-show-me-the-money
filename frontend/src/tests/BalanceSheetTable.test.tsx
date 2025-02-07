import { render, screen } from '@testing-library/react';
import BalanceSheetTable from '../components/BalanceSheetTable';
import { describe, it, expect } from 'vitest';

describe('BalanceSheetTable', () => {
  it('renders table headers correctly', () => {
    render(<BalanceSheetTable rows={[]} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Current Period')).toBeInTheDocument();
    expect(screen.getByText('Previous Period')).toBeInTheDocument();
  });

  it('renders table rows correctly', () => {
    const rows = [{ Cells: [{ Value: 'Assets' }, { Value: 50000 }, { Value: 40000 }] }];
    render(<BalanceSheetTable rows={rows} />);
    expect(screen.getByText('Assets')).toBeInTheDocument();
    expect(screen.getByText('50000')).toBeInTheDocument();
    expect(screen.getByText('40000')).toBeInTheDocument();
  });
});
