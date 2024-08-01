import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <h1>Movie App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li>
            <Link to="/rated">Rated Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
