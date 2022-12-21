import { HEADER_NAME_STYLES } from './constant';

export function headerWidth(headerName: string) {
  return HEADER_NAME_STYLES[headerName] ?? HEADER_NAME_STYLES['나머지'];
}
