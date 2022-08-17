import Link from 'next/link';
import React from 'react';

const GrafanaPage = () => {
  return (
    <div className=''>
      <div className='d-flex justify-content-around mb-3'>
        <div className='w-50 p-3 border-white rounded mx-3 my-bg'>
          <h4>Feature showcase</h4>
          <ul className='list-unstyled'>
            {featureList.map((item, idx) => (
              <li key={idx}>
                <Link href={`/grafana/${item.path}`}>
                  <a className='text-reset text-decoration-none'>
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-50 p-3 border-white rounded mx-3 my-bg'>
          <h4>Data source demos</h4>
          <ul className='list-unstyled'>
            {dataSource.map((item, idx) => (
              <li key={idx}>
                <Link href={`/grafana/${item.path}`}>
                  <a className='text-reset text-decoration-none'>
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrafanaPage;

const featureList = [
  { label: 'Timer series graphs', path: 'time-series-graphs' },
  { label: 'Stats', path: '#' },
  { label: 'Table', path: '#' },
  { label: 'Gauges', path: '#' },
];

const dataSource = [
  { label: 'Example label', path: '#' },
  { label: 'Example label', path: '#' },
  { label: 'Example label', path: '#' },
  { label: 'Example label', path: '#' },
];
