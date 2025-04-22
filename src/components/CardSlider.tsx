import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef, ReactNode } from "react"

type Breakpoints = {
  [key: string]: {
    slides: {
      perView: number
      spacing?: number
    }
  }
}

type CardSliderProps = {
  children: ReactNode
  className?: string
  originType?: boolean
  btn?: boolean
  autoplay?: boolean
  interval?: number
  breakpoints?: Breakpoints
  spacing?: number
  navigation?: boolean
  swipe?: boolean
}

export default function CardSlider({
  children,
  className = "",
  originType = false,
  btn = true,
  autoplay = false,
  interval = 5000,
  breakpoints,
  spacing = 0,
  swipe = true,
}: CardSliderProps) {

  const originValue = originType ? "auto" : "center"

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: originValue,
      perView: "auto",
      spacing: spacing,
    },
    breakpoints,
    drag: swipe,
  })

  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!autoplay || !instanceRef.current) return

    autoplayRef.current = setInterval(() => {
      instanceRef.current?.next()
    }, interval)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [autoplay, interval, instanceRef])

  const showBtn = btn ? "lg" : "md"

  return (
    <div className={`relative w-full overflow-visible ${className}`}>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>

      <div>
        <button
          onClick={() => instanceRef.current?.prev()}
          className={`hidden ${showBtn}:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-slider-button hover:bg-slider-border-button w-8 h-8 rounded-full shadow items-center justify-center border border-slider-border-button`}
        >
          <img src="./assets/left-arrow.svg" alt="Flecha izquierda" className="w-2.5" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className={`hidden ${showBtn}:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-slider-button hover:bg-slider-border-button w-8 h-8 rounded-full shadow items-center justify-center border border-slider-border-button`}
        >
          <img src="./assets/right-arrow.svg" alt="Flecha derecha" className="w-2.5" />
        </button>
      </div>
      
    </div>
  )
}
