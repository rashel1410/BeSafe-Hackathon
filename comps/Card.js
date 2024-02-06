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
import AvatarList from './AvatarList'
import { red } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Card = ({ title, content, searchBar = false, avatarList = false, addButton = false, clickHandler, url}) => {
    const cardContent = () => (
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

                    
                    {avatarList && (
                        <div className={styles.card_footer}>
                            <h4>:פרופילים שדווחו לאחרונה</h4>
                                <AvatarList />
                        </div>
                    )}
                    {addButton && (
                        <h1>+</h1>
                        /* <Fab aria-label='add' size='large'>
                            <AddIcon onClick={clickHandler} />
                        </Fab> */
                    )}

                </CardContent>
            </div>
        </div>
    )
    return (       
        <>
        {url? (<Link className="link-style" href={url}>{cardContent()}</Link>) : cardContent()}   
        
        </>
    );
};

export default Card;
