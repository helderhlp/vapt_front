import { Accordion } from '@/components/ui/accordion'
import { TemplatePrimary } from '../TemplatePrimary'
import { Container } from '@/components/lib/Container'
import { AccordionExcursions } from './AccordionExcursions'
import { AccordionProfileData } from './AccordionProfileData'
import { AccordionAddress } from './AccordionAddress'
import { AccordionCards } from './AccordionCards'
import { AccordionNotifications } from './AccordionNotifications'
import { AccordionOffer } from './AccordionOffer'
import Image from 'next/image'
import {
  BackgroundTemplate,
  ImageTypeBackground,
} from '@/components/lib/BackgroundTemplate'

export function ProfileView() {
  return (
    <TemplatePrimary>
      <BackgroundTemplate
        subtitle="confira seus pedidos e mantenha seus dados atualizados"
        title="Minha conta"
        image={ImageTypeBackground.CONTACT}
        isSmall
      />

      <Container className="max-w-4xl py-10 pb-20 max-lg:px-6">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="https://github.com/higoraln.png"
            width={54}
            height={54}
            alt="profile image"
            className="rounded-full border border-gray-400"
          />

          <span className="font-bold text-lg text-gray-600">
            João Francisco Souza
          </span>
        </div>
        <Accordion type="multiple" className="w-full">
          <AccordionExcursions />
          <AccordionProfileData />
          <AccordionAddress />
          <AccordionCards />
          <AccordionNotifications />
          <AccordionOffer />
        </Accordion>
      </Container>
    </TemplatePrimary>
  )
}
