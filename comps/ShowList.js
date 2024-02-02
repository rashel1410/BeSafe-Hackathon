import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../public/context';
import Link from 'next/link'

export default function ShowList({ imposters, isPending }) {
  //todo: get from db file

  // useEffect(() => {
  //   fetch("http://localhost:8000/imposters")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setImposters(data);
  //     });
  // });
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {imposters.map((imposter) => (
        <Link href={`profileDisplay/${imposter.id}`} key={imposter.id}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar src={imposter.img_url} />
            </ListItemAvatar>
            <ListItemText
              primary={(imposter.first_name, imposter.last_name)}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    {imposter.timestamp}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
        // <Divider variant='inset' component='li' />
      ))}
    </List>
  );
}
