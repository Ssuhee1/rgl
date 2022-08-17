import dynamic from 'next/dynamic';
import React from 'react';
import MoveableDrag from '../../components/moveable-drag1';
import MoveableDrag2 from '../../components/moveable-drag2';
import MoveableDrag3 from '../../components/moveable-drag3';
import MoveabelResize from '../../components/moveable-resize';
import MoveableWarpable from '../../components/moveable-warpable';

const MoveablePage = () => {
  return (
    <>
      <div className='d-flex  flex-wrap'>
        <div className='w-50'>
          <MoveabelResize />
        </div>
        <div className='w-50'>
          <MoveableDrag />
        </div>
      </div>
      <div className='d-flex  flex-wrap'>
        <div className='w-50'>
          <MoveableWarpable />
        </div>
        <div className='w-50'>
          <MoveableDrag2 />
        </div>
      </div>
      <div className='d-flex  flex-wrap'>
        <div className='w-50'>
          <MoveableDrag3 />
        </div>
        <div className='w-50'></div>
      </div>
    </>
  );
};

export default MoveablePage;
