import { REST_DATE } from '../libs/constant';
import { getPrevDateFromToday } from '../libs/utilFns';

function Filter({
  prevDates,
  selectedDate,
  onChange,
}: {
  prevDates: string[];
  selectedDate: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div className="flex justify-end mb-4">
      <select className="cursor-pointer text-3xl" onChange={onChange} defaultValue={selectedDate}>
        {prevDates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
        <option value={REST_DATE}>{`~ ${getPrevDateFromToday(7)}`}</option>
      </select>
    </div>
  );
}

export default Filter;
