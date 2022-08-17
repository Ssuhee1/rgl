import React from 'react';
import { Plot } from '../utlis/plot';

const GaugeIndic = ({ width, height }) => {
  return (
    <div className='gauge-parent' style={{ border: '2px solid orange' }}>
      <Plot
        data={[
          {
            type: 'indicator',
            mode: 'number+delta',
            value: 400,
            number: { prefix: '$' },
            delta: { position: 'top', reference: 320 },
            domain: { x: [0, 1], y: [0, 1] },
          },
        ]}
        layout={{
          paper_bgcolor: 'lightgray',
          height: height ? height : 240,
          width: width,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          font: {
            color: 'white',
          },
        }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default GaugeIndic;
