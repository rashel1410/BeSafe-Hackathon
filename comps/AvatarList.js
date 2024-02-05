import React from 'react';
import Grid from '@mui/material/Grid';
import RenderThreeImposters from './RenderThreeImposters';
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
    <div dir='ltr'>
<Grid container spacing={2}>
      {isPending && <div>טוען...</div>}
      {firstThreeImpostersInstagram && firstThreeImpostersFacebook &&(
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} >
            <RenderThreeImposters imposters={firstThreeImpostersInstagram}/>
          </Grid>
          <Grid item xs={6} md={6} >
            <RenderThreeImposters imposters={firstThreeImpostersFacebook}/>
          </Grid>
        </Grid>
      )}
    </Grid>
    </div>
    
  );
};

export default AvatarList;
