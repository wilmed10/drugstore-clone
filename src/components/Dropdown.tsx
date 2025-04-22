
import { ReactNode } from "react"

interface Props {
  trigger: ReactNode
  children: ReactNode
  className?: string
}

export default function Dropdown({ trigger, children, className = "" }: Props) {
  return (
    <div className="relative group ">
      {/* content */}
      <div className={`cursor-pointer ${className}flex items-center gap-1`}>{trigger}</div>
      <div
        className="absolute top-full mt-2 left-0 z-50 hidden group-hover:flex flex-col bg-white rounded-md shadow-md p-4 min-w-[150px]"
      >
        {children}
      </div>
    </div>
  )
}
