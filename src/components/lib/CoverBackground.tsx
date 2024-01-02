import { twMerge } from 'tailwind-merge'
import { Container } from './Container'

type TypeBackground =
  | 'bg-background-excursionista-header'
  | 'bg-background-contact'

interface Props {
  title: string
  subtitle: string
  background: TypeBackground
}

export function CoverBackground(props: Props) {
  return (
    <div
      className={twMerge([
        'w-full flex justify-center py-[74px] px-6 bg-no-repeat bg-cover bg-center',
        props.background,
      ])}
    >
      <Container>
        <h1 className="uppercase text-3xl font-bold text-white">
          {props.title}
        </h1>
        <span
          className="uppercase text-white text-2xl"
          dangerouslySetInnerHTML={{ __html: props.subtitle }}
        />
      </Container>
    </div>
  )
}
