import dynamic from 'next/dynamic';
import * as React from 'react';
import Moveable from 'react-moveable';
const Gauge = dynamic(() => import('./gauge'), { ssr: false });

const MoveableDrag = () => {
  const [width, setWidth] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
    translate: [0, 0],
    rotate: 0,
    transformOrigin: '50% 50%',
  });
  React.useEffect(() => {
    setTarget(document.querySelector(`.target-drag`));
  }, []);

  return (
    <div className='container'>
      <div className={`target-drag`}>
        <Gauge width={width} height={height} />
      </div>
      <Moveable
        // Resize
        resizable={true}
        keepRatio={false}
        throttleResize={1}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        edge={false}
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
        target={target}
        originDraggable={true}
        originRelative={true}
        draggable={true}
        throttleDrag={0}
        startDragRotate={0}
        throttleDragRotate={0}
        zoom={1}
        origin={false}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        rotatable={true}
        throttleRotate={0}
        rotationPosition={'top'}
        onDragOriginStart={(e) => {
          e.dragStart && e.dragStart.set(frame.translate);
        }}
        onDragOrigin={(e) => {
          frame.translate = e.drag.beforeTranslate;
          frame.transformOrigin = e.transformOrigin;
        }}
        onDragStart={(e) => {
          e.set(frame.translate);
        }}
        onDrag={(e) => {
          frame.translate = e.beforeTranslate;
        }}
        onRotateStart={(e) => {
          e.set(frame.rotate);
        }}
        onRotate={(e) => {
          frame.rotate = e.beforeRotate;
        }}
        onRender={(e) => {
          const { translate, rotate, transformOrigin } = frame;
          e.target.style.transformOrigin = transformOrigin;
          e.target.style.transform =
            `translate(${translate[0]}px, ${translate[1]}px)` +
            ` rotate(${rotate}deg)`;
        }}
      />
    </div>
  );
};
export default MoveableDrag;
