import { Link } from "react-router-dom";
import CardSlider from "../components/CardSlider";
import { bannerImages, mejoresOfertas } from "../data/db";
import CardProduct from "../components/CardProduct";
import ImageSlider from "../components/ImageSlider";
import { formatCurrencyCOP } from "../helpers";

export default function SearchPage() {
  return (
    <div className="">
      {/* product path */}
      <div className="p-4 flex flex-wrap items-center px-4 md:px-20 pb-6 md:pb-10">
        <span className="px-1.5 py-1 text-sm">Inicio</span>
        <span className="px-1.5 py-1 text-sm">{">"}</span>
        <span className="px-1.5 py-1 text-sm">Cuidado facial</span>
        <span className="px-1.5 py-1 text-sm">{">"}</span>
        <span className="px-1.5 py-1 text-sm">Crema Pond´s Clarant B3 Piel Normal A Grasa Pote X 100 Gr</span>
      </div>
      
      {/* Product */}
      <div className="flex flex-row p-4 bg-white mx-4 md:mx-20 mb-6 md:mb-10 gap-2 rounded-lg">
        {/* product image collection */}
        <div className="hidden sm:flex flex-col">
          <div className="flex items-center justify-center p-1 max-w-[100px] max-h-[80px] rounded-lg border border-[#E4E7EC]">
            <img src="./assets/crema-ponds.png" alt="Crema-ponds" className="w-full h-full object-contain" />
          </div>
        </div>
        {/* item info */}
        <div className="flex  flex-col md:flex-row w-full gap-2">
          <div className="flex items-center justify-center p-2 md:w-1/2">
            <img src="./assets/crema-ponds.png" alt="Crema-ponds" className="w-full h-full object-contain" />
          </div>

          <div className="flex flex-col md:w-1/2 px-4 py-3 text-wrap gap-4 md:justify-between md:border border-[#E4E7EC] max-w-[500px] rounded-lg">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#333333]">Crema Pond´s Clarant B3 Piel Normal A Grasa Pote X 100 Gr</span>
              <p className="text-[#444444] text-sm">Codigo: 130671</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-[#444444]">Crema Antimanchas Ponds Clarant B3 Piel Grasa 50Gr. Aclara millones de células oscuras para una piel más humectada y sin manchas.</p>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#333333]">{formatCurrencyCOP(25400)}</span>
              <p className="text-base text-[#444444]" >Gramos a 254.00</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 mx-4 rounded-full flex justify-center items-center gap-2">
                <img src="./assets/card-cart.svg" alt="Carrito" className="w-5" />
                <span className="font-medium">Agregar</span>
              </button>
              <p className="self-center text-base text-[#444444]">(6 unidades disponibles)</p>
            </div>
          </div>
        </div>
      </div>

      {/* product features */}
      <div className="flex p-4 bg-white mx-4 md:mx-20 mb-6 md:mb-10 rounded-lg">
        <span className="font-semibold text-[#1C58B7]" >Características del producto</span>
      </div>

      {/* Card Slider */}
      <div className="flex flex-col mx-auto w-full pl-4 md:px-20 pb-6 md:pb-10">
        <div className="flex content-center items-center pb-4">
          <span className="text-base md:text-2xl font-semibold text-[#121212] pr-1">Las mejores ofertas</span>
          <img src="./assets/alarma.png" alt="Icono Alarma" className="w-6" />
          <Link to="/ofertas" className="pl-4 text-base font-medium text-blue-600 underline">Ver todos</Link>
        </div>

        <CardSlider
          originType
          autoplay
          interval={4000}
          spacing={16}
          breakpoints={{
            "(min-width: 768px)": {
              slides: {
                perView: 4,
                spacing: 12,
              },
            },
            "(min-width: 1024px)": {
              slides: {
                perView: 5,
                spacing: 18,
              },
            },
            "(min-width: 1400px)": {
              slides: {
                perView: 6,
                spacing: 24,
              },
            },
          }}
        >
          {mejoresOfertas.map((item, i) => (
            <div key={i} className="keen-slider__slide min-w-[150px]">
              <CardProduct
                url={item.url}
                imgPath={item.imgPath}
                title={item.title}
                price={item.price}
                lastPrice={item.lastPrice}
                discount={item.discount}
                exclusive={item.exclusive}
              />
            </div>
          ))}
        </CardSlider>

      </div>

      {/* Carousel/Slider bottom px-4 */}
      <div className="invisible md:visible mx-auto md:px-20 pb-2 md:pb-5">
        <ImageSlider images={bannerImages} className="rounded-lg" btnClass="-" />
      </div>
    </div>
  )
}
