import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div
        className='p-4 h-100 text-white'
        style={{
          backgroundColor: 'rgba(0,0,0,0.9)',
          minHeight: 'calc(100vh - 4rem)',
        }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
