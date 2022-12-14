import React from 'react';
import { Plot } from '../utlis/plot';

const HorizontalCandle = () => {
  return (
    <Plot
      data={[
        {
          x: [0.2, 0.2, 0.6, 1, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
          y: [
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
          ],
          name: 'kale',
          marker: { color: '#3D9970' },
          type: 'box',
          boxmean: false,
          orientation: 'h',
        },
        {
          x: [0.6, 0.7, 0.3, 0.6, 0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
          y: [
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
          ],
          name: 'radishes',
          marker: { color: '#FF4136' },
          type: 'box',
          boxmean: false,
          orientation: 'h',
        },
        {
          x: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1, 0.3, 0.6, 0.8, 0.5],
          y: [
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 1',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
            'day 2',
          ],
          name: 'carrots',
          marker: { color: '#FF851B' },
          type: 'box',
          boxmean: false,
          orientation: 'h',
        },
      ]}
      layout={{
        title: 'Grouped Horizontal Box Plot',
        xaxis: { title: 'normalized moisture', zeroline: false },
        boxmode: 'group',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
          color: 'white',
        },
      }}
    />
  );
};

export default HorizontalCandle;
