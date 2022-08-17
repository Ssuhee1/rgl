import React from 'react';
import { Plot } from '../utlis/plot';

const Gauge = ({ width, height }) => {
  return (
    <Plot
      className='gauge-chart'
      data={[
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: 450,
          title: { text: 'Speed' },
          type: 'indicator',
          mode: 'gauge+number',
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 500] } },
        },
      ]}
      layout={{
        autosize: true,
        width: width,
        height: height ? height : null,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
          color: 'white',
        },
      }}
      config={{ responsive: true }}
      onUpdate={(e) => {
        console.log(e);
      }}
    />
  );
};

export default Gauge;
