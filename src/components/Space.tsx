interface SpaceProps {
  width?: string;
  height?: string;
}

function Space({ width = 'w-6', height = 'h-6' }: SpaceProps) {
  return <div className={`${width} ${height}`}></div>;
}

export default Space;
