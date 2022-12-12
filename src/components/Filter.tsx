import { REST_DATE } from '../libs/constant';
import { getPrevDateFromToday } from '../libs/utilFns';

function Filter({
  prevDates,
  onChange,
}: {
  prevDates: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div className="flex justify-end mb-4">
      <select className="cursor-pointer text-3xl outline-none" onChange={onChange}>
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
