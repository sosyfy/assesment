import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="top-0 z-10 absolute w-full">
      <div className="flex justify-between items-center mx-auto py-6 container">
        <div>
          <Image
            className="relative"
            src="/images/logo.png"
            alt="Logo"
            width={131}
            height={22.86}
            priority
          />
        </div>

        <div>
          <Link
            href={'/login'}
            className="bg-primary px-6 py-3 rounded-full font-anton font-normal text-black text-sm uppercase"
          >
            connect
          </Link>
        </div>
      </div>
    </div>
  )
}
