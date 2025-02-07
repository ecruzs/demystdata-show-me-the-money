import { render, screen, fireEvent } from '@testing-library/react';
import Section from '../components/Section';
import { describe, it, expect } from 'vitest';

describe('Section Component', () => {
  it('renders section header correctly', () => {
    render(<Section section="Assets" rows={[]} />);
    expect(screen.getByText('Assets')).toBeInTheDocument();
    expect(screen.getByText('(0)')).toBeInTheDocument();
  });

  it('toggles section visibility on click', () => {
    const rows = [
      {
        RowType: 'Asset',
        Cells: [{ Value: 'Assets' }, { Value: 50000 }],
      },
    ];

    render(<Section section="Assets" rows={rows} />);

    const sectionHeader = screen.queryAllByText('Assets')[0];
    fireEvent.click(sectionHeader);

    expect(screen.getByText('50000')).toBeInTheDocument();

    fireEvent.click(sectionHeader);
    expect(screen.queryByText('50000')).not.toBeInTheDocument(); 
  });
});
