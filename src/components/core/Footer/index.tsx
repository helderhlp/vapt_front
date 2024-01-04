import { links } from '@/config/links'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary-green-dark flex flex-col lg:flex-row gap-8 xl:gap-16 p-8 sm:p-14">
        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">
            Institucional
          </span>

          <span className="text-white text-sm underline flex flex-col">
            <Link href={links.about}>Sobre o Vaptvou</Link>
            {/* <a>Informações sobre o Coronavírus</a> */}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">
            Políticas e Condições
          </span>

          <span className="text-white text-sm underline flex flex-col">
            <Link href={links.policyPrivacy}>Política de privacidade</Link>
            <Link href={links.termsAndConditions}>
              Termos e condições de uso Excursões
            </Link>

            <Link href={links.policyAndSecurity}>
              Política e normas de segurança
            </Link>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">Site</span>

          <span className="text-white text-sm underline flex flex-col">
            <Link href={links.destinos}>Destinos</Link>
            <Link href={links.allExcursions}>Excursões</Link>
            <a>Ofertas Especiais</a>
            <Link href={links.allExcursions}>Todas as Excursões</Link>
            <Link href={links.contact}>Contato</Link>
            <Link href={links.registerExcursionist}>
              Cadastrar como excursionista
            </Link>
            <Link href={links.login}>Minha conta / Cadastra-se</Link>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">
            Formas de Pagamento
          </span>

          <span className="text-white text-sm flex flex-col gap-1">
            <span>Cartão de Crédito</span>
            <span>Pix</span>

            <Image
              src="/assets/footer/mercado_pago.png"
              width={120}
              height={40}
              alt="Logo do mercado pago"
              className="mt-4"
            />
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">Segurança</span>

          <span className="text-white text-sm flex flex-col gap-1">
            <Image
              src="/assets/footer/security.png"
              width={100}
              height={40}
              alt="Logo do mercado pago"
              className="mt-4"
            />
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">
            Redes Sociais
          </span>

          <span className="text-white text-sm flex gap-4 items-center">
            <Link href="#">
              <Image
                src="/assets/footer/instagram.png"
                width={25}
                height={25}
                alt="Logo do mercado pago"
                className="mt-4"
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/footer/facebook-f.png"
                width={12}
                height={25}
                alt="Logo do mercado pago"
                className="mt-4"
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/footer/youtube.png"
                width={25}
                height={25}
                alt="Logo do mercado pago"
                className="mt-4"
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/footer/whatsapp.png"
                width={25}
                height={25}
                alt="Logo do mercado pago"
                className="mt-4"
              />
            </Link>
          </span>

          <span className="flex gap-2 mt-4">
            <Image
              src="/assets/footer/lojas.png"
              alt="icone da apple store e play store"
              width={200}
              height={40}
            />
          </span>
        </div>
      </div>

      <div className="flex justify-center bg-primary-blue-super-light p-3">
        <span className="text-xs text-gray-600">
          © 2020 Vaptvou - Todos os diretos reservados - Criattech Soluções em
          Tecnologia da Informação LTDA - CNPJ: 32.518.884/0001-67
        </span>
      </div>
    </div>
  )
}
