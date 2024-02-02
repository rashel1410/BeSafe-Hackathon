import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../public/context';

const AvatarList = () => {
  const { imposters, isPending } = useGlobalContext();
  const firstThreeImposters = imposters && imposters.slice(0, 3);

  return (
    <Grid container spacing={2}>
      {isPending && <div>...טוען</div>}
      {firstThreeImposters && (
        <Grid container spacing={2}>
          {firstThreeImposters.map((imposter) => (
            <Grid item xs={12} sm={12} md={12} key={imposter.id}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar sx={{ bgcolor: 'brown', color: 'white' }} src={imposter.img_url}></Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{imposter.nick_name}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default AvatarList;
