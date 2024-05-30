import Image from 'next/image'
import { SocialLinks } from './SocialLinks'
import PrimaryLinks from './PrimaryLinks'
import Credits from './Credits'


export default function Footer() {
  return (
    <footer className="relative bg-dark-blue py-16 w-full h-ful overflow-hidden">
      <Image
        className="top-4/5 left-0 absolute w-auto h-auto scale-125"
        src="/images/footer-left.png"
        alt="left footer drop"
        width={606}
        height={540}
        priority
      />

      <Image
        className="top-2/5 right-0 absolute w-auto h-auto scale-110"
        src="/images/footer-right.png"
        alt="right footer drop"
        width={485}
        height={500}
        priority
      />

      <div className="flex flex-col items-center w-full">
        <div className="relative w-full h-80">
          <Image
            className="top-1/2 left-1/2 z-10 absolute transform -translate-x-1/2 -translate-y-1/2"
            src="/images/character.png"
            alt="right footer drop"
            width={310}
            height={393}
            priority
          />

          <Image
            className="top-[84%] left-[48.5%] absolute transform -translate-x-1/2 -translate-y-1/2"
            src="/images/white-logo.png"
            alt="right footer drop"
            width={569}
            height={99}
            priority
          />
        </div>

        <SocialLinks />
        <PrimaryLinks />
        <Credits />
        
      </div>
    </footer>
  )
}
