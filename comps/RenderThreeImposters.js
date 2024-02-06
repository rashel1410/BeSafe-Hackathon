import React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Link } from '@mui/material';
import styles from '../styles/Avatar.module.css';

const RenderThreeImposters = ({ imposters }) => {

  return imposters.map((imposter) => (
    <List  sx={{ width: '100%', maxWidth: 360 }} key={imposter.id}>
      <Link className={styles.avatar_link} href={`profileDisplay/${imposter.id}`} > 
        <ListItem className={styles.avatar} alignItems="left" >
          <ListItemAvatar sx={{ marginLeft: '5px' }}>
            <Avatar src={imposter.img_url} />
          </ListItemAvatar>
          <ListItemText
            primary={imposter.nick_name}
            primaryTypographyProps={{
            align: 'left',
            style: { verticalAlign: 'middle',
            width: '100%'}
            }}
          />
        </ListItem>
      </Link>

        <Divider variant="inset" component="li" />
    </List>
  ));
};

export default RenderThreeImposters;

