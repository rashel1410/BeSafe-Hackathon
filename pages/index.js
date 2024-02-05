import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Card from '../comps/Card.js';
import Grid from '../comps/Grid.js';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useGlobalContext } from '../public/context.js';
import CreateImposterDialog from './create.js';

export default function Home() {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const { imposters, isPending } = useGlobalContext();
  

  const handleClickOpen = () => {
    setAddDialogOpen(true);
  };

  const handleClose = () => {
    setAddDialogOpen(false);
  };

  return (
    <>
      <Head>
        <title>Shazar | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <Grid>
        <Card title='אינסטגרם' content='משהו' searchBar='True' />
        <Card title='פייסבוק' content='משהו' searchBar='True' />
        <Card 
          title='על האתר'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ex placerat, tincidunt ante eget, blandit lorem. Nulla lorem orci, auctor nec vestibulum nec, condimentum sed dolor. In elementum vehicula est, vel lobortis felis semper non. Duis sodales condimentum erat, et posuere tortor interdum eget. Duis viverra et ante et varius.;'  
          avatarList='True'/>
        <Card title='איך מזהים מתחזה'/>
        <Fab aria-label='add' size='large'>
          <AddIcon onClick={handleClickOpen} />
        </Fab>
        <CreateImposterDialog open={addDialogOpen} onClose={handleClose} />
      </Grid>
    </>
  );
}
