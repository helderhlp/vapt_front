import { Container } from '@/components/lib/Container'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export function AboutHeader() {
  return (
    <div
      className={twMerge([
        'w-full flex justify-center pb-48 pt-16 px-6 bg-no-repeat bg-cover bg-center',
        'bg-[url("/assets/background-destiny.png")]',
        '-mb-24',
      ])}
    >
      <Container className="flex justify-between sm:flex-row max-sm:gap-10 flex-wrap">
        <div className="flex flex-col w-fit">
          <Image
            alt="logo white"
            src="/assets/logo_white.png"
            width={200}
            height={300}
          />
        </div>
      </Container>
    </div>
  )
}
