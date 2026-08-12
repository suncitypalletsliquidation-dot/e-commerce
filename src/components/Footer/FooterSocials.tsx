import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/assets/icons/social'
import Link from 'next/link'

const socials = [
  {
    id: 1,
    href: 'https://web.facebook.com/profile.php?id=61591723845393',
    name: 'Facebook',
    icon: FacebookIcon,
    size: 26
  },
  // {
  //   id: 2,
  //   href: '#',
  //   name: 'Twitter',
  //   icon: TwitterIcon,
  // },
  {
    id: 3,
    href: 'https://www.instagram.com/suncity_pallet_liquidation_llc/',
    name: 'Instagram',
    icon: InstagramIcon,
    size: 26
  },
  // {
  //   id: 4,
  //   href: '#',
  //   name: 'LinkedIn',
  //   icon: LinkedInIcon,
  // },
]

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4 mt-7.5">
      {
        socials.map((social) => (
          <Link
            key={social.id}
            href={social.href}
            className="flex ease-out duration-200 hover:text-blue"
            target='__blank'
          >
            <span className="sr-only">{social.name} link</span>
            <social.icon width={social.size} height={social.size} />
          </Link>
        ))}
    </div>
  )
}
