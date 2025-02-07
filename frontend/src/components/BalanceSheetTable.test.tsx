import { render, screen } from '@testing-library/react';
import BalanceSheetTable from './BalanceSheetTable';
import { describe, it, expect } from 'vitest';

describe('BalanceSheetTable', () => {
  it('renders table headers correctly', () => {
    render(<BalanceSheetTable rows={[]} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
  });

  it('renders table rows correctly', () => {
    const rows = [{ Title: 'Assets', Amount: 50000 }];
    render(<BalanceSheetTable rows={rows} />);
    expect(screen.getByText('Assets')).toBeInTheDocument();
    expect(screen.getByText('50000')).toBeInTheDocument();
  });
});
