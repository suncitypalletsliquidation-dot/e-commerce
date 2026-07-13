import Link from 'next/link'

const quickLinks = [
  {
    id: 1,
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    id: 2,
    label: 'Refund Policy',
    href: '/refund-policy',
  },
  {
    id: 3,
    label: 'Terms of Use',
    href: '/terms-of-use',
  },
  {
    id: 4,
    label: 'Shipping Policy',
    href: '/shipping-policy',
  },
  {
    id: 5,
    label: 'FAQs',
    href: '/faq',
  },
  {
    id: 6,
    label: 'Contact',
    href: '/contact',
  },
]

export default function QuickLinks() {
  return (
    <div className="w-full sm:w-auto">
      <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
        Quick Link
      </h2>

      <ul className="flex flex-col gap-3">
        {
          quickLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="ease-out duration-200 hover:text-blue"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}

      </ul>
    </div>
  )
}
