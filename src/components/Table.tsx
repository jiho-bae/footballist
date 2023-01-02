import { TABLE_HEADERS } from '../libs/constant';
import { cellWidth } from '../libs/styleFns';
import { MatchType, ScorerType, StandingType } from '../types';
import TableRecord from './TableRecord';

interface TableProps<RecordType> {
  tableType: TableType;
  width?: string;
  height?: string;
  recordHeight?: string;
  isOverflow?: boolean;
  records: RecordType[];
  onClickRecord?: (id: number) => void;
}

export type TableType = 'matches' | 'standings' | 'scorers';

function Table({
  width = 'w-2/5',
  height = 'h-29r',
  recordHeight = 'h-26r',
  tableType,
  isOverflow = false,
  records,
  onClickRecord,
}: TableProps<MatchType | StandingType | ScorerType>) {
  const CNT_OF_PRELOAD_LOGO = 10;

  return (
    <section className={`text-2xl ${width} ${height}`}>
      <div className={`flex gap-3 border bg-title-gray p-1 text-center ${isOverflow ? 'pr-6' : null}`}>
        {TABLE_HEADERS[tableType].map((header) => (
          <div key={header} className={`${cellWidth(tableType, header)}`}>
            {header}
          </div>
        ))}
      </div>
      <ul className={`text-center ${recordHeight} ${isOverflow ? 'overflow-auto' : null}`}>
        {records.map((record, idx) => (
          <TableRecord
            key={`${tableType}${idx}`}
            record={record}
            tableType={tableType}
            rank={idx + 1}
            isLazy={idx >= CNT_OF_PRELOAD_LOGO}
            onClickRecord={onClickRecord}
          />
        ))}
      </ul>
    </section>
  );
}

export default Table;
