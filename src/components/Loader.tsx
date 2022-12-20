import { BallTriangle } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="w-full h-80vh flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
