export function ChoicePaymentType() {
  return (
    <div className="flex flex-col gap-2 my-2">
      <div className="flex gap-2 items-center">
        <input type="radio" name="pix" id="pix" />
        <label htmlFor="pix" className="text-sm text-gray-600">
          PIX
        </label>
      </div>

      <div className="flex gap-2 items-center">
        <input type="radio" name="card" id="card" />
        <label htmlFor="card" className="text-sm text-gray-600">
          Cartão de crédito
        </label>
      </div>
    </div>
  )
}
