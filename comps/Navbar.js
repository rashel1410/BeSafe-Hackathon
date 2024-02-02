import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <Link href='/ninjas/'>פרופילים בפייסבוק</Link>
      <Link href='/about'>פרופילים באינסטגרם</Link>
      <Link href='/'>עמוד הבית</Link>
      <Link href='/profileDisplay'> פרופיל מתחזה</Link>
      <Link href='/imposters'> רשימת המתחזים</Link>
      <div className='logo'>
        <Image src='/logo.png' alt='site logo' width={128} height={77} />
      </div>
    </nav>
  );
};

export default Navbar;
