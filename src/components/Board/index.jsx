import React, { Component } from 'react';

import { Square } from '../Square';

import styles from './index.css';

export class Board extends Component {
  constructor(props) {
    super(props);

    this.renderSquare = this.renderSquare.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const newSquares = this.state.squares.slice();
    newSquares[i] = 'X';
    this.setState({ squares: newSquares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className={styles.Status}>{status}</div>
        <div className={styles.BoardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.BoardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.BoardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
