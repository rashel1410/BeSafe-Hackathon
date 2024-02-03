import Image from "next/image";
import bgImage from '../public/background2.jpg';

export default function BackgroundImage() {
  return <Image 
    src={bgImage}
    placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}
