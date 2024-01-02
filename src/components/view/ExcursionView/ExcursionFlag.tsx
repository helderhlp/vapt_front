export function ExcursionFlag() {
  return (
    <>
      <div
        className="absolute -top-8 left-0 sm:left-12 p-1 px-5 rounded-tr-xl"
        style={{ backgroundColor: '#ff0' }}
      >
        <i style={{ color: '#f00' }} className="font-bold">
          Promoção imperdível
        </i>
      </div>

      <div
        className="absolute -top-14 right-0 sm:right-12 p-1 px-10 sm:px-5 rounded-tl-xl"
        style={{ backgroundColor: '#f00' }}
      >
        <i className="font-bold text-white">
          50%
          <br /> OFF
        </i>
      </div>
    </>
  )
}
