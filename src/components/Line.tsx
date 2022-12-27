interface LineProps {
  thick?: string;
  color?: string;
}

function Line({ thick = 'border-b', color = 'text-main-gray' }: LineProps) {
  return <div className={`w-full h-1 mb-1 border-solid ${thick} ${color}`}></div>;
}

export default Line;
