import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Card from '../comps/Card.js';
import Grid from '../comps/Grid.js';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useGlobalContext } from '../public/context.js';
import CreateImposterDialog from './create.js';


export default function Home() {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };


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
        <meta name="keywords" content="ninjas" />
      </Head>
      <Grid>
        <Card title='אינסטגרם' searchBar/>
        <Card title='פייסבוק' searchBar/>
        <Card
          title='על האתר'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ex placerat, tincidunt ante eget, blandit lorem. Nulla lorem orci, auctor nec vestibulum nec, condimentum sed dolor. In elementum vehicula est, vel lobortis felis semper non. Duis sodales condimentum erat, et posuere tortor interdum eget. Duis viverra et ante et varius.;'
          avatarList='True'
        />
        <Card title='איך מזהים מתחזה' url='./game_app'/>
        <div className='add-button-wrapper' onClick={handleClickOpen}>
          <Card addButton />
        </div>
        
        
        <CreateImposterDialog
          open={addDialogOpen}
          onClose={handleClose}
          onAddSuccess={showSnackbar}
        />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity='success'
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
}
