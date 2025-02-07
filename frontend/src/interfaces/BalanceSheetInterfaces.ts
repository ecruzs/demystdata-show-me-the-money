export interface Cell {
  Value: string;
}

export interface Row {
  RowType: string;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

export interface Report {
  Rows: Row[];
}

export interface SectionData {
  section: string;
  rows: Row[];
}
