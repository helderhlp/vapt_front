import { twMerge } from 'tailwind-merge'
import { Container } from './Container'

export enum ImageTypeBackground {
  APARECIDA_DO_NORTE = 'bg-[url("/assets/aparecida_do_norte_saiba_mais.png")]',
  DESTINY = 'bg-background-destiny',
  CONTACT = 'bg-background-contact',
  EXCURSIONIST_HEADER = 'bg-background-excursionista-header',
}

interface Props {
  image?: ImageTypeBackground
  hasMarginBottom?: boolean
  children?: React.ReactNode

  title: string
  subtitle: string

  className?: string
  isSmall?: boolean
}

export function BackgroundTemplate(props: Props) {
  const { image = ImageTypeBackground.APARECIDA_DO_NORTE } = props

  return (
    <div
      className={twMerge([
        'w-full flex justify-center pb-48 pt-16 px-6 bg-no-repeat bg-cover bg-center',
        image,
        props.hasMarginBottom && '-mb-24',
        props.isSmall && 'py-10 sm:py-20',
        props.className,
      ])}
    >
      <Container className="flex justify-between sm:flex-row max-sm:gap-10 flex-wrap">
        <div className="flex flex-col w-fit">
          <h1 className="uppercase text-xl sm:text-2xl sm:text-3xl font-bold text-white">
            {props.title}
          </h1>
          <span
            className="uppercase text-white sm:text-lg sm:text-2xl"
            dangerouslySetInnerHTML={{ __html: props.subtitle }}
          />
        </div>

        {props.children}
      </Container>
    </div>
  )
}
