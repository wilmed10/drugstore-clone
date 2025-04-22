import { Link } from "react-router-dom"

type CircleCardProps = {
  imgPath: string
  url: string
  title?: string
}

export default function CircleCard({ imgPath, url, title }: CircleCardProps) {
  return (
    <Link to={url} className="mx-auto flex flex-col items-center justify-center text-center gap-2">
        <div className="w-[80px] md:w-[140px] h-[80px] md:h-[140px] rounded-full bg-white p-1 md:p-2 shadow hover:shadow-md transition-shadow flex justify-center items-center">
            <img
            src={imgPath}
            alt={title}
            className="max-w-full max-h-full object-contain"
            />
        </div>
        {title && (
          <div>
              <span className="text-[#121212] text-[10px] md:text-sm">{title}</span>
          </div>
        )}
    </Link>

  )
}