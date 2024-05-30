import Image from "next/image"
import Link from "next/link"

const icons = [
  { name: 'twitter', url: '/icons/x-logo.svg', width: 16, height: 16 },
  { name: 'youtube', url: '/icons/youtube.svg', width: 23, height: 16 },
  { name: 'discord', url: '/icons/discord.svg', width: 25, height: 19 },
  { name: 'telegram', url: '/icons/telegram.svg', width: 24, height: 19 },
  { name: 'message', url: '/icons/message.svg', width: 22.51, height: 17.07 },
]

export function SocialLinks() {
  return (
  <div className="flex items-center py-16">
    {icons.map((icon) => (
      <div
        key={icon.name}
        className="mx-4"
      >
        <Link
          href="/"
          className=""
        >
          <Image
            className="relative h-full"
            src={icon.url}
            alt={icon.name}
            width={icon.width}
            height={icon.height}
            priority
          />
        </Link>
      </div>
    ))}
  </div>
  )
}
