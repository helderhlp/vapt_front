export function PurchaseInformation() {
  const titleClass = 'text-cyan-500'
  const valueClass = 'text-gray-600'

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 font-bold">APARECIDA DO NORTE</span>

        <span className="text-gray-600 font-bold">Pedido 001002</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.70fr]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className={titleClass}>Duração</span>
              <span className={valueClass}>1 Dia</span>
            </div>

            <div className="flex flex-col">
              <span className={titleClass}>Data e horário da IDA</span>
              <span className={valueClass}>27-DEZ-2020-08h00</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className={titleClass}>Ponto de Origem</span>
            <span className={valueClass}>Lago do Pará - Campinas/SP</span>
            <span className={valueClass}>Av. Aquidaban, 211 - Centro</span>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className={titleClass + ' whitespace-nowrap'}>
                Idade Mínima
              </span>
              <span className={valueClass + ' whitespace-nowrap'}>
                Sem Restrição
              </span>
            </div>
            <div className="flex flex-col">
              <span className={titleClass}>Ingresso</span>
              <span className={valueClass}>Não</span>
            </div>

            <div className="flex flex-col">
              <span className={titleClass + ' whitespace-nowrap'}>
                Tipo de Veículo
              </span>
              <span className={valueClass}>Ônibus</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className={titleClass}>Data e horário da VOLTA</span>
            <span className={valueClass}>27-DEZ-2020 - 19h00</span>
          </div>
          <div className="flex flex-col">
            <span className={titleClass}>Ponto do Destino</span>
            <span className={valueClass}>
              Estacionamento Basilica - Aparecida/SP
            </span>
            <span className={valueClass}>
              Avenida Dr. Júlio Prestes - Ponte Alta
            </span>
          </div>

          <div className="flex flex-col">
            <span className={titleClass}>
              Qtd. mín. de passagem para a excursão acontecer
            </span>
            <span className={valueClass}>
              40{' '}
              <span className="text-primary-blue-dark">
                (Faltam 40 passagens)
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className={titleClass}>Detalhes do transporte</span>
          <span className={valueClass}>
            Ônibus Executivo 46 Lugares / Toalet / Frigobar / Wifi / Ar
            Condicionado / Tomada USB / Água/ Refrigerante / Café
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className={titleClass}>Outros Pontos de Embarque</span>
        <span className={valueClass}>
          Terminal Ouro Verde - R. Armado Frederico Renganechi, 21 - Jardim
          Cristina, Campinas/SP / Posto Jardim do Trevo - Av. Benedito de
          Campos, 193 - Jardim do Trevo, Campinas - SP
        </span>
      </div>
    </div>
  )
}
