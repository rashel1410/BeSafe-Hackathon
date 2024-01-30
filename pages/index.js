import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Card from '../comps/Card.js'
import MUICard from '../comps/MUICard.js'
import Grid from '../comps/Grid.js'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
        <Grid>
          <Card title="אינסטגרם" content="משהו" searchBar="True"/>
          <Card title="פייסבוק" content="משהו" searchBar="True"/>
          <Card title="על האתר" content="משהו"/>
          <Card title="איך מזהים מתחזה"/>
          <MUICard />
          <Fab aria-label="add" size="large">
            <AddIcon />
          </Fab>
        </Grid>
    </>
  )
}
