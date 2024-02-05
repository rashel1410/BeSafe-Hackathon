import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Link href="/ninjas/">פרופילים בפייסבוק</Link>
      <Link href="/about">פרופילים באינסטגרם</Link>
      <Link href="/imposters"> רשימת המתחזים</Link>
      <Link href="/">עמוד הבית</Link>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={200} height={100} />
      </div>
    </nav>
  );
};

export default Navbar;
