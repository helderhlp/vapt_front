import { Footer } from '@/components/core/Footer'
import { Header } from '@/components/core/Header'
import { PermissionCookies } from '@/components/lib/PermissionCookies'
import { Roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  hasFooter?: boolean
  className?: string
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export function TemplatePrimary({ children, ...rest }: Props) {
  const { hasFooter = true } = rest

  return (
    <div
      className={twMerge([
        `overflow-hidden ${roboto.className}`,
        rest.className,
      ])}
    >
      <Header />
      {children}

      {hasFooter && <Footer />}

      <PermissionCookies />
    </div>
  )
}
