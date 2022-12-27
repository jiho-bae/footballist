interface SpaceProps {
  width?: string;
  height?: string;
}

function Space({ width = '6', height = '6' }: SpaceProps) {
  return <div className={`w-${width} h-${height}`}></div>;
}

export default Space;
