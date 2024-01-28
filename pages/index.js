import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Card from '../comps/Card.js'
import Grid from '../comps/Grid.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
        <Grid>
          <Card title="אינסטגרם" content="משהו"/>
          <Card title="פייסבוק" content="משהו"/>
          <Card title="על האתר" content="משהו"/>
          <Card title="איך מזהים מתחזה"/>
        </Grid>
    </>
  )
}
