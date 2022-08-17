import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
    <nav
      className='bg-dark d-flex align-items-center text-uppercase text-white'
      style={{ height: '4rem' }}>
      <div className='container d-flex justify-content-between'>
        <Link href='/'>
          <a className='text-reset text-decoration-none'>Navbar</a>
        </Link>
        <ul className='d-flex list-unstyled my-0'>
          <li className='mx-4 d-flex justify-content-center align-items-center'>
            <Link href='/'>
              <a className='text-reset text-decoration-none'>Home</a>
            </Link>
          </li>
          <li className='mx-4 d-flex justify-content-center align-items-center'>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-todo' variant='secondary'>
                Todo
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link href='/moveable'>
                    <a className='text-reset text-decoration-none'>Moveable</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href='/grafana'>
                    <a className='text-reset text-decoration-none'>Grafana</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href='/rgl'>
                    <a className='text-reset text-decoration-none'>
                      React grid layout
                    </a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className='mx-4 d-flex justify-content-center align-items-center'>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id='dropdown-dulguun'>
                Dulguun
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link href='/table'>
                    <a className='text-reset text-decoration-none'>Table</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href='/flow'>
                    <a className='text-reset text-decoration-none'>Flow</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href='/axis'>
                    <a className='text-reset text-decoration-none'>Grafana</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href='/comment'>
                    <a className='text-reset text-decoration-none'>Comment</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
