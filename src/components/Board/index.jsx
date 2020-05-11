import React from 'react';

import { Square } from '../Square';

import styles from './index.css';

const renderSquare = (i) => {
  return <Square />;
}

export const Board = () => {
  const status = 'Next player: X';

  return (
    <div>
      <div className={styles.Status}>{status}</div>
      <div className={styles.BoardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.BoardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.BoardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}