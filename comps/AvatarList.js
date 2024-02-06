import React from 'react';
import Grid from '@mui/material/Grid';
import RenderThreeImposters from './RenderThreeImposters';
import { useGlobalContext } from '../public/context';

const AvatarList = () => {
  const { imposters, isPending } = useGlobalContext();
  const sortingByDate = (imposter1, imposter2) => {
      const date1 = new Date(imposter1.timestamp)
      const date2 = new Date(imposter2.timestamp)
      return date2 - date1;
  };

  const firstThreeImpostersInstagram = imposters && imposters.filter((imposter) => {
    return (
        imposter &&
        imposter.source &&
        imposter.source.includes('instagram')
    );
    }).sort(sortingByDate).slice(0, 3);
  const firstThreeImpostersFacebook = imposters && imposters.filter((imposter) => {
    return (
        imposter &&
        imposter.source &&
        imposter.source.includes('facebook')
    );
    }).sort(sortingByDate).slice(0, 3);

  return (
    <div dir='ltr'>
<Grid container spacing={2}>
      {isPending && <div>...טוען</div>}
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
