import React from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';
import Search from './Search';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import AvatarList from './AvatarList'
import { red } from '@mui/material/colors';

const Card = ({ title, content, searchBar = false, avatarList = false }) => {
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

                    {searchBar && <Search />}

                    <div className={styles.card_footer}>
                        {avatarList && (
                            <div>
                                <h4>:פרופילים שדווחו לאחרונה</h4>
                                <AvatarList />
                            </div>
                        )}
                    </div>
                </CardContent>



            </div>
        </div>
    );
};

export default Card;
