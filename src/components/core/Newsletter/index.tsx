import { Button } from '@/components/lib/Button'
import { Container } from '@/components/lib/Container'
import { Input } from '@/components/lib/Input'

export function Newsletter() {
  return (
    <div className="w-full flex justify-center py-10 bg-white">
      <Container className="max-w-7xl max-2xl:px-6">
        <span className="font-bold text-xl text-gray-700 mb-4">
          Receba Nossas Promoções
        </span>

        <form className="flex gap-4 max-md:flex-col">
          <Input variant="secondary" placeholder="Digite seu nome" />
          <Input
            variant="secondary"
            placeholder="Digite seu e-mail"
            type="email"
          />
          <Button className="max-md:w-fit max-w-[120px] max-md:self-end">
            Cadastra-se
          </Button>
        </form>
      </Container>
    </div>
  )
}
