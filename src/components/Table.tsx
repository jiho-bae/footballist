import { TABLE_HEADERS } from '../libs/constant';
import { headerWidth } from '../libs/styleFns';

interface TableProps<RecordType> {
  tableType: TableType;
  isOverflow?: boolean;
  records: RecordType[];
}

type TableType = 'standings' | 'scorers';

function Table<RecordType>({ tableType, isOverflow = false, records }: TableProps<RecordType>) {
  return (
    <section className="text-2xl w-2/5 h-29r">
      <div className={`flex gap-3 border bg-title-gray p-1 text-center ${isOverflow ? 'pr-6' : null}`}>
        {TABLE_HEADERS[tableType].map((header) => (
          <div key={header} className={`w-${tableType}-${headerWidth(header)}`}>
            {header}
          </div>
        ))}
      </div>
      <ul className={`text-center h-26r ${isOverflow ? 'overflow-auto' : null}`}></ul>
    </section>
  );
}

export default Table;
