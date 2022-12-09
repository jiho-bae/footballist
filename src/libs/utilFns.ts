import { PAGE_PATH } from './constant';

export function dateToLocaleString(date: string) {
  return new Date(date).toLocaleDateString();
}

export function indexOfPathname(pathname: string) {
  return Object.values(PAGE_PATH).indexOf(pathname);
}
