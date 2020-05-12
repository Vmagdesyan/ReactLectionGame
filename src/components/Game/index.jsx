import React, { Component } from 'react';

import { Board } from '../Board';

import styles from './index.css';

export class Game extends Component {
  render() {
    return (
      <div className={styles.Game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={styles.GameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}