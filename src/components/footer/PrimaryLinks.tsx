import Link from 'next/link'

const links = [
    { name: 'Privacy Policy -', url: '/' },
    { name: 'Terms of Use -', url: '/' },
    { name: 'Cookie Policy -', url: '/' },
    { name: 'Cookie Settings', url: '/' },
  ]


export default function PrimaryLinks() {
  return (
    <div className="flex items-center gap-x-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="font-dm-mono font-normal text-brand-green text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
  )
}
