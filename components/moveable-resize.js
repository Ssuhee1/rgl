import dynamic from 'next/dynamic';
import * as React from 'react';
import Moveable from 'react-moveable';

const Histogram = dynamic(() => import('./hist'), { ssr: false });

const MoveableResize = () => {
  const [width, setWidth] = React.useState(null);
  const [height, setHeight] = React.useState(null);

  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
    translate: [0, 0],
  });
  React.useEffect(() => {
    setTarget(document.querySelector('.target-resize'));
  }, []);
  return (
    <div className='container'>
      <div className='target-resize'>
        <Histogram width={width} height={height} />
      </div>
      <Moveable
        target={target}
        resizable={true}
        keepRatio={false}
        throttleResize={1}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        edge={false}
        zoom={1}
        origin={false}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        onResizeStart={(e) => {
          e.setOrigin(['%', '%']);
          e.dragStart && e.dragStart.set(frame.translate);
        }}
        onResize={(e) => {
          const beforeTranslate = e.drag.beforeTranslate;

          frame.translate = beforeTranslate;
          setWidth(e.width);
          setHeight(e.height);
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;

          e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
        }}
      />
    </div>
  );
};
export default MoveableResize;
