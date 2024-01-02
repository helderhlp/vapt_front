import { links } from '@/config/links'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary-green-dark flex flex-col lg:flex-row gap-12 lg:gap-20 p-8 sm:p-14">
        <div className="flex flex-col">
          <span className="font-bold text-white text-md mb-4">
            Institucional
          </span>

          <span className="text-white text-sm underline flex flex-col">
            <Link href={links.about}>Sobre o Vaptvou</Link>
            <a>Informações sobre o Coronavírus</a>
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
