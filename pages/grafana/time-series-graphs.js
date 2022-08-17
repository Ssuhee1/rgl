import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const SimpleGraph = dynamic(() => import('../../components/simple-graph'), {
  ssr: false,
});
const BarChart = dynamic(() => import('../../components/bar-chart'), {
  ssr: false,
});
const Histogram = dynamic(() => import('../../components/hist'), {
  ssr: false,
});
const Gauge = dynamic(() => import('../../components/gauge'), {
  ssr: false,
});
const GaugeIndic = dynamic(() => import('../../components/gauge1'), {
  ssr: false,
});
const HorizontalCandle = dynamic(() => import('../../components/horizon'), {
  ssr: false,
});

const TimeSeriesGraph = () => {
  return (
    <div className=''>
      <div className='d-flex mb-3 justify-content-between'>
        <div className='w-75 me-2 my-bg rounded d-flex justify-content-center align-items-center'>
          <SimpleGraph />
        </div>
        <div className='w-25 my-bg rounded d-flex justify-content-center align-items-center'>
          <BarChart />
        </div>
      </div>
      <div className='d-flex mb-3 justify-content-between'>
        <div className='w-25 me-2 my-bg rounded d-flex justify-content-center align-items-center'>
          <Histogram />
        </div>
        <div className='w-25 me-2 my-bg rounded d-flex flex-column justify-content-center align-items-center'>
          <div className='w-100 h-50'>
            <Gauge />
          </div>
          <div className='w-100 h-50'>
            <GaugeIndic />
          </div>
        </div>
        <div className='w-50 my-bg rounded d-flex justify-content-center align-items-center'>
          <HorizontalCandle />
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesGraph;
