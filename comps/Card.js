import React from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';
import Search from './Search';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from './Avatar';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';

const Card = ({ title, content, searchBar=false }) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_content}>
            <CardContent>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            {content && (
                <Typography variant="body2" color="text.secondary" className={styles.text}>
                {content}
                </Typography>
            )}
            </CardContent>

            {searchBar && <Search/>}

            <div className={styles.card_footer}>
                <Button variant="outlined" color="primary">
                    Learn More
                </Button>
                <Avatar />

            </div>
        </div>
    </div>
  );
};

export default Card;
