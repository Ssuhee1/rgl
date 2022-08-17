import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/grafana');
    }
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
