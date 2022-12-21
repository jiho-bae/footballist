import { TABLE_HEADERS } from '../libs/constant';
import { headerWidth } from '../libs/styleFns';
import { ScorerType, StandingType } from '../types';
import TableRecord from './TableRecord';

interface TableProps<RecordType> {
  tableType: TableType;
  isOverflow?: boolean;
  records: RecordType[];
}

export type TableType = 'standings' | 'scorers';

function Table({ tableType, isOverflow = false, records }: TableProps<StandingType | ScorerType>) {
  return (
    <section className="text-2xl w-2/5 h-29r">
      <div className={`flex gap-3 border bg-title-gray p-1 text-center ${isOverflow ? 'pr-6' : null}`}>
        {TABLE_HEADERS[tableType].map((header) => (
          <div key={header} className={`w-${tableType}-${headerWidth(header)}`}>
            {header}
          </div>
        ))}
      </div>
      <ul className={`text-center h-26r ${isOverflow ? 'overflow-auto' : null}`}>
        {records.map((record, idx) => (
          <TableRecord key={`${tableType}${idx}`} record={record} tableType={tableType} rank={idx + 1} />
        ))}
      </ul>
    </section>
  );
}

export default Table;
