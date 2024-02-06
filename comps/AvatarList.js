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
  const sortAndSlice = (imposters, source) => {
    return imposters && imposters.filter((imposter) => {
      return (
          imposter &&
          imposter.source &&
          imposter.source.includes(source)
      );
      }).sort(sortingByDate).slice(0, 3);
  }

  const firstThreeImpostersInstagram = sortAndSlice(imposters, 'instagram');
  const firstThreeImpostersFacebook = sortAndSlice(imposters, 'facebook');

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
