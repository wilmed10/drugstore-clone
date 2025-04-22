import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

type BannerImage = {
  imgPath: string
  url: string
}

type BannerCarouselProps = {
  images: BannerImage[]
  className?: string
  btnClass?: string
}

export default function ImageSlider({ images, className, btnClass }: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  /* sliderRef(to slider div) - instanceRef(to call next and prev methods) */
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      origin: "center",
      perView: "auto",
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
  })

  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)  // 4 sec

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [instanceRef])

  return (
    <div className="relative ">

      {/* Slides */}
      <div ref={sliderRef} className="keen-slider ">
        {images.map(({ url, imgPath }, i) => (
          <div key={i} className={`keen-slider__slide flex justify-center items-center px-1 md:px-0 ${className || ""}`} style={{ minWidth: "calc(100% - 32px)" }}>
            <Link to={url} className="w-full h-full">
              <img
                src={imgPath}
                alt={`slide-${i}`}
                className="w-full h-full object-cover rounded-lg md:rounded-none"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className={`hidden absolute ${btnClass || ""}left-4 top-1/2 -translate-y-1/2 z-10 bg-slider-button hover:bg-slider-border-button w-8 h-8 rounded-full shadow md:flex items-center justify-center border border-slider-border-button`}
      >
        <img src="./assets/left-arrow.svg" alt="Flecha izquierda" className="w-2.5" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={`hidden absolute ${btnClass || ""}right-4 top-1/2 -translate-y-1/2 z-10 bg-slider-button hover:bg-slider-border-button w-8 h-8 rounded-full shadow md:flex items-center justify-center border border-slider-border-button`}
      >
        <img src="./assets/right-arrow.svg" alt="Flecha derecha" className="w-2.5" />
      </button>

      {/* Indicators */}
      <div className="hidden md:flex absolute bottom-3 w-full justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === idx ? "bg-[#007AFF]" : "bg-[#007AFF]/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
