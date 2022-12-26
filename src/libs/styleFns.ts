import { HEADER_WIDTH_STYLES } from './constant';

export function headerWidthStyle(tableType: string, headerName: string) {
  return HEADER_WIDTH_STYLES[tableType][headerName] ?? HEADER_WIDTH_STYLES[tableType]['나머지'];
}

export function cls(...classNames: Array<string | null>) {
  return classNames.join(' ');
}
