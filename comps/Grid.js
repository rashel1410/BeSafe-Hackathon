import React from 'react';
import styles from '../styles/Grid.module.css';

const Grid = ({ children }) => {
  return(
    <div className={styles.grid_container}>
      {children}
    </div>
  );
};

export default Grid;
