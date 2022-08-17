import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGrid = WidthProvider(Responsive);
const Gauge = dynamic(() => import('../../components/gauge'), { ssr: false });

const RGL = () => {
  const [resizing, setResizing] = useState(false);
  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xss: 0 };
  const layouts = {
    lg: [
      {
        i: '1',
        x: 0,
        y: 0,
        w: 6,
        h: 4,
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '3',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
    md: [
      {
        i: '1',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '3',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
    sm: [
      {
        i: '1',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '3',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
    xs: [
      {
        i: '1',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '3',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
    xss: [
      {
        i: '1',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: '3',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
  };
  const cols = { lg: 12, md: 10, sm: 8, xs: 6, xss: 4 };
  return (
    <ResponsiveGrid
      className='layout'
      breakpoints={breakpoints}
      cols={cols}
      rowHeight={50}
      onResizeStop={() => {
        const element = document.getElementById('my-test-div');
        console.log(element.style.height, element.style.width);
      }}
      layouts={layouts}>
      <div id='my-test-div' key='1' style={{ border: '1px solid red' }}>
        <Gauge />
      </div>
      <div key='2' style={{ border: '1px solid red' }}>
        2
      </div>
      <div key='3' style={{ border: '1px solid red' }}>
        3
      </div>
    </ResponsiveGrid>
  );
};

export default RGL;
