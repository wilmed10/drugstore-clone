import { Link } from "react-router-dom"
import { formatCurrencyCOP } from "../helpers"

type CardProductProps = {
  url: string
  imgPath: string
  title: string
  price: number
  lastPrice?: number
  discount?: number
  exclusive?: boolean
}

/* xl:h-101 */

export default function CardProduct({ url, imgPath, title, price, lastPrice, discount, exclusive }: CardProductProps) {
  return (
    <Link to={url} className="mx-auto flex flex-col justify-between h-full  border-[#E4E7EC] rounded-lg bg-white px-2 pt-2 pb-4 shadow hover:shadow-md transition-shadow">
      <div>
        <img
          src={imgPath}
          alt={title}
          className="w-full object-cover"
        />

        <div className="flex flex-col p-2 gap-2">
          <span className="text-sm font-medium line-clamp-2">{title}</span>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#121212]">{formatCurrencyCOP(price)}</span>
            {lastPrice && (
              <span className="text-[#98A2B3] text-sm line-through">{formatCurrencyCOP(lastPrice)}</span>
            )}
          </div>

          {discount && (
            <div className="flex flex-wrap gap-1">
              <span className="py-1 px-2 bg-[#039855] text-white text-sm font-semibold rounded-sm">{discount}%</span>
              {exclusive && (
                <span className="py-1 px-2 bg-[#EFFFF8] border border-[#039855] text-[#039855] text-xs font-semibold rounded-sm">Exclusivo Web</span>
              )}
            </div>
          )}
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 mx-2 rounded-full flex justify-center items-center gap-2">
        <img src="./assets/card-cart.svg" alt="Carrito" className="w-5" />
        <span className="font-medium">Agregar</span>
      </button>
    </Link>
  )
}

/* transition-transform duration-150 ease-in-out hover:scale-105 */ // img scale