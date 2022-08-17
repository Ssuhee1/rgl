import * as React from 'react';
import Moveable from 'react-moveable';
import dynamic from 'next/dynamic';
const HorizontalCandle = dynamic(() => import('./horizon'), { ssr: false });

const MoveableWarpable = () => {
  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
    matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  });
  React.useEffect(() => {
    setTarget(document.querySelector('.target-warpable'));
  }, []);
  return (
    <div className='container'>
      <div className='target-warpable'>
        <HorizontalCandle />
      </div>
      <Moveable
        target={target}
        warpable={true}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        edge={false}
        zoom={1}
        origin={true}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        onWarpStart={(e) => {
          e.set(frame.matrix);
        }}
        onWarp={(e) => {
          frame.matrix = e.matrix;
          e.target.style.transform = `matrix3d(${e.matrix.join(',')})`;
        }}
      />
    </div>
  );
};

export default MoveableWarpable;
