import ImageSlider from "../components/ImageSlider"
import { bannerImages, bienestar, categories, marcas, mejoresOfertas, mobileBannerImages } from "../data/db"
import Frame37424 from "../components/Frame37424"
import { Link } from "react-router-dom"
import CardSlider from "../components/CardSlider"
import CardProduct from "../components/CardProduct"
import { dataFrame37424 } from "../data/db"
import Category from "../components/Category"
import CircleCard from "../components/CircleCard"
import { useEffect, useState } from "react"

export default function IndexPage() {

  function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)
    useEffect(() => {
      const media = window.matchMedia(query)
      const handleChange = () => {
        setMatches(media.matches)
      }
      handleChange()
      // Listen for changes
      media.addEventListener("change", handleChange)
      return () => media.removeEventListener("change", handleChange)
    }, [query])
    return matches
  }
  const isMd = useMediaQuery("(min-width: 768px)")
  const slidesToRender = isMd ? bannerImages : mobileBannerImages

  return (
    <div>

      {/* Carousel/Slider */}
      <div className="pt-4 md:pt-0 pb-6 md:pb-4">
        <ImageSlider images={slidesToRender} />
      </div>

      {/* frame37424 */}
      <div className="pl-4 md:px-20 pb-2 md:pb-10">
        <div className="flex lg:hidden">
          <CardSlider
            originType
            btn
            spacing={16}
          >
            {dataFrame37424.map((item, i)=>(
              <div key={i} className="keen-slider__slide min-w-[110px] md:min-w-[140px]">
                <Frame37424 key={i} url={item.url} imgPath={item.imgPath} title={item.title} />
              </div>
            ))}
          </CardSlider>
        </div>
        <div className="hidden mx-auto lg:flex lg:justify-around">
          {dataFrame37424.map((item, i)=>(
            <Frame37424 key={i} url={item.url} imgPath={item.imgPath} title={item.title} />
          ))}
        </div>
      </div>

      {/* Banner2 */}
      <Link to="/enterogermina">
        <div className="mx-auto px-4 md:px-20 pb-6 md:pb-10 duration-150 ease-in-out hover:scale-101">
            <video className="rounded-[7.36px] md:rounded-[9.76px]" width="100%" autoPlay muted loop playsInline>
              <source src="./assets/banner2.mp4" />
            </video>
        </div>
      </Link>

      {/* Card Slider 1 */}
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

      {/* Categorias */}
      <div className="flex flex-col md:flex-row mx-auto px-4 md:px-20 pb-6 md:pb-10 gap-5 justify-between">
        {categories.map((item, i) => (
          <Category
            key={i}
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
      <div className="flex flex-col mx-auto w-full pl-4 md:px-20 pb-6 md:pb-10">
        <div className="flex content-center items-center pb-4">
          <span className="text-base md:text-2xl font-semibold text-[#121212] pr-1">Lo mas buscado</span>
          <img src="./assets/carita-estrella.png" alt="Icono Cara estrella" className="w-6" />
          <Link to="/mas-buscados" className="pl-4 text-base font-medium text-blue-600 underline">Ver todos</Link>
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

      {/* Circle Slider 1 */}
      <div className="flex flex-col mx-auto w-full md:px-20 pb-6 md:pb-10 gap-4 md:gap-5">
        <div className="flex content-center items-center px-4">
          <span className="text-base md:text-2xl font-semibold md:font-bold text-[#121212] pr-1">Inspirados en tu bienestar</span>
          <img src="./assets/emoji-abrazo.png" alt="Emoji cara abrazo" className="w-6" />
        </div>

        <CardSlider
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
            "(min-width: 1200px)": {
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
            <div key={i} className="keen-slider__slide min-w-[150px]">
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
      <div className="mx-auto px-4 md:px-20 pb-6 md:pb-10">
        <img src="./assets/banner-vidasana.png" alt="Banner vida sana" className="rounded-lg"/>
      </div>

      {/* Circle Slider 2 */}
      <div className="flex flex-col mx-auto w-full md:px-20 pb-6 md:pb-10 gap-4 md:gap-5">
        <div className="flex content-center items-center px-4">
          <span className="text-base md:text-2xl font-semibold md:font-bold text-[#121212] pr-1">Marcas destacadas</span>
          <img src="./assets/emoji-estrella.png" alt="Emoji estrella" className="w-6" />
        </div>

        <CardSlider
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
            "(min-width: 1200px)": {
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
            <div key={i} className="keen-slider__slide min-w-[80px]">
              <CircleCard
                imgPath={item.imgPath}
                url={item.url}
              />
            </div>
          ))}
        </CardSlider>
      </div>
      
      {/* Carousel/Slider bottom px-4 */}
      <div className="mx-auto md:px-20 pb-2 md:pb-10">
        <ImageSlider images={slidesToRender} className="rounded-lg" btnClass="-" />
      </div>
      
    </div>
  )
}
