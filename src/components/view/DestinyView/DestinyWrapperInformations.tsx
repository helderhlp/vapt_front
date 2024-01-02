import { Container } from '@/components/lib/Container'
import { DestinyInformation } from './DestinyInformation'
import { DestinyFeedback } from './DestinyFeedback'

export function DestinyWrapperInformation() {
  return (
    <Container className="bg-white md:rounded-t-3xl p-6 sm:p-8 max-w-7xl">
      <DestinyInformation />

      <hr className="w-full h-[2px] bg-gray-200 mt-8 mb-4 md:my-10" />

      <DestinyFeedback />
    </Container>
  )
}
