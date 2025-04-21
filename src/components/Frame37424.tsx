import { Link } from "react-router-dom";

type FrameProps = {
    url: string,
    imgPath: string,
    title: string
}

export default function Frame37424( { url, imgPath, title } : FrameProps ) {
  return (
    <Link to={ url } className="flex flex-col items-center relative w-fit">
        <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full border-[3.36px] border-blue-circle z-0" />
        <img 
          src={ imgPath } 
          alt={ title }
          className="relative z-10 h-[134px] object-cover transition-transform duration-150 ease-in-out hover:scale-110"
        />
        <span className="mt-2 text-center text-[#101828] text-base font-medium">{ title }</span>
    </Link>
  )
}
