import { CELL_WIDTH_STYLES } from './styleConstant';

export function cellWidth(tableType: string, cellName: string) {
  const cellWidthStyle = CELL_WIDTH_STYLES[tableType];
  if (!cellWidthStyle) return null;

  return cellWidthStyle[cellName] ?? cellWidthStyle['나머지'];
}

export function cls(...classNames: Array<string | null>) {
  return classNames.join(' ');
}
