import { Link, useLocation } from 'react-router-dom';

import { PAGES, PAGE_PATH, PAGE_NAME } from '../libs/constant';
import { indexOfPathname } from '../libs/utilFns';

function Header() {
  const { pathname } = useLocation();
  const pathIdx = indexOfPathname(pathname);

  return (
    <div className="font-mono px-7 py-3 h-24 flex justify-between">
      <div className="cursor-pointer h-full text-6xl font-bold">
        <Link to={PAGE_PATH.home}>Footballist ⚽️</Link>
      </div>
      <nav>
        <ul className="flex justify-between items-center h-full">
          <div className="flex justify-between items-center text-3xl gap-5 h-full">
            {PAGES.map((page, idx) => (
              <li
                key={[page, idx].join('-')}
                className={`h-full leading-loose ${idx === pathIdx ? 'border-b-2 border-main-blue' : null}`}
              >
                <Link className="inline-block h-full" to={PAGE_PATH[page]}>
                  {PAGE_NAME[page]}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
