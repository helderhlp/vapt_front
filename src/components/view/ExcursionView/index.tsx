import { Container } from '@/components/lib/Container'
import { TemplatePrimary } from '../TemplatePrimary'
import { ExcursionHeader } from './ExcursionHeader'
import { ExcursionDurationInformation } from './ExcursionDurationInformation'
import { ExcursionRoadmapInformation } from './ExcursionRoadmapInformation'
import { DestinyWrapperInformation } from '../DestinyView/DestinyWrapperInformations'
import { ExcursionFlag } from './ExcursionFlag'

export function ExcursionView() {
  return (
    <TemplatePrimary>
      <ExcursionHeader />

      <Container className="relative max-w-7xl sm:rounded-t-3xl bg-white p-6 sm:p-14">
        <ExcursionFlag />
        <ExcursionDurationInformation />
        <hr className="w-full h-[2px] bg-gray-200 my-4" />
        <ExcursionRoadmapInformation />
        <hr className="w-full h-[2px] bg-gray-200 my-4" />
      </Container>

      <DestinyWrapperInformation />
    </TemplatePrimary>
  )
}
