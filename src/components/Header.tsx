
export default function Header() {
  return (
    <div className="max-w-[1600px] mx-auto">
        <div>
            <video width="100%" autoPlay muted loop playsInline>
                <source src="/assets/bannersup.mp4" />
            </video>
        </div>

        <div className="flex px-20 gap-12 bg-[#FCFCFC] text-sm">

            <a href="/">
                <img src="/assets/logoeco.svg" alt="Logo Droguería La Economía" className="w-46.75 my-4.5"/>
            </a>

            <div className="my-4.5 bg-search flex flex-1 items-center rounded-lg">
                <input 
                    placeholder="Busca por producto, marca y más..."
                    autoComplete="off"
                    className="flex-1 text-[#98A2B3] pl-4 focus:outline-none"
                />
                <button className="px-2">
                    <img src="/assets/search.svg" alt="lupa" className="w-4.5"/>
                </button>
            </div>

            <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                    <img src="/assets/location.svg" alt="ubicacion" />
                    <span>Barranquilla</span>
                    {/* <img src="/assets/down-black.svg" alt="flecha abajo" /> */}
                </div>

                <div className="flex gap-1 items-center">
                    <img src="/assets/profile.svg" alt="perfil" />
                    <span>Iniciar Sesión</span>
                    <img src="/assets/down-black.svg" alt="flecha abajo" />
                </div>
                <div className="flex gap-1 items-center">
                    <img src="/assets/coupon.svg" alt="cupón" />
                    <span>Cupones</span>
                </div>
                <div className="flex items-center">
                    <img src="/assets/cart.svg" alt="carrito" />
                </div>
            </div>

        </div>

        <div className="flex px-20 py-2 mx-auto bg-blue-nav text-sm font-medium text-white gap-8">
            <div className="flex gap-2">
                <span>Medicamentos</span>
                <img src="/assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Botiquín</span>
                <img src="/assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Salud y belleza</span>
                <img src="/assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Cuidado del bebé</span>
                <img src="/assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Alimentos y bebidas</span>
                <img src="/assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
            <div className="flex gap-2">
                <span>Varios</span>
                <img src="/assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
            </div>
        </div>
    </div>
  )
}
