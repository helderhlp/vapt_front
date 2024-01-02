import { TemplatePrimary } from '../TemplatePrimary'
import { Container } from '@/components/lib/Container'

import { SessionCardEmphasis } from '@/components/lib/SessionCardEmphasis'
import { Newsletter } from '@/components/core/Newsletter'
import { NotFoundExcursion } from '@/components/core/NotFoundExcursion'
import { DestinyHeader } from './DestinyHeader'
import { DestinyWrapperInformation } from './DestinyWrapperInformations'

export function TemplateDestiny() {
  return (
    <TemplatePrimary>
      <DestinyHeader />
      <DestinyWrapperInformation />

      <SessionCardEmphasis title="Excursões mais Compradas" />

      <Container className="pb-10 max-w-6xl">
        <Newsletter />
        <hr className="w-full h-[2px] bg-gray-200 my-4" />
        <NotFoundExcursion />
      </Container>
    </TemplatePrimary>
  )
}
