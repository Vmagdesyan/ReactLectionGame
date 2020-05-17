import React, { Component } from 'react';

import styles from './index.css';

export class Square extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <button
        className={styles.Square}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}