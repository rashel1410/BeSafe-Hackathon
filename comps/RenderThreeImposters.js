import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const RenderThreeImposters = ({ imposters }) => {
  return imposters.map((imposter) => (
    <List sx={{ width: '100%', maxWidth: 360 }} key={imposter.id}>
      <ListItem alignItems="left">
        <ListItemText
          primary={imposter.nick_name}
          primaryTypographyProps={{
            align: 'left',
            style: { verticalAlign: 'middle',
            width: '100%'}
          }}
        />
        <ListItemAvatar sx={{ marginRight: '10px' }}>
          <Avatar src={imposter.img_url} />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  ));
};

export default RenderThreeImposters;

