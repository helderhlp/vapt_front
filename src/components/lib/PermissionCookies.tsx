import Link from 'next/link'
import { Button } from './Button'
import { parseCookies, setCookie } from 'nookies'
import { storage } from '@/config/storage'
import React from 'react'
import { links } from '@/config/links'

export function PermissionCookies() {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const cookies = parseCookies()[storage.permission_cookies]
    if (!cookies) {
      setShow(true)
      return
    }

    const parse = JSON.parse(cookies)

    if (parse) {
      setShow(false)
    }
  }, [])

  function acceptCookies() {
    setShow(false)
    setCookie(null, storage.permission_cookies, JSON.stringify(true), {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    })
  }

  if (!show) return null
  return (
    <div className="fixed bottom-1 right-1 max-sm:left-1 sm:bottom-3 sm:right-3 max-w-[374px] bg-white rounded-3xl shadow-md p-10 flex flex-col text-primary-blue-dark">
      <span className="text-sm mb-2">Politica de Privacidade</span>

      <span className="text-sm">
        Ao utilizar o nosso website você concorda com o uso de cookies de acordo
        com nossa Política de privacidade. Saiba mais sobre nossa{' '}
        <Link className="underline" href={links.policyPrivacy}>
          politica de privacidade
        </Link>
      </span>

      <Button onClick={acceptCookies} className="w-fit px-16 mt-4">
        Aceitar
      </Button>
    </div>
  )
}
