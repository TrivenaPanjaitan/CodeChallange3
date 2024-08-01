import React from 'react';
import { Link } from 'react-router-dom';
import { getBaseUrl } from '../../helpers/getBaseUrl';
import styles from './index.module.scss';

const Header: React.FC = () => {
  const baseUrl = getBaseUrl();

  return (
    <header className={styles['header']}>
      <h1>Movie App</h1>
      <nav>
        <ul>
          <li>
            <Link to={`${baseUrl}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/watchlist`}>Watchlist</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/rated`}>Rated Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
