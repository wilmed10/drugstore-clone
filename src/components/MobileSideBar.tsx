import { useState } from "react"

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
        {/* nav mobile */}
        <div className="flex flex-row md:hidden bg-white py-2 px-6 gap-4">
            <div className="flex" onClick={toggleSidebar}>
            <img src="./assets/menu-icon.svg" alt="Icono menú" className="cursor-pointer" />
            </div>

            <div className="bg-search flex flex-1 items-center rounded-lg">
            <input
                placeholder="Busca por producto, marca y más..."
                autoComplete="off"
                className="flex-1 text-[#98A2B3] text-xs pl-4 focus:outline-none"
            />
            <button className="px-2">
                <img src="./assets/search.svg" alt="lupa" className="w-4.5" />
            </button>
            </div>
        </div>

        {/* Overlay y sidebar */}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex">
            {/* Fondo blur */}
            <div
                className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm"
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <div className="relative w-2/3 max-w-xs bg-white h-full shadow-lg z-50 p-6 flex flex-col gap-4 animate-slide-in-left">
                {/* close */}
                <button onClick={toggleSidebar} className="absolute top-4 right-4 text-2xl text-[#333]">
                &times;
                </button>

                {/* nav */}
                <nav className="flex flex-col gap-4 mt-8">
                {[
                    "Botiquín",
                    "Salud y Belleza",
                    "Alimentos y Bebida",
                    "Varios"
                ].map((item) => (
                    <div key={item} className="flex justify-between items-center text-[#333] text-base font-medium hover:text-[#007aff] cursor-pointer">
                    {item}
                    <img src="./assets/down-black.svg" alt="flecha abajo" className="w-3 h-3" />
                    </div>
                ))}
                </nav>
            </div>
            </div>
        )}
    </>
  )
}
