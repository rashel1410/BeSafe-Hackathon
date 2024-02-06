import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <div className='logo'>
          <Image src='/logo.png' alt='site logo' width={200} height={100} />
        </div>
      </Link>
      <ul className={styles.nav_links}>
        <li>
          <Link className={styles.link} href='/' >עמוד הבית</Link>
        </li>
        <li>
          <Link className={styles.link} href='/imposters' > רשימת המתחזים</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
