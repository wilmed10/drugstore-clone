import { Link } from "react-router-dom"

type categoryProps = {
    title: string,
    imgPath: string,
    url: string,
    description: string,
    category1: string,
    imgPath1: string,
    category2: string,
    imgPath2: string,
    category3: string,
    imgPath3: string,
}

export default function Category({title, imgPath, url, description, category1, imgPath1, category2, imgPath2, category3, imgPath3}: categoryProps) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg gap-6">

        <div className="flex flex-col gap-2">    
            <div className="flex">
                <span className="text-2xl font-bold pr-1">{title}</span>
                <img src={imgPath} alt={title} className="w-6 h-8" />
            </div>
            <p className="text-base">{description}</p>
        </div>

        <Link to={url} className="group flex justify-between gap-6 items-center">
           
            <div className="flex flex-col items-center">
                <div className="relative w-[90px] h-[90px] flex items-center justify-center transition-transform duration-150 ease-in-out group-hover:scale-105">
                <div className="absolute inset-0 rounded-full border-[1.3px] border-gray-circle z-0" />
                    <img
                        src={imgPath1}
                        alt={category1}
                        className="relative z-10 max-w-[100px] max-h-[100px] object-cover"
                    />
                </div>
                <span className="mt-10 pt-2 text-center text-[#121212] text-xs font-semibold">
                    {category1}
                </span>
            </div>
            <div className="flex flex-col items-center">
                <div className="relative w-[90px] h-[90px] flex items-center justify-center transition-transform duration-150 ease-in-out group-hover:scale-105">
                <div className="absolute inset-0 rounded-full border-[1.3px] border-gray-circle z-0" />
                    <img
                        src={imgPath2}
                        alt={category2}
                        className="relative z-10 max-w-[100px] max-h-[100px] object-cover"
                    />
                </div>
                <span className="mt-10 pt-2 text-center text-[#121212] text-xs font-semibold">
                    {category2}
                </span>
            </div>
            <div className="flex flex-col items-center">
                <div className="relative w-[90px] h-[90px] flex items-center justify-center transition-transform duration-150 ease-in-out group-hover:scale-105">
                <div className="absolute inset-0 rounded-full border-[1.3px] border-gray-circle z-0" />
                    <img
                        src={imgPath3}
                        alt={category3}
                        className="relative z-10 max-w-[100px] max-h-[100px] object-cover"
                    />
                </div>
                <span className="mt-10 pt-2 text-center text-[#121212] text-xs font-semibold">
                    {category3}
                </span>
            </div>
            
        </Link>

    </div>
  )
}


/* 
<div className="flex flex-col items-center">
    <div className="relative w-[122px] h-[122px] flex items-center justify-center transition-transform duration-150 ease-in-out group-hover:scale-105">
    <div className="absolute inset-0 rounded-full border-[1.3px] border-gray-circle z-0" />
        <img
            src={imgPath2}
            alt={category2}
            className="relative z-10 max-w-[130px] max-h-[130px] object-cover"
        />
    </div>

    <span className="mt-2 text-center text-[#121212] text-xs font-semibold">
        {category2}
    </span>
</div>
 */

/* Scale just img */
{/* <div className="flex flex-col items-center">
    <div className="relative w-[122px] h-[122px] flex items-center justify-center rounded-full ">
        <div className="absolute inset-0 rounded-full border-[1.3px] border-gray-circle z-0" />
        <img
            src={imgPath1}
            alt={category1}
            className="relative z-10 object-cover transition-transform duration-150 ease-in-out group-hover:scale-105"
        />
    </div>

    <span className="mt-2 text-center text-[#121212] text-xs font-semibold">
        {category1}
    </span>
</div> */}