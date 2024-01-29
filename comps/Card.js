import React from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';
import Search from './Search';

const Card = ({ title, content, searchBar=false }) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_content}>
            <h1 className={styles.title}>{title}</h1>
            
            {content && (
                <p className={styles.text}>{content}</p>
            )}

            {searchBar && <Search/>}
        </div>
    </div>
  );
};

export default Card;
