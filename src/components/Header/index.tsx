import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.FC = () => {
  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; 

  return (
    <header className={styles['header']}>
      <h1>Movie App</h1>
      <nav>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/watchlist`}>Watchlist</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/rated`}>Rated Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
