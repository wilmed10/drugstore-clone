
export default function Header() {
  return (
    <div className="max-w-[1600px] mx-auto">
        {/* banner */}
        <div>
            <video width="100%" autoPlay muted loop playsInline>
                <source src="./assets/bannersup.mp4" />
            </video>
        </div>

        <div className="flex px-6 md:px-20 justify-between md:gap-2 lg:gap-12 bg-[#FCFCFC] text-sm">

            <a href="/">
                <img src="./assets/logoeco.svg" alt="Logo Droguería La Economía" className="w-37 md:w-47 my-4.5"/>
            </a>
            {/* search */}
            <div className="hidden my-4.5 bg-search md:flex flex-1 items-center rounded-lg">
                <input 
                    placeholder="Busca por producto, marca y más..."
                    autoComplete="off"
                    className="flex-1 text-[#98A2B3] text-sm pl-4 focus:outline-none"
                />
                <button className="px-2">
                    <img src="./assets/search.svg" alt="lupa" className="w-4.5"/>
                </button>
            </div>
            {/* options (ubicacion, sesion, cupones, carrito) */}
            <div className="flex gap-4">
                <div className="hidden md:flex gap-1 items-center">
                    <img src="./assets/location.svg" alt="ubicacion" className="max-w-4.5" />
                    <span className="text-sm">Barranquilla</span>
                </div>
                <div className="flex gap-1 items-center">
                    <img src="./assets/profile.svg" alt="perfil" className="max-w-4.5" />
                    <span className="text-sm hidden md:flex">Iniciar Sesión</span>
                    <img src="./assets/down-black.svg" alt="flecha abajo" className="hidden md:flex" />
                </div>
                <div className="flex gap-1 items-center">
                    <img src="./assets/coupon.svg" alt="cupón" className="max-w-4.5" />
                    <span className="text-sm hidden md:flex">Cupones</span>
                </div>
                <div className="flex items-center">
                    <img src="./assets/cart.svg" alt="carrito" className="max-w-4.5" />
                </div>
            </div>

        </div>
        {/* navbar desktop */}
        <div className="hidden md:flex px-6 md:px-20 py-2 mx-auto bg-blue-nav text-sm font-medium text-white gap-8">
            <div className="flex gap-2">
                <span>Medicamentos</span>
                <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Botiquín</span>
                <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Salud y belleza</span>
                <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Cuidado del bebé</span>
                <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Alimentos y bebidas</span>
                <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Varios</span>
                <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
        </div>
        {/* search for mobile */}
        <div className="flex flex-row md:hidden bg-white py-2 px-6 gap-4">
            <div className="flex">
                <img src="./assets/menu-icon.svg" alt="Icono menú" />
            </div>
            {/* search mobile */}
            <div className="bg-search flex flex-1 items-center rounded-lg">
                <input 
                    placeholder="Busca por producto, marca y más..."
                    autoComplete="off"
                    className="flex-1 text-[#98A2B3] text-xs pl-4 focus:outline-none"
                />
                <button className="px-2">
                    <img src="./assets/search.svg" alt="lupa" className="w-4.5"/>
                </button>
            </div>
        </div>
    </div>
  )
}
