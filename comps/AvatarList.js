import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../public/context';

const AvatarList = () => {
  const { imposters, isPending } = useGlobalContext();
  const firstThreeImpostersInstagram = imposters && imposters.filter((imposter) => {
    return (
        imposter &&
        imposter.source &&
        imposter.source.includes('Instagram')
    );
    }).slice(0, 3);
  const firstThreeImpostersFacebook = imposters && imposters.filter((imposter) => {
    return (
        imposter &&
        imposter.source &&
        imposter.source.includes('Facebook')
    );
    }).slice(0, 3);

  return (
    <Grid container spacing={2}>
      {isPending && <div>...טוען</div>}
      {firstThreeImpostersInstagram && firstThreeImpostersFacebook &&(
        <Grid container spacing={2}>
          {firstThreeImpostersInstagram.map((imposter) => (
            <Grid item xs={6} sm={6} md={6} key={imposter.id}>
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
          {firstThreeImpostersFacebook.map((imposter) => (
            <Grid item xs={6} sm={6} md={6} key={imposter.id}>
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
