import ImageSlider from "../components/ImageSlider"
import { bannerImages, bienestar, categories, marcas, mejoresOfertas } from "../data/db"
import Frame37424 from "../components/Frame37424"
import { Link } from "react-router-dom"
import CardSlider from "../components/CardSlider"
import CardProduct from "../components/CardProduct"
import { dataFrame37424 } from "../data/db"
import Category from "../components/Category"
import CircleCard from "../components/CircleCard"

export default function IndexPage() {

  return (
    <div>

      {/* Carousel/Slider */}
      <div className="pt-4 md:pt-0">
        <ImageSlider images={bannerImages} />
      </div>
      {/* frame37424 */}
      <div className="flex mx-auto pl-4 md:px-20 pb-10 pt-4 justify-around">
        {dataFrame37424.map((item)=>(
          <Frame37424 url={item.url} imgPath={item.imgPath} title={item.title} />
        ))}
      </div>
      {/* Banner2 */}
      <Link to="/enterogermina">
        <div className="mx-auto px-4 md:px-20 pb-10 duration-150 ease-in-out hover:scale-101">
            <video className="rounded-[9.76px]" width="100%" autoPlay muted loop playsInline>
              <source src="/assets/banner2.mp4" />
            </video>
        </div>
      </Link>
      {/* Card Slider 1 */}
      <div className="flex flex-col mx-auto w-full pl-4 md:px-20 pb-10">
        <div className="flex content-center items-center pb-4">
          <span className="text-2xl font-bold text-[#121212] pr-1">Las mejores ofertas</span>
          <img src="/assets/alarma.png" alt="Icono Alarma" className="w-6" />
          <Link to="/ofertas" className="pl-4 text-base font-medium text-blue-600 underline">Ver todos</Link>
        </div>

        <CardSlider
          autoplay
          interval={4000}
          slidesPerView={2}
          spacing={8}
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
            <div key={i} className="keen-slider__slide">
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
      {/* Categorias */}
      <div className="flex flex-col md:flex-row mx-auto px-4 md:px-20 pb-10 gap-5 justify-between">
        {categories.map((item) => (
          <Category
            title={item.title}
            imgPath={item.imgPath}
            url={item.url}
            description= {item.description}
            category1= {item.category1}
            imgPath1= {item.imgPath1}
            category2= {item.category2}
            imgPath2= {item.imgPath2}
            category3= {item.category3}
            imgPath3= {item.imgPath3}
          />
        ))}
      </div>
      {/* Card Slider 2 */}
      <div className="flex flex-col mx-auto w-full pl-4 md:px-20 pb-10">
        <div className="flex content-center items-center pb-4">
          <span className="text-2xl font-bold text-[#121212] pr-1">Lo mas buscado</span>
          <img src="/assets/carita-estrella.png" alt="Icono Cara estrella" className="w-6" />
          <Link to="/mas-buscados" className="pl-4 text-base font-medium text-blue-600 underline">Ver todos</Link>
        </div>

        <CardSlider
          autoplay
          interval={4000}
          slidesPerView={2}
          spacing={8}
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
            <div key={i} className="keen-slider__slide">
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
      {/* Circle Slider 1 */}
      <div className="flex flex-col mx-auto w-full pl-4 md:px-20 pb-10 gap-5">
        <div className="flex content-center items-center pb-5">
          <span className="text-2xl font-bold text-[#121212] pr-1">Inspirados en tu bienestar</span>
          <img src="/assets/emoji-abrazo.png" alt="Emoji cara abrazo" className="w-6" />
        </div>

        <CardSlider
          autoplay
          interval={4000}
          slidesPerView={3}
          spacing={8}
          breakpoints={{
            "(min-width: 768px)": {
              slides: {
                perView: 5,
                spacing: 12,
              },
            },
            "(min-width: 1024px)": {
              slides: {
                perView: 6,
                spacing: 18,
              },
            },
            "(min-width: 1400px)": {
              slides: {
                perView: 7,
                spacing: 24,
              },
            },
          }}
        >
          {bienestar.map((item, i) => (
            <div key={i} className="keen-slider__slide">
              <CircleCard
                imgPath={item.imgPath}
                url={item.url}
                title={item.title}
              />
            </div>
          ))}
        </CardSlider>
      </div>
      {/* Banner vida sana */}
      <div className="mx-auto px-4 md:px-20 pb-10">
        <img src="/assets/banner-vidasana.png" alt="Banner vida sana" className="rounded-lg"/>
      </div>
      {/* Circle Slider 2 */}
      <div className="flex flex-col mx-auto w-full pl-4 md:px-20 pb-10 gap-5">
        <div className="flex content-center items-center pb-5">
          <span className="text-2xl font-bold text-[#121212] pr-1">Marcas destacadas</span>
          <img src="/assets/emoji-estrella.png" alt="Emoji estrella" className="w-6" />
        </div>

        <CardSlider
          autoplay
          interval={4000}
          slidesPerView={3}
          spacing={8}
          breakpoints={{
            "(min-width: 768px)": {
              slides: {
                perView: 5,
                spacing: 12,
              },
            },
            "(min-width: 1024px)": {
              slides: {
                perView: 6,
                spacing: 18,
              },
            },
            "(min-width: 1400px)": {
              slides: {
                perView: 7,
                spacing: 24,
              },
            },
          }}
        >
          {marcas.map((item, i) => (
            <div key={i} className="keen-slider__slide">
              <CircleCard
                imgPath={item.imgPath}
                url={item.url}
              />
            </div>
          ))}
        </CardSlider>
      </div>
      {/* Carousel/Slider bottom */}
      <div className="mx-auto px-4 md:px-20 pb-10">
        <ImageSlider images={bannerImages} className="rounded-lg" btnClass="-" />
      </div>
      
    </div>
  )
}
