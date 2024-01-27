import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
        <div className={styles.grid_container}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.title}>אינסטגרם</h1>
              <p className={styles.text}>על האתר - הסברים</p>
              <Link href="/ninjas/" className={styles.btn}>
                See Ninja Listing
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.title}>פייסבוק</h1>
              <p className={styles.text}>על האתר - הסברים</p>
              <Link href="/ninjas/" className={styles.btn}>
                See Ninja Listing
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.title}>על האתר</h1>
              <p className={styles.text}>על האתר - הסברים</p>
              <Link href="/ninjas/" className={styles.btn}>
                See Ninja Listing
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1 className={styles.title}>איך מזהים פרופיל</h1>
              <p className={styles.text}>על האתר - הסברים</p>
              <Link href="/ninjas/" className={styles.btn}>
                See Ninja Listing
              </Link>
            </div>
          </div>
        
        </div>

    </>
  )
}
